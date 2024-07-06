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

- <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/02-course-by-trevor-sawler/concurrency/complex-mutex">Complex Mutex examle</a>
- <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/02-course-by-trevor-sawler/concurrency/producer-consumer">Producer - Consumer Problem with Channels </a>

## Channels

Channels are the preferred method of sharing memory. **Go's approach to concurrency is share memory by communicating, don't communicate by sharing memory.** This is achieved primarily through the use of channels.  
- A means of allowing communication to and from a goroutine
- Channels can be buffered or unbuffered (takes one, or many)
- Once you are done with a channel, you must close it
- Channels typically only accept a given type of interface

#### The Sleeping Barber
- A classic computer science problem
- A barber goes to work in a barbershop with a waiting room with a fixed number of seats.
- If no one is in the waiting room, the barber goes to sleep.
- When a client shows up, if there are no seats available, he or she leaves.
- If there is a seat available, and the barber is sleeping, the client wakes the barber up and gets a hair cut.
- If the barber is busy, the client takes a seat and waits his or her turn
- Once the shop closes, no more clients are allowed in, but the barber has to stay until everyone who is waiting gets a hair cut.

### **How Channels are Working?**

```go
func shout() {
	for {
		fmt.Println("executing loop")
	}
}

func main() {
	shout()
}
```

With this code block it is going to print that executing loop endlesly and it never exists and that makes perfect sense.

```go
func main() {
	go shout()
	time.Sleep(10 * time.Second)
}
```

If I add this codes, start the function, shout in its own goroutine and this runs in the background. Then we sleep for 10 seconds. If I wait for 10 seconds, the program would terminate.

The program is that the main function now has absolutely no way of communicating with that one that's running in the background. As you can see, the program terminated because 10 seconds went by. 

**Channels allow us to communicate between goroutines.** So channels are nothing more than pipes. There are ways of pushing data to a goroutine or getting data from another goroutine. So how do we make that work?

Well, create two channels, ping and pong; then pass those channels to goroutine, `shout()`. So in shout insea of printing out executing loop, let's get a value from a channel. Inside this endless for loop, the one that never exists, going to accept a value from the channel called ping.

```go
func main() {
	ping := make(chan string)
	pong := make(chan string)

	go shout(ping, pong)
}

func shout(ping chan string, pong chan string) {
	for {
		s := <-ping 
		// when you get something from the channel
		// ping put in the variable s.
	}
}
```

So once I have that, how do I write information to a channel? These are almost exactly same syntax, but to the channel pong, going to send whatever I get from the channel ping;

```go
func shout(ping chan string, pong chan string) {
	for {
		s := <-ping
		pong <- fmt.Sprintf("%s!!!", strings.ToUpper(s))
	}
}
```

This is now waiting to receive something from the channel ping and it's sending it back on the channel pong. I have to send something to that channel. I am going to send something to that channel and we will do it exactly the same as we did before. Then we should wait for the response. If our loop is ended, we should close out channels. Let's build it in main function;

```go
func main() {
	ping := make(chan string) // accept strings
	pong := make(chan string) // accept strings

	go shout(ping, pong)

	fmt.Println("Type something and press ENTER (enter Q to quit)")

	for {
		// print a prompt
		fmt.Print("-> ")

		// get user input
		var userInput string
		_, _ = fmt.Scanln(&userInput)

		if userInput == strings.ToLower("q") {
			break
		}

		ping <- userInput
		response := <-pong
		fmt.Println("Response: ", response)
	}

	fmt.Println("All done. Closing channels.")
	close(ping)
	close(pong)
}
```

When the program begins execution, very first thing I do is create two channels. Then I take those two channels and pass them to the function `shout()`	with the keyword go which sends start this function up here running in the background and just run forever, because it is a for loop with no exit condition.

Then I have my for loop starting at `main()` function. In this for loop we are scanning user inputs, take whatever they types except **q**, send it to ping. Ping receives it or send it to the ping channel. `shout()` listens to the ping channel, gets whatever it receivesi stores it in variable s, converts it to uppercase, adds three exclamation marks and sends that string back on the pong channel. 

Once I have sent it to the ping channel, I wait for a response from the pong channel, then I print it out. This is an explanation for how channels work.

---

Now there is one more thing that will make your life easier in some cases. It is also possible when you are declaring parameters in a function like this. To specify a channel is being send only or is being receive only. 

