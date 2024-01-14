## What is Go?

It is an open-source programming language developed and published by Google.
- Focus on **simplicity**, **clarity** & **scalability**.
  - Inspired by langugages like Python
  - Aims to provide a clean, understandable syntax
- High performance & Focus on **Concurrency**
  - Similar to C or C++
  - Popular for tasks that benefit from multi-threading
- Batteries included
  - Go comes with a standard library
  - Many core features are built-in
- Static typing
  - Go is a type-safe language
  - Allows you to catch many errors early

> Popular are **Networking & APIs** & **Microservices** & **CLI (Command Line Interface) Tools**

```sh
go run app.go
```

We need to install Go because Go is a compiled language, which means the code must be translated to machine code before it is executed. And for that, we need to install that compiler.

## Go Essentials
> Values, Basic Types & Core Language Features
- Understanding the **Key Components** of a Go Program
- Working with **Values & Types**
- Creating & Executing **Functions**
- Controlling Execution with **Control Structure**

### Package

Every Go code needs such a package. If you remove package you will see an error. It expected a package. Why does it matter?

When writing go code you split your code across packages. You must have at least one package per application, but you can have multiple packages aswell.

We need these because one we work with multiple packages, we can use features from package B in package A for example. So we can export and import features across our files, so that the individual files stay rather lean.

In hello-world program, we are using `fmt` package. That's not a package written by us, instead, this `fmt` package is part of Go's standard library. Go comes with a <a href='https://pkg.go.dev/std'>huge standard library</a> of built-in packages. So packages that are installed together with Go, you could say, that are part of the Go Compiler.

#### Why is the package name is `main`?

Indeed you can use any name you want, many go projects espcially bigger projects typically use multiple packages. These pacakges need different names.

**main** is a special package name, that tells Go that this package will be the main entry point. You'll not always run your code as we did it before like `go run app.go`.

When you build it for production and make it available for other people, those people might not even have Go installed on their system. So, they can't use this command. Instead, you typically run;

```sh
go build
```

This will then tell Go to in the end create an executable file that could also be executed on systems that don't have Go installed here.

Go does not just know packages, but also modules. The idea simply is that one module consists of multiple packages. So in many cases **a module is simply a go project**.

So, in order to tell Go that, this should be considered a module, we have to run a specific command;

```sh
go mod init
```

However, when you are wrote that, you will get an error that it can't determine the module path. You should name it with where you plan to host your module later, if you plan to expose it as a third party library to the world. 

```sh
go mod init example.com/first-app
go build
```

If you run Go build on Windows, you will get a first-app.exe an executable file. You can simply run that file by double clicking on it. On Mac OS or Linux you will get an executable like this without a file extension and you can run it inside a terminal by typing `./first-app`. Now we got this executable which **can be executed without having Go installed**. 

That's why we need a module and main package, because if I would change package name main to app and run `go build`, I get no file as an output, because Go doesn't find a main entry point for our application.

#### `main` function

We also have func which is named main, and this also must be named **main**. This is a so-called function, a block of code that can be executed by calling that function, Go will call and execute that function, therefore the code in that function when program starts. 

If you have another main package with another file. You can't have another main function, because with it, program confuse where to start.

#### Null Values

![Alt text](./assets/variables.png)

![Alt text](./assets/null-values.png)

> With backticks can building multiline strings.

#### Functions

We can see the built-in functions in official standard library documentation, there is a <a href="https://cs.opensource.google/go/go">repository link</a>. All the code behind go and the standard library is publicly available. You can dive into the src folder to find subfolders for all these standard library packages like the fmt package here.

#### Error Handling

App doesn't crash because read file when it doesn't find a file does indeed generate an error as you'll see in a second, but it does not crash your application. 

Instead in Go, error handling typically works a bit differently than it does in other languages. In other languages you might be used to certain actions or problems crashing your code. In other languages you can ofter use try catch statement to wrap code that could potantially fail to catch errors and define code that should run if an error occurs. That is not how it works in Go though.

Instead in Go, functions are written such and your functions should be written such that errors don't crash the applcation. Instead, read file fore example, will simply return an empty byte collection if it failts to find that file, which is  then converted to an empty string, which is converted to the value zero when parsing it as a float. That is why we see the 0 as a result if we check the balance.

That's not all Go does. Instead, for operations that could fail, it is quite common that funtions return such an error thing as a second value. That's the value we can accept and store as a second value here when calling that function.