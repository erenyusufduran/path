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