When you think it through, we are only ever receiving on the ping channel and we are all only ever sending pong channel. So how do I make this receive only channel? 

```go
func shout(ping <-chan string, pong chan<- string) {
	for {
		s := <-ping
		pong <- fmt.Sprintf("%s!!!", strings.ToUpper(s))
	}
}
```

When I add an arrow to chan's left it will be a receive only channel. If I add an arrow to chan's right it will be a send only channel.

That' absolutely not necessary, but it does **prevent you from accidentally trying to send to a channel** that you are intending to receive upon.

> If I comment out `go shout(ping, pong)` line, there is nothing listening to ping channel. So when I execute it, I get a fatal error. **All goroutines are asleep, Deadlock.** Go tells us you are sending something to a channel, but nothing is ever going to receiving. There is no listening to that channel.

> When I receive something from a channel, I actually have an optional second parameter I can get from that channel and I will just call it. `s, ok :- <-ping`. I can check to see if ok is false. It just tells me **whether the receive value was sent on the channel or it is a zero value return because the channel is closed and empty.** This is an easy way to make sure that the channel is in fact not closed, and we will be using that later.

### **How Select Statement Works?**

They are only useful for chdannels and there are a lot like the switch statement or what's called a case statement in other languages, but there are only for channels and you **can only use channels with the select statement.**

Let's write two function to accept channel and with select statement look at them;

```go
func server1(ch chan string) {
	for {
		time.Sleep(6 * time.Second)
		ch <- "This is from server 1"
	}
}

func server2(ch chan string) {
	for {
		time.Sleep(3 * time.Second)
		ch <- "This is from server 2"
	}
}

func main() {
	fmt.Println("Select with channels")
	fmt.Println("--------------------")

	channel1 := make(chan string)
	channel2 := make(chan string)

	go server1(channel1)
	go server2(channel2)

	for {
		select {
		case s1 := <-channel1:
			fmt.Println("Case one:", s1)
		case s2 := <-channel1:
			fmt.Println("Case two:", s2)
		case s3 := <-channel2:
			fmt.Println("Case three:", s3)
		case s4 := <-channel2:
			fmt.Println("Case four:", s4)
		default:
			// avoiding deadlock
		}
	}
}
```

When we execute a program main gets executed, we print out a little title. We create two channels. I start two goroutines, one that's listening to channel one and one that's listening to channel two. These will not exit until the program terminates because there is absolutely no reason for them to exit.

There is no condition where those will actually stop executing the for loops. Then I have an endless for loop here where I listen to, you know, channel one no problem. Then I listen to channel one again and printing out different message. 

You might say to yourself, how come he is not closing the channels? This is a highly contrived example. There is no situation where we ever get inside of this for loop. 

**Let's look at how it is working**

When this select statement executes it, there are multiple cases that match the same condition. If there is **more than one case that the select can match, it just chooses one at random.** There are lots of situations where that's useful.

Is is also possible to have, just as switch statement, a default case, this default case is useful for avoiding deadlock. If there is a situation where none of these channels are listening, then the default case will stop your program from crashing. This is a great situation.

> Buffered channels `ch := make(chan int, 100)`, to know how many goroutines you have launched or we want to limit the number of goroutines we launch, or we wat to limit the amount of work that's queued up. <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/02-course-by-trevor-sawler/concurrency/buffered-channels">Code</a>

<hr>

### **Sleeping Barber** - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/02-course-by-trevor-sawler/concurrency/sleeping-barber">Code</a>

<hr>

### Real World Project - Building a Subscription Service

- A more real-world use of concurrency
- A fictitious service that allows people to buy a subscription
- This section sets up the web application.

We are going to need a wait group and we are going to be using that right away. I can see that If I am going to be sending email in this application and I am going to be sending email concurrently, if someone decides to restart the application for whatever reason, maybe you are going to do some maintenance or whatever it is. You don't wanna to just way, stop the application. You want to wait until any mail that is waiting to be send gets delivered and then you quit. That's and **ideal situation for a wait group.**

They are at a very high level are the kinds of things we are going to want to do.

So in this project, we are going to be using Postgres as a database. We are going to be using Redis as a store for our session information. We are also going to require some kind of mail server, a dummy mail server that will capture mail for us. I want to use Docker for that.

