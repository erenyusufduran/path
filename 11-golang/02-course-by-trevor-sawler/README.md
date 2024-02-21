## Golang Concurrency

Go has a very different approach to concurrency than most other programming langs, and it's summed up by this statement, which was produced by the authors of Go; 

> Don't communicate by sharing memory, share memory by communicating.

This begs the question who's communicating? Whos talking to whom?

In Go, it's remakably easy to fire something off so that it runs in the background. So say you are writing a program and you have two functions and you want them to run at the same time to make that happen, just type the word, **go** before the call to those functions and suddenly they are running concurrently in the background. Well, then how do you talk with it? 

Well, there is a number of ways of talking to it.
- You can use primitives. 
    - This comes from something called the sync package in go standard library, where you can lock something, you can say I am using this, nobody else can touch this until I am done with it.
    - You can say once I am done this program, I am going to tell something called a wait group that I am finished so you can do it that way.
- You can use more useful and productive way in go. You can have go routines, talk to one another using something called channels.

Don't overengineer things by using shared memory and complicated, error prone synchronization primitives; instead, *use message passing between goroutines so variables and data can be used in the appropriate sequence*. 

Don't just lock memory or say to someone, hey I am using this. Instead, just pass data around using channels, as far as I know, are pretty much unique to go and they are incredibly useful. 

Another thing to bear in mind:
- A golden rule for concurrency: *If you don't need it*, **don't use it.**
    - Concurrent programming is error prone, even go. which makes it easier. It doesn't make it easy, it just makes it easier. 
    - When you are running concurrent programs, it's remarkably easy to introduce a problem that you might not see for months or in some cases, even years.
- Keep your application's complexity to an absolute minumum; it's easier to write, easier to understand, and easier to maintain.

### Goroutines, `go` keyword, Wait Groups

```go
func printSomething(s string) {
	fmt.Println(s)
}

func main() {
	printSomething("This is the first thing to be printed!")
	printSomething("This is the second thing to be printed!")
}
```

Know that firstly first thing, then second thing will executed.

It we add `go` in front of function that go word does is it tells the compiler when you execute whatever comes after `go` command executed in it's goroutine. 

```go
func main() {
	go printSomething("This is the first thing to be printed!")
	printSomething("This is the second thing to be printed!")
}
```

But if I run the program, what should happen?

```sh
This is the second thing to be printed!
```

i only see this is the second thing to be printed. What happened there? It is pretty straightforward. This program executed so quickly that there was not sufficient time for that goroutine, the one I that the first printSomething function. 

How do I fixed that?

```go
for i, x := range words {
	go printSomething(fmt.Sprintf("%d: %s", i, x))
}
```

When you execute that, it will not display in any order. Another important thing have to undestrand about goroutines. It doesn't matter what order you them in.

Here is where **Wait Groups** come to the rescue and wait groups are so simple. We can use it the top of the functions with;

```go
var wg sync.WaitGroup
```

and then, we can say it, how many times it wait?

```go
wg,Add(9)
```

After the for loop, all I need to write;

```go
wg.Wait()
```

Wait group will wait until the wait group (wg) is set to zero. I am say it to nine, but I am not decreasing the wait group. Goroutine spawning for it, which means I need to have access to that wait group in that particular goroutine.

So what I can do is come up `printSomething` function and say I am going to take a string and also take wg, which is a pointer to center wait group. 

```go
func printSomething(s string, wg *sync.WaitGroup) {
	fmt.Println(s)
}

for i, x := range words {
    go printSomething(fmt.Sprintf("%d: %s", i, x), &wg)
}
```

Once you have created a wait group, you really shouldn't copy it after the fact. You need to be really cautious with wait groups. **Don't go copying them and modifying them**, just pass them around as pointers. It's much simpler.

The last change I need to make here in print something is to hand this WG which will be ignored aswell.

After giving wait group as a parameter, we need to decrement by one. We are doing it with `defer` keyword with `wg.Done()`

```go
func printSomething(s string, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println(s)
}
```

<hr>

If I give wait group add length to 12, my program waits forever or it's give error. **All goroutines are sleep deadlock.** That's one of the reasosns why you almost never use a hardcoded value like 12.

## Race Conditions, Mutexex & Channels

When you are working with concurrent programming it is really important to be aware of race conditions.

#### sync.Mutex

- Mutex = `mutual exclusion` - allows us to deal with race conditions
- Relative simple to use
- Dealing with shared resources and concurrent/parallel goroutines
- Lock / Unlock

#### Race Conditions

- Race conditions occur when multiple goroutines try to access the same data.
- Con be difficult to spot when reading code.
- Go allows us to check for them when running a program, or when testing our code with go test.

Since I have no idea which goroutine is going to execute first or which one is going to end first and both of these access and perform some operation that data, bad things can happen.

#### Channels

- Channels are a means of having goroutines share data.
- They can talk to each other. 
- This is Go's philophy of having things share memory by communicationg, rather than communication by sharing memory.
- The Producer/Consumer Problme

#### Code

```go
var msg string
var wg sync.WaitGroup

func updateMessage(s string) {
	defer wg.Done()
	msg = s
}

func main() {
	msg = "Hello, World!"

	wg.Add(2)
	go updateMessage("Hello, universe")
	go updateMessage("Hello, cosmos")
	wg.Wait()

	fmt.Println(msg)
}
```

There is a race condition, because two goroutines are running at the same time, and they are trying to modify same value.

#### Solving with sync.Mutex

```go
var msg string
var wg sync.WaitGroup

func updateMessage(s string, m *sync.Mutex) {
	defer wg.Done()
	m.Lock()
	msg = s
	m.Unlock()
}

func main() {
	msg = "Hello, World!"

	var mutex sync.Mutex

	wg.Add(2)
	go updateMessage("Hello, universe", &mutex)
	go updateMessage("Hello, cosmos", &mutex)
	wg.Wait()

	fmt.Println(msg)
}
```

Before write to the variable msg use `m.Lock()` and nobody else can change it's value until I am done with it. Once I am done with it, I call `m.Unlock()`.

I am not sure what the result is going to be, because I haven't actually waited for one particular goroutine to finish before the other one does. It might be universe or cosmos. Important thing in there is that I am accessing data safely. This is what is called a **thread safe operation.**

- <a href="">Complex Mutex examle</a>
- <a href="">Producer - Consumer Problem with Channels </a>
