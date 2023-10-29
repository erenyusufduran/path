# Cloud Computing Software Architecture Patterns

### Types of System Requirements
- Function Requirements
  - Dictate the functionality / features of the product
- Non-Functional Requirements (Quality Attributes)
  - Performance,
  - Scalability,
  - Availability,
  - Reliability
- System Constraints
  - Limit our design choices

Software architecture patterns that help us handle errors as well as quickly and safely release new features while still providing our users with uninterrupted service, can benefit every company. So it would be really nice to have a set of common patterns that we could easily apply to the achitecture of any system. With this way, we can focus on **building the innovative functionality** that differentiates our product.

### Software Architecture Patterns
- Universal
- Successfully used by many companies
- Implementation independent

Cloud computing provides an on-demand infrastructure to any company regardless of its product. 

### Cloud Computing Pattern

- Infrastructure such as:
  - Virtual machines
  - Network routers
  - Switches
  - Storegae devices
- Platform wih services like: 
  - Databases
  - Message Brokers
  - Load Balances
  - Monitoring
  - Log Services
  - Function as a Service

## Software Extensibility Architecture Patterns

That allows us to extend the functionality and the capabilities of our system. Those patterns are called extensibility patterns.

### Sidecar Pattern

**Problem Statement**

When we look at the software architecture of any system, each service has its own core function. Its basically the reason for its existence. For example, the core functionality of a web server is to serve web content to the web. For customer service is to store and retrieve information about our company's customers.

However, in addition to the core functionality of each service, in most cases, it needs to be able to do other things. For example, each of those services typically needs to collect internal metrics about its performance and send them to a monitoring seervice periodically. It also needs to log events and send them to a distributed login service. Also, to communicate with other services, it typically needs to connect to a service registry where it gets the most up to date adresses of all the services. Finally, it needs to pull configuration files and parse them so it can adapt its business logic on the fly without having to be restarted.

Those are just a few examples of use cases where we need tot add additional functionality to a service beyond its core business logic. Now we can also notice that many of those additional functionalities are needed by multiple services and not just one. 

So following the code reusability principle, one solution can be implementing all those functionalities as a library or multiple libraries. We can import and reuse inside each service codebase. However, there is one major problem with this approach. In a typical large scale organization that follows a microservices architecture or any multiservice architecture, we may want to untilize different programming languages for different programs.

So it's not uncommen to have one service implemented in Java and another in Python, another in go and so on. So in this situation, we can't really use the same library accross multiple services and we would have to re-implement each library for each language, which wouldn't be very scalable. In addition to the scalability problem, different implementations of the same library in different languages may be incompatible or inconsistent with each other. This can be either due to language specific differences, such as different data types or straight out bugs in the implementation of one of the versions of the library. 

On the other hand, deploying those shared functionalities as seperate services feels like an overkill and has its own problems. So the best solution for that is called **Sidecar Pattern**.

The analogy this pattern is followins is like a sidecar on a motorcycle, which allows us to extend the capacity of a motorcycle and add an additional passenges or space for luggage. In this pattern, we take the additional functionality requried by the application and run it as a seperate process or seperate container on the same server as the main application. 

So we get the benefit of isolation between the main service instance in the sidecar process, but at the same time they are still sharing the same host. So the communication between them is very fast and reliable. In addition, since the sidecar and the core application are running together, they both have access to the same resources, like the file system, CPU or memory. This way the sidecar can do things like monitor the host CPU or memory and reported on the main applicaiton's behalf. 

It can also read the application log files and update it's configuration files easily without the need for any network communication. Also the isolation we get from running the sidecar as a seperate process allows us to implement the sidecar in one language once and reuse it in any other service it needs it. 

If we want to make an update, for example to all the services that send logs to our distributed login service or we need to do is upgrade the sidecar code and deploy it to all the service instances. At the same time typically, changes we make to the sidecar don't happen very often. So every time there is a change in the core service functionality, the team that owns that service needs to test only the changes they made in the business logic and not the functionality of the sidecar. 

This makes testing and deploying new business features much faster and easier. 

### Ambassador Sidecar Pattern

An ambassador is a special sidecar that is responsible for sending older network requests on behalf of the service. It is basically like a proxy, but it runs on the same host as the core application. The main benefit of using this pattern is that we offload all the complex network communication logic outside of the service responsibility. This way the codebase of the core service becomes a lot simplet as it contains all the relevant business logic and nothing more.

On the other hand, the ambassador implementation can take all the heavy lifting of handling, retries and disconnections, authentication, routing, and the specifics of different communication protocols and versions. Now additionally since all the communicaiton from all the services is done through its co-located ambassador sidecar, using this pattern, we can also easily instrument our network communication and perform distributed tracing across mutliple services.

For example, if we need to troubleshoot a transaction that spans multiple services, we can tap into that data collected from multiple ambassador instances and get a clear picture of what our data flow looks like. That ultimately will help us isolate the issue to a particular service. 

- Sidecar pattern is a great way for us to extend the functionality of a service without having to re-implement the additional functionality to every programming language, and also without having to provision additional hardware for a seperate service by running the sidecar on the same host with the main application instance, we get the benefist of the isolation between the sidecar and the core service, but also we get the benefits of running them close together in terms of access to the same resources and the low overhead of entire process communication. 

- Using Ambassador Sidecar pattern, we don't just extend the functionality of the core service instance, but offload all the complexities of the network communication and security to the ambassador instance. 