```yaml
version: '3'

services:

  #  start Postgres, and ensure that data is stored to a mounted volume
  postgres:
    image: 'postgres:14.2'
    ports:
      - "5432:5432"
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: concurrency
    volumes:
      - ./db-data/postgres/:/var/lib/postgresql/data/

  #  start Redis, and ensure that data is stored to a mounted volume
  redis:
    image: 'redis:alpine'
    ports:
      - "6379:6379"
    restart: always
    volumes:
      - ./db-data/redis/:/data

  #  start mailhog
  mailhog:
    image: 'mailhog/mailhog:latest'
    ports:
      - "1025:1025"
      - "8025:8025"
    restart: always
```

When running it with `docker-compose up -d`, it takes a while the very first time it starts it, because it has to initialize the database. What it is doing is not just initializing an empty database store.

Now once that's up and running, you are going to want to get your favorite database client aswell. We can look for <a href="https://www.beekeeperstudio.io/get">Beekeeper Studio</a>.

After the db connection initialization, with docker containers are running I should be able to run this program. Of course I need a DSN. We can actually set an environment variable and run the program. But this is the point we should start using **make**.

```makefile
DSN=host=localhost port=5432 user=postgres password=password dbname=concurrency sslmode=disable timezone=UTC connect_timeout=5
BINARY_NAME=myapp.exe
REDIS="127.0.0.1:6379"

## build: builds all binaries
build:
	@go build -o ${BINARY_NAME} ./cmd/web
	@echo back end built!

run: build
	@echo "Starting..."
	set DSN=$(DSN) && set REDIS=$(REDIS) && start /min cmd /c $(BINARY_NAME) &
	@echo back end started!

clean:
	@echo Cleaning...
	@DEL ${BINARY_NAME}
	@go clean
	@echo Cleaned!

start: run

stop:
	@echo "Stopping..."
	@taskkill /IM ${BINARY_NAME} /F
	@echo Stopped back end

restart: stop start

test:
	@echo "Testing..."
	go test -v ./...
```

- We have DSN, that's our data source name, that's for connecting dbs.
- There is exe at the name of the binary name so windows will know it's an executable.

## Working with Microservices in Go

- Breaking monolith up from functions/packages to completely seperate programs.
- Communicate via JSON/REST, RPC, gRPC and over a messaging queue.
- Easier to scale
- Easier to maintain
- Harder to write

## Communicating between services using Remote Procedure Calls (RPC)

This is not between, the user who's using a web browser and the broker. We are going to use JSON for that, because that's most widely accepted and functional way of doing things between a browser and some service. We are talking about connections between microservices. So far, in the vast majority of cases, we are actually posting JSON between microservices. For example, somebody hits the broker and says authenticate and the broker accepts the JSON request unmarshals it looks at what it has to do, sends another JSON request of to the authentication microservice, which then on marshall to json and does something with it.

We also, have a means of logging using the queue. So when we log something right now with our frontend, the user sends JSON off to the broker which umarshals the JSON and then pushes it into the rabbitMQ into the queue and then the listener gets pushed a payload from the rabbitMQ and does something with it and logs it and that works really well as well.

To one thing thats really important to know about RPC is that in go, if you are gonna use RPC, it has to be go applications running on both end. So I have a go application running in my broker and I have a go application running in my logger. 

### gRPC

So now we have a number of ways of communicating between microservices.
- JSON POST, receives JSON and something with it, creates another JSON response and sends it back.
- RPC, presupposes that application that is acting as the client is written in go and the application acting as the server is written in go.
- We can also push something onto a queue like rabbitMQ and have a listener to receive events from that queue and then do something with them.

Now, we are going to move on to another means of communicating between microservices and that is gRPC, nobody's really sure what the G stands for. There is big difference between gRPC and RPC. One of the most significant ones is that you don't have to have both ends. The client and the server written in go. gRPC actually supports java and kotlin and PHP all kinds of languages.

<hr>

In order to work with gRPC, we need to install some additional tools and there is two things. When we are writing code that uses gRPC, these tools actually generate some code for us. We write something called a proto file and then we run a command that wil execute these two tools and thatt generates code for us.

```sh
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.27
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```

```proto
syntax = "proto3";

package logs;

option go_package = "/logs";

message Log {
    string name = 1;
    string data = 2;
}

message LogRequest {
    Log logEntry = 1;
}

message LogResponse {
    string result = 1;
}

service LogService {
    rpc WriteLog (LogRequest) returns (LogResponse);
}
```

