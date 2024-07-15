# NestJS Fundamentals

Nodejs makes no assumptions and includes most nothing by default, for it's purposely meant to be very bare bones. Nodejs by design has a minimalistic setup and developers are in charge of setting up **everything** they want to use for their application! This applies to everything from how you handle routing, API calls, setting up websockets, to even redumentary things like code organization, file structure and naming.

As Nodejs has been around for many years and there are plenty of frameworks that have helped make some of these common requirements simpler most notably Express.js, but they are all still require **a lot** of configuration and effort on the part of the developer.

This ultimate flexibility can be a bit of a double edged sword. Creating potential problems as applications or teams grow very large. 

NestJS tries to tackle some of these problems by creating an abstraction or overall framework *around* NodeJS. Letting you focus on the application problem at hand instead of the tiny implemantatiton details such as seting up typescript, error handling, middleware setup and so much more. NestJS provides an out of box application architecture that allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications, but how is this achieved?

Think of NestJS is a layer *above* NodeJS itself, abstracting away difficult tasks, tools, and boilerplate code, while also adding a full fledged toolkit for you application development. Using NestJS does not lock you into yet another framework but instead leverages readily available and prominent options and modules in the community like those available Express applications.

The flexibility that Nest provides here gives us the ability to create modules that are platform agnostic not only HTTP frameworks such as Expressjs or Fastify but even agnostic across different types of applications. With NestJS you can build Rest API, MVC Applications, Microservices, GraphQL applications, web-sockets, and even CLI's and cron jobs.

With the help of NestJS dependency injection system. We have the ability to swap out the underlying mechanism effertlessly. 

----

```sh
nest g co - nest generate controller // --no-spec for no test file
nest g s - nest generate service
nest g module coffees
```

In NestJS each service is a provider. Main idea of a provider is inject dependencies. This means that objects can create various relationship to each other.

Providers are just a class and have a decorator called `@Injectable`. 

```sh
nest g class coffees/dto/create-coffee.dto --no-spec
npm i class-validator class-transformer # to validate dtos
npm i @nestjs/mapped-types # create object to optional partial
```