#### Generating gRPC Code From the Command Line

Need to be in the directory called logs inside the logger service where the directory that has this proto. There is a little binary application called <a href="https://grpc.io/docs/protoc-installation/">protoc</a>. 

To install it;
```sh
cp protoc ~/go/bin
which protoc
protoc --version
```

We are ready to run necessary command. 

```sh
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative logs.proto
```

Here is the command, start with the command `protoc` and this has to be run right beside the `.proto` file. So inside the logs directory at the root of the logger service.

When I execute the command I have two files, `logs_grpc.pb.go` and `logs.pb.go`

<hr>

Now we have got our proto defined our proto file, we generated the necessary source code in the server, we wrote the necessary code in the server to perform a particular action and to listen for gRPC connections. Then we went over to the client, which is the broker. We again copied the protocol over. We generated the necessary source code with that command to protoc and we wrote the necessary code to connect to the server and to make a request to it.

So the last step will be to go and modify the frontend to put in a button that logs things via gRPC and try it out.

## Deploying our Distributed App using Docker Swarm

Kubernetes is really overkill for a particular company or individual needs, particularly if you don't have a dedicated person or team who works on Kubernetes all day, every day. There is an awful lot of moving parts in Kubernetes. Docker Swarm can easily be managed by an individual person, and that person doesn't have to work on it all the time. - **Look at Brett Fisher, who has an excellent course in Swarm and Docker and Kubernetes on Udemy.** 

Docker Swarm is nothing more than a container orchestration service. You can look at some of the features <a href="https://docs.docker.com/engine/swarm/">right here</a>. Simple short story is that it allows you to deploy one or more instances of a Docker image and have Docker Swarm take care of how those instances are deployed. So far example, I can go on the node or digital ocean and create say, three nodes, three individual server instances and each one of those to Docker Swarm and deploy my microservices up there. Swarm manages, keeping them up, keeping multiple copies of them up when necessary. It makes it remarkably easy to scale your microservices. 

### Initialize Docker Swarm - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/02-course-by-trevor-sawler/go-micro/swarm.yml">swarm.yml</a>

I have initialized the swarm now I can write; `docker stack deploy -c swarm.yml myapp`, with this line of code when we write `docker service ls`, we can see that I have one replica for each of service and they are up and started. 3 column tells me whether it is replicated. 	

We are working at local, so we can start frontend with `make start`.

### Scaling Services

We only have one instance of each of the services and when I write `docker service ls`, each service has a unique ID in the first column.

Now one of the great things about any container orchestraion service is we can have multiple instances of many of our services, not all of them. For example, the ones that are global here in the mode global, we can only have one of those.

If I want to scale a service up, it is literally as simple as typing `docker service scale`, then name of the service;

```sh
docker service scale myapp_listener-service=3
```

Ten we can see three instances of the lsitener service and if I want to take it down to two, I just again use that scale command.

That can be incredibly useful when you want to have multiple copies of your services running. Other great thing about this is if something goes wrong, if, for example, the logger service suddenly dies, Docker swarm will just create another instance and bring it back up. So it keeps things up and running for me.

That can be **incredibly useful**, even if you are running everything on a single server. In other words, you have one node in your swarm. This is a convenient way of having multiple instances of what you need to be running and to ensure that they stay up and running.

We have deployed this application, but applications don't remail static over time. You are adding functionality or changing something and you need to update your **docker swarm**.

### Updating Services

Let's assume that we are actually making a change to the logger service.

```sh
docker build -f logger-service.dockerfile -t erenyusufduran/logger-service:1.0.1 .
docker push erenyusufduran/logger-service:1.0.1
```

Any time I update a service to a new version, I want at least two to be running. That's because when I update the service with at least two replicas going, there will be almost no downtime. **Probably no downtime**, because it updates the service **one at a time for each instance**. So let's scale the docker service scale and give it the name.

```sh
docker service scale myapp_logger-service=2
```

Now I am going to update my logger service to the new version, and that's really simple.

```sh
docker service update --image erenyusufduran/logger-service:1.0.1 myapp_logger-service
```

Now it is been updated to **1.0.1**. You cadn downgrade things aswell. Updating services is pretty trivial and I am sure you have noticed this with other projects. You can actually automate this service with continuous integration.

To stop swarm `docker stack rm myapp`, `docker swarm leave --force`