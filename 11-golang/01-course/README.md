# Go Language

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

### Null Values

![Alt text](./assets/variables.png)

![Alt text](./assets/null-values.png)

> With backticks can building multiline strings.

### Functions

We can see the built-in functions in official standard library documentation, there is a <a href="https://cs.opensource.google/go/go">repository link</a>. All the code behind go and the standard library is publicly available. You can dive into the src folder to find subfolders for all these standard library packages like the fmt package here.

### Error Handling

App doesn't crash because read file when it doesn't find a file does indeed generate an error as you'll see in a second, but it does not crash your application. 

Instead in Go, error handling typically works a bit differently than it does in other languages. In other languages you might be used to certain actions or problems crashing your code. In other languages you can ofter use try catch statement to wrap code that could potantially fail to catch errors and define code that should run if an error occurs. That is not how it works in Go though.

Instead in Go, functions are written such and your functions should be written such that errors don't crash the applcation. Instead, read file fore example, will simply return an empty byte collection if it failts to find that file, which is  then converted to an empty string, which is converted to the value zero when parsing it as a float. That is why we see the 0 as a result if we check the balance.

That's not all Go does. Instead, for operations that could fail, it is quite common that funtions return such an error thing as a second value. That's the value we can accept and store as a second value here when calling that function.

## Working With Packages

- Splitting Code Across **Multiple Files**
- Splitting Files Across **Multiple Packages**
- **Importing & Using** Custom Packages

In demo bank application, in such cases it's not uncommon that we might wanna split that code across multiple files to keep every file on its own a bit more readable and understandable so that we don't have too much code in a single file since that can make working with that file unnecessarily complex, because we have to search for the code we wanna work on and so on. Thankfully, splitting code into files in Go is pretty straightforward.

### Why Would Use More Than One Package?

Splitting code across files is pretty easy. More complex project, you might wanna split your code not just into multiple files that belong to the same main package, but actually into multiple packages. That can be especially useful. 

![Alt text](./assets/multi-package.png)

For example, put utility code into a package that could then be used in different projects.

![Alt text](./assets/multi-package-v2.png)

For example, code for interacting with the file system. It can also be a useful pattern if you have code that works pretty much standalone, but should also be used in the context of a bigger project. You could put such code into a seperate package to have a clearer seperation of that code and still use it in one in the same project if you want to.

### Splitting Code Across Multiple Packages

We made generic functions. Now we are splitting them into a new file which named `fileops.go`. Then we need to change our `package main` to `package fileops`. But if I try to do that, it breaks, I get an error here.

> Found packages main and fileops in the same folder basically. That's not allowed in Go. Instead, every package must go into its own sub folder.

So If I wanna have a seperate new package here, I also have to add a new folder, and that folder should have the same name as the package, so fileops in this case. Filename is can be any name.

#### Importing Packages

To get access to the functions we define in our own packages, or to the things we define there in general, for example all the global constants or variables, to get access to these things, we'll have to import our own package, just as we already imported packages from the standard library.

To import your own package, it's not enough to just add the package name `fileops`. Instead, you have to add the full path, which icludes your module path. `example.com/bank/fileops`

#### Exporting & Importing Identifiers

When we import our `example.com/bank/fileops` and then with using;

```go
fileops.getFloatFromFile()
```

can't be found on our own fileops package, even though import it there. It is not found because in go, only functions or variables or constants that's start with an uppercase character, so with an uppercase G for example, only such functions or variables and so on are available in other packages.

That's also explain why we always used functions with uppercase:

```go
fmt.Print("Hi there!")
fmt.Scan(&choice)
```

That's the Go way of exporting something, and you can only import and use something from another package into some package if it's exported there. It is exported in another package if it starts with an uppercase character.

### Using Third-Party Packages

We only worked with packages that were either part of the standard library or that we built on our own. Go's standard library really comes with loads of useful features and functionalities built-in. It's definetely possible that the standard library is all you need, but sometimes you need a certain functionality in your application that's not part of the standard library and that you maybe also don't wanna build on your own, in such cases, you can install third party libraries. 

Go indeed has a very active community and ecosystem and just as you can build your own packages, there also are people building <a href="https://pkg.go.dev/">packages</a> which they share with the world.

```sh
go get github.com/Pallinder/go-randomdata
```

To get randomdata package, run the above command. It will add it to your project. You will not see source files in here, but you will see that the Go mod file was edited. In there you will find this extra line,

![Alt text](./assets/third-party.png)

This `go.mod` file does not just serve as a description of your module, for example, containing it's path, but instead it is also used to list all the third party dependencies of your project, so that if you would share your project with someone else, they could quickly get and download all those dependencies simply by running to;

```sh
go get # like npm install
```

## Understanding Pointers

Pointers are in the variables that store value **addresses** instead of values. That might sound confusing. So let's take a look at how your code affects your computer's memory. Let's say you have some code where you create and initialize a variable called age, which you set to a value of 32. In that case, that value 32 is stored in the computer's memory. That value in memory automatically gets an address. Every space in your computer's memory has an address. That address is required by the computer, to be able to retrieve that value and work with it. In this case here, this value which in our code, is stored in the variable age is actually also stored in the computer's memory. Every value you use in Go is at least for a short period of time, **stored somewhere in your computer's memory**. 

![Alt text](./assets/pointer-of-age.png)

A pointer, then is a variable, where you don't store a value, but where you instead use this special ampersand operator, a single ampersand symbol to get and store the address of a value, instead of the value itself. So now age pointer would contain the address as a value.

### Why Would Use This Feature?

There are probably two main advantages of using pointers in Go, at least in certain situations.
1. When working with pointers, you can **avoid unnecessary value copies**.
2. You can use pointers to **directly mutate values**.

#### Avoid Unnecessary Values Copies

By default, in Go programs when you pass a variable to a function, so that function can work with that value, Go creates a **copy of the value of that variable in memory** and **passes that copy to that function**. So at least for a certain period of time, until the function *execution is **done*** and the copied value will **eventually be cleaned up by Go's Garbage Collector**. A process that runs in the background automatically and *gets rid of unused values*.

![Alt text](./assets/passing-values-to-functions.png)

Until that happens, you have the same value twice in memory. 

For very large and complex values, that could be a problem in certain applications because since you have the same value twice, you are of course taking up twice as much space. For numbers, most strings and all the most more complex values, that won't really matter too much in most applications. You will need a very specific application or use case, where this optimization of using a pointer to avoid this copy might actually make a difference. 

![Alt text](./assets/passing-pointer-to-function.png)

Still, it is an advantage to be aware of, because that can be one reason for a using pointers. **When passing a pointer** as an argument to a function, **there's no copy being created**. Instead, that function receives the address, and can use that address to look up the value that's stored under the address. Again, by using a special syntax, to then work with that value that is stored there.

#### Directly Mutate Values

Another advantage of using pointers, can be that you can write functions to which you pass a pointer. So an address instead of a value to that function. That function can then, since it has the address to the original value, directly edit that value.

So it doesn't have to calculate a new value based on the input value, and then return that value so that returned value can be used in the place where the function was called. Instead, it can directly manipulate the value if it received such a pointer.

That can of course lead to less code, since it allows you to avoid the return statement and so on. To be clear, it can also **lead to less understandable code**, and unexpected behaviors. It might come as a suprise that a function called add for example;

```go
package main

import "fmt"

func main() {
  x := 5
  y := 10
  add (&x, y)

  fmt.Println("x: ", x) // x: 15
  fmt.Println("y: ", y) // y: 10
}
```

Doesn't give you the sum of two numbers, but instead edits the first number by adding the second to it. That can be unexpected. You might instead, expect a function that returns a result, and leaves the original numbers unchanged. So it comes down to your specific use case, your personal preferences, and of course also the naming of your function, so that you don't suprise yourself, or other developers with unexpected behaviours. 

That's what pointers are, and why you might want to use them. 

----

### Working With Pointers In Code

> If you are working with pointer, it's **null value is nil**. Not like float64 -> 0.0, int -> 0. All pointer's null value is **nil**.

#### **Working with Regular Variables**
```go
package main

import "fmt"

func main() {
	age := 32 // regular variable
	fmt.Println("Age:", age)
	adultYears := getAdultYears(age)
	fmt.Println(adultYears)
}

func getAdultYears(age int) int {
	return age - 18
}
```

#### **Working with Pointers**
```go
package main

import "fmt"

func main() {
	age := 32 // regular variable

	var agePointer *int
	agePointer = &age

	fmt.Println("Age:", *agePointer) // dereferencing - value at this address with *

	adultYears := getAdultYears(agePointer)
	fmt.Println(adultYears)
}

func getAdultYears(age *int) int {
	return *age - 18
}
```

If we are giving a pointer as a parameter of a function, we should change the type of parameter; because we don't want int, but instead a pointer to an int, which means we have to add an **asterisk (*)** here.

In Go, unlike in some other programming languages, you can't perform pointer arithmetic, you can't perform calculations on pointers. In some langugaes you can, and you can run into really nasty problems there, but it can also be a powerful feature. In Go you can't. 

You can't deduct values from a pointer, so from an address or anything like that. Instead here, if you wanna perform this operation we are performing here, we have to dereference the pointer, we have to add this asterisk. 

```go
func getAdultYears(age *int) int {
	return *age - 18
}
```

So with that we're getting the address from parameter, then we are looking up the value that's stored under that address, and we are deducting 18 from that. Then just as before, we return that new value. 

So therefore we can still create adultYears and call getAdultYears, but now here we should not pass age as a value to getAdultYears, but instead a pointer to age we can use agePointer as a parameter. 

Important difference is that now there is no copy of 32 being created. Then we don't copy the value or anything like that, and than pass that pointer to that function where we want a pointer, and therefore again **nothing is copied**. It is still the one single 32 value. 

#### **Using Pointers For Data Mutation**
```go
package main

import "fmt"

func main() {
	age := 32 // regular variable

	var agePointer *int
	agePointer = &age

	fmt.Println("Age:", *agePointer) // dereferencing - value at this address with *

	getAdultYears(agePointer)
	fmt.Println(*agePointer)
}

func getAdultYears(age *int) {
  *age = *age - 18
}
```

```go
func getAdultYears(age *int) {
	// return *age - 18
  // age = *age - 18 - not like this, age is the pointer, not the value
  *age = *age - 18
}
```
With usage of `*age = *age - 18`, we are overriding that 32 value with that new value. Just by using that pointer, which we receive. Therefore, getAdultYears will no longer return anything. We should therefore remove that return type annotation.

Therefore, when we calling that function no longer need to store adultYears, because we no longer get a value. At the Println, we should **dereference** instead output age.

```go
fmt.Println(age)
```

If I am outputting age, not my agePointer, not the dereferenced agePointer, but the original age variable. Keep in mind that getAdultYears did edit that place in memory. It overwrote the numbers stored under that address and therefore it overwrote this 32 and that variable just also used that place in memory.

So if we change that place in memory, that variable holds that new value that's stored there under that address in memory. That's why we're outputting 14 with this lnie of code here, because we added the original value.

That can be an advantage, because we don't have to return something here now. Of course it can also be a problem, because it might be unexpected that we override the original value. We might not want that, especially if we have a name like this, getAdultYears. That does not sound like it edits something. We instead might wanna to call this **editAgeToAdultYears** to make it clearer what this function will do.

---

So we can use pointers to directly edit a value from inside a function. Look at fmt.Scan function, which used to get user input. Which is why used with ampersand symbol.

```go
fmt.Scan(&choice)
```

We are creating a pointer here, which points at this choice integer, and we pass this pointer to scan, because scan then internally **de-references** this pointer and overwrites te value that's stored under that adress with the value entered by the user.

## Structs

Struct is in <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/04-structs">that file</a>, directly go `user/user.go` file and you can see their's creation, and method implementations. In `structs.go` file, you can see their usages.

## Interfaces

In Go and in most programming languages that have this feature is essentially a contract, you could say. A contract that guarantees that a certain value, typically a Struct, has a certain method.

```go
type saver interface {
	Save() error
}
```

> The requirement is a save method without arguments and an error return type

For example, here in this interface, I could say that I wanna guarantee that whichever struct implements this interface, so whichever struct signs this contract, have a save method with an uppercase S. **Save method which returns an error**, because things can go wrong. 

Method or function **doesn't have a function body**. Interfaces are not about defining the logic of a method. Instead they simply define that a certain method exists that it's there and what it's name is and what it's return values are. In addition, an interface can also define that a method accepts certain types of values as input, as parameters. You don't need to give these inputs here names, though you can, because **it's really only the types that matter here**.

If you have an interface that requires only on method, then your interface name is that method name plus `-er` at the end. It's not a must do, but it is a common convention.

### Using Interfaces

```go
func saveData(data saver) error {
	err := data.Save()

	if err != nil {
		fmt.Println("saving the note failed")
		return err
	}

	fmt.Println("saving the note succeeded!")
	return nil
}
```

> That's exactly what we have here.

```go
func (todo Todo) Save() error { // Todo's method
	fileName := "todo.json"
	json, err := json.Marshal(todo)

	if err != nil {
		return err
	}

	os.WriteFile(fileName, json, 0644)
	return nil
}
```

Unlike in other programming langauges, in Go, you don't have to explicitly connect this interface **to some other type to force that type** to adhere to that interface. Instead, Go simply takes a look at the value you are passing to saveData here, which wants such an interface type and it takes a look at that value and simply checks if that value, that todo struct in this case, **has such a save method** *that fulfills the requirements of the saver interface*.

```go
func (note Note) Save() error {
	fileName := strings.ReplaceAll(note.Title, " ", "_")
	fileName = strings.ToLower(fileName) + ".json"

	json, err := json.Marshal(note)

	if err != nil {
		return err
	}

	os.WriteFile(fileName, json, 0644)
	return nil
}
```

We have another save method with that Note struct. So, for Todo and Note structs have the save method and therefore, correctly implement this interface. That's why we can pass those values without any issues to saveData. That's why interfaces can be really useful because **they can help us write more generic, more flexible and more reusable code**. 

We can now use one saveData function to save the data for two different types of values. 

### Extracting Type Information From Values

#### With Swich Statements

```go
func printSomething(value interface{}) { // interface{} || any
	switch value.(type) {
	case int:
		fmt.Println("Integer:", value)
	case float64:
		fmt.Println("Float:", value)
	case string:
		fmt.Println(value)
	}
}
```

#### With Directly

```go
func printSomething(value interface{}) { // interface{} || any
	typedVal, ok := value.(int)

	if ok {
		typedVal += 1
		fmt.Println("Integer:", typedVal)
	}

	floatVal, ok := value.(float64)

	if ok {
		floatVal += 1
		fmt.Println("Integer:", floatVal)
	}
}
```

### Interfaces, Dynamic Types & Limitations

Interfaces can be very useful in Go and especially this special interface type that stands for any value can be very useful in certain situations since it allows you to write quite flexible code. But it also has some limitations and here's an example.

Let's say you want to create an add function, which should take two input values and return the sum of both. These two values should not be of a fixed type like int or float64. Instead they should be either an int or a float64 or also a string. So that we either combine two strings or we add two ints or we add two floats. 

Now ofcouse you could now use this special interface type `interface{}` or `any` keyword. So that Go accepts any kind of value here as an input. But you can't add structs.

```go
func add(a, b interface{}) interface{} {
	aInt, aIsInt := a.(int)
	bInt, bIsInt := b.(int)

	if (aIsInt && bIsInt) {
		return aInt + bInt
	}

	aFloat, aIsFloat := a.(float64)
	bFloat, bIsFloat := b.(float64)

	if (aIsFloat && bIsFloat) {
		return aFloat + bFloat
	}
}
```

So `interface{}` is a bit **too flexible**. You could make it work by using this special syntax here to check whether a is of type in add if it is, `aIsInt` will hold true and we'll get a value which we can store in a variable where Go now knows that it will be of type int. Now Go would know that both are of type int. Then we can't know what returns, because we want to see their addition with floats.

That's why Go offers another feature. It offers a concept called generics. This generic concept will help you solve problems like this.

#### **Generics**

Accepting any kind of value is a bit too wide, in addition another problem we have here is that the **return type also is too unspecific**. Therefore, if I call add and I pass two integers to it, Go doesn't understand that result will be an integer. Instead it thinks it's any kind of value.

```go
result := add(1, 2)
result += 1 // complains
```

Therefore after working with that result will be rather difficult. If I add one to it, Go complains that the types are not the same. So of course, it would be great if Go would understand that the return value of add will be an integer if the two values we pass to add are an integer and that's also a kind of problem that will be solved by turning this add function into a **generic add function**.

```go
func add[T interface{}](a, b T) T {
	aInt, aIsInt := a.(int)
	bInt, bIsInt := b.(int)

	if (aIsInt && bIsInt) {
		return aInt + bInt
	}

	aFloat, aIsFloat := a.(float64)
	bFloat, bIsFloat := b.(float64)

	if (aIsFloat && bIsFloat) {
		return aFloat + bFloat
	}
}
```

Which we do in Go by adding square brackets after the function name before the parameter list. In this square brackets you can define a **type placeholder name**. Typically that's T, but you can use any name of your choice. 

The idea is that it's now this placeholder that is used here instead of this interface type. You can also use this placeholder as a return type.

Then, we must tell Go which concrete types are allowed as types for that placeholder when add is being called.

With `T interface{}` simply means T can be any kind of value. As you see when doing that here, I'm getting a bunch of errors, but I will deal with them later. What's more important than that is that by making this simple change, if you now hover over result, **go understands that** it will be of type int. It understands this because what we are doing with this generic type placeholder is that we are telling Go that the concrete type of values **we are receiving from them and our returning will only be set and known at the point of time where add is called**.

```go
result := add(1, 2) // go knows result is int.
```

That's why this generics feature exists and why it can sometimes in certain situations be really useful because it allows you to write more reusable, more generic functions where Go nonetheless is able to correctly infer the types of values you are working with.

Therefore this code here now doesn't work anymore, because it isn't anymore.

> When writing this in a generic way, we can simply return `a + b`. We don't need any other checks.

```go
func add[T any](a, b T) T {
	return a + b // invalid operation: operator + not defied
}
```

However we'll still have one problem if we do it like this. Since we are saying that the concrete type that's used at the point of time where add is being called can be any type, we are of course back to this error that plus operator not defined.

We can work around that by setting the base type or the range of allowed types for T not to any, but instead to a list of pre-defined types with which we're fine. By simply listing all those types, seperated with such a pipe (`|`) symbol. 

```go
func add[T int | float64 | string](a, b T) T {
	return a + b
}
```

With that I am saying that T can be any type as long as it's an int, float or a string. Therefore now, this all works.

## Managing Related Data with Arrays, Slices & Maps

Arrays, Slices and Maps can also help you group related data together.

### Arrays - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/06-arrays">Examples</a>

An array is a data structure that holds values, potentially different values that kind of describe the same thing. Creating such an array;

```go
var prices [4]float64
prices := [4]float64{10.99, 9.99, 45.99, 20.0}
fmt.Println(prices) // [10.99 9.99 45.99 20]
fmt.Println(prices[2]) // output - 45.99

var productNames [4]string
productNames = [4]string{"A Book"}
productNames[2] = "A Carpet" // output - [A Book  A Carpet ]
fmt.Println(productNames)
```

### Selecting Parts of Arrays with Slices

Sometimes, you need some part of the array.

```go
featuredPrices := prices[1:3] // from 1 to 3, 3 is not included
featuredPrices := prices[:3] // from the beginning, until index 3
featuredPrices := prices[1:] // from the first index, until last index + 1
```

Slices can be used on arrays, but slices actually also can be created based on other slices.

```go
highlightedPrices := featuredPrices[:1]
fmt.Println(highlightedPrices) // output - [9.99]
```

### Diving Deeper Into Slices

Time to a brief look behind the scenes to fully understand the connection between slices and arrays. Slices are like a **reference**, like a window into an array, a bit like a **pointer**, though it's a different concept. 

When we create an array like prices, that array is stored in **memory**. When we then treat a slice based on that array, we get a window into that array, so to say. Therefore, if you would modify an element in a slice, we would also modify the same element in the original array.  

```go
featuredPrices[0] = 199.99
fmt.Println(prices) // output - [10.99 199.99 45.99 20]
```

So for example here, if I use my featuredPricess slice, is this part of the original array, so the original array which I did not directly added here, we will have been overwritten by 199.99. Because slice is just a window into the original array.

When you create a slice, you **don't copy the original array**, so you don't have that copy in memory that occupies extra memory space. Instead, you still only have one array in memory and your slice is just a tiny reference to a part of that array. 

Hence it is a very memory efficient way of selecting parts of arrays and if you want to do that of editing parts of an array. 

Go also **saves some metadata for our slices** that can be useful to look into. For every slice, we got a length and a capacity and we can output both here to understand what it is.

```go
fmt.Println(len(featuredPrices), cap(featuredPrices)) // output - 3 3
```

> The length gives us the number of items in a slice or array. So if that slice featuredPrices has free elements, which it does, length will give us free as a value. 

```go
fmt.Println(len(highlightedPrices), cap(highlightedPrices)) // output - 1 3
```

> The capacity is a bit more complex. It's the same value here, but that would be different if we would output highlightedPrices.

highlightedPrices is based on featuredPrices which in turn, is based on the prices array. So they **share the same array** under the hood, but highlightedPrices selects everything from the start of featuredPrices up to do second element excluding that element. That is why we have 1 length.

But we **have a higher capacity**, because the slice and they offer the original array on which highlightedPrices is based, actually it has more items left. In featuredPrices where we selected everything from the second item until the end of the original array, we still have this (`9,99 45.99 20.0`) entire subset left. 

So if in highlightedPrices, we then select just the first item, we could theoretically still select the other two items and that's why we overall have a capacity of three. 

**Why not a capacity of four since the original array has a length of four?**

- Well because that's important to understand about slices. You can **always select more towards the end of an array, but not towards the start, so towards the left**. Sine the first slice on which we are based starts at the second element and not at the first element, any other slices based on it can't go further to the left. So we can't go back to that first element which we omit here. That's why the **capacity only counts towards the end of the original array**, but omits any elements that might have been filtered out before.

In the end, it's just important to understand that you can always select more items to the right, but never to the left.

```go
highlightedPrices = highlightedPrices[:3]
fmt.Println(len(featuredPrices), cap(featuredPrices))
fmt.Println(len(highlightedPrices), cap(highlightedPrices))
```

highlightedPrices before in this code block was just one value because we sliced it to be only up to the second value. You can always select more towards the end of an array or slice. 

```go
highlightedPrices := featuredPrices[1:2] 
// That would be causes an error, if wroted above, because it's capacity would be 2 after that.
```

Even though highlightedPrices originally only had one element, we can reslice based on that element slice and now suddenly select more than that one element because internally, Go always **memorized that there is more content available to the right of the selected slice**. That's what this capacity here kind of told us where we had a difference between capacity and length.

### Dynamic Lists With Slices

Also with slices you can create dynamic arrays, let's come back to that original prices array.

```go
prices := [4]float64{10.99, 9.99, 45.99, 20.0}
```

One downside of using that array was that we had to define ahead of time how many values we'll have in there. Sometimes in the applications you're going to write, you know exactly how many values you'll have in a list of values.  

So having to set the length of an array in advance in your code can be a restriction that's quite annoying. In other programming languages like JavaScript, you don't have that restriction. There you can create an array and it's automatically dynamic, so you can always add and remove elements just as you want to. Go thankfully also has solution for us and that solution again is that **slices feature**.

Let's create a dynamic array, you can create suct a dynamic slice with a syntax that's similar to what we saw before, but you may now also omit the length here. 

```go
// both is possible
// prices := []float64{}
prices := []float64{10.99, 8.99} 

fmt.Println(prices[1]) // output - 8.99
fmt.Println(prices[0:1]) // output - 10.99 8.99

```

If you don't specify the number of items, Go will automatically **create a slice for you** and since a slice always is based on an array, it will also create an array for you behind the scenes, but it will **automatically ditch that array and create a new array if your slice grows beyond the balance** of that behind the scenes stored array.

There now is a built-in function in Go the **append function**, wants a slice as a first parameter, and then a list of elements that should be added to that slice. Then as a second parameter our add value, for example, `5.99`.

That will now append a new item, but it will actually also return a **brand new slice**. So it actually does not add it the *original slice, but instead what append does is it tells* Go that we want to add an item to that slice, and therefore also to the underlying array. Now of course, an array has a fixed length, so what Go will do in this case is it will create a **brand new array and add that element to that brand new array which is created such that it has the capacity for that new array**.

```go
updatedPrices := append(prices, 5.99)
fmt.Println(updatedPrices) // output - [10.99 8.99 5.99]
```

If I would print prices, you see that (`[10.99 8.99]`) the original slice did not change. This is still just these two values. The **original slice in array was not changed** by Go. If you wanted to do that you would have to instead **reassign this appended slice to the existing prices slice**, instead of creating a new variable.

```go
prices := append(prices, 5.99)
fmt.Println(prices) // output - [10.99 8.99 5.99]
```

> Technically, you are of course re-assigning the new slice to the existing variable - therefore the old value of that variable will be overwritten.

Then of course, if you do this and you output this prices slice, then you'll see that it changed. If you **reassign an appended slice to an existing slice**, it will of course also **ditch that original array** which only had two elements before, and **use that brand new array that holds that extra third element** for that slice instead. 

So **memory management** is taken care of by Go here and since we now have that extra flexibility where we can always add new elements if we need to, it's way more common to work with slices right from the start in Go than it is to use arrays.

You can still use fixed length arrays if you know for sure that you will never have more than X amounts of elements in a list, but if there is at least a slight chance that you might want to add new elements as your program executes, you should definitely go for this slices approach right from the start instead, because that allows you to add elements to slices, and let your arrays grow just as they need to.

If we wanna **remove the first element**, we simply create a new slice based on the existing slice that starts at the second element, and selects everything up to the end. That gives us a brand new slice that omits that first element.

```go
prices = prices[1:]
fmt.Println(prices) // output - [8.99 5.99]
```

So with that, we of course did remove that first element, which was `10.99`.

There is no built-in function for doing that, since we already have the **built-in mechanism with that feature that allows us to build slices**.

#### **Unpacking List Values**

Before dive into maps, there is a special syntax, when you work with arrays and slices. Specifically, when you work with append.

```go
prices := []float64{10.99, 8.99}
prices = append(prices, 5.99, 12.99)
```

Append actually does not just take on value that is appended, instead you can append as many values as you want. So here we could also add a couple of other values here.

<hr><br>

Sometimes you have an existing slice and you wanna append another slice or array to it. Let's say here we have our discount prices, that's a brand new list which I create here.

```go
discountPrices := []float64{140.99, 87.99, 20.59}
```

We might wanna merge discountPrices into prices slice. You can use the append function to perform such merges as well. Now, for that we can reassign prices and call append again, but it will give an error.

```go
prices = append(prices, discountPrices) // gives an error
```

So a list of floats, in a place where a single float is allowed, because prices is a list of floats, not a list of lists of floats. discountPrices is a list of floats. So adding the full list as one item into that existing list is not valid. Instead, we have to kind of pull out the existing items. There is a special operator in Go, which you can use for that. You can add three dots after discountPrices, exactly three dots to instruct Go to go to this list and take out all the elements in that list. So the three prices at the discountPrices and add them as seperated, comma seperated, elements to this append function.

```go
prices = append(prices, discountPrices...) // appends
```

### Maps - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/08-maps/maps.go">Examples</a>

A map is a different kind of data structure, which you can also use to group data together. It's a bit like a struct, but different. Let's say we wanna store a bunch of website URLs here. So we have different companies and those companies have websites. For this we could add a website variable. We can create a slice of websites. This works, but saving those URLs like this could have a couple of disadvantages. We can just see URLs, neither their company names. So having an **extra label** here could make a lot of sense.  

In addition, let's say you wanna find *google*'s URL, you always need to memorize that *google* is the first URL here, so that you can retrieve it by index. Possible but if you have a long list of URLs, this can get very cumbersome if you need to start counting those different URLs to find the right index. That's a problem a map can solve for us. We can create a map by using the special map keyword in Go. Map, like a struct, is a storage where you have values of a certain type and then keys that identify those values, so labels for those values. You have **key vale pairs**; that's a map, just like a struct.

```go
websites := map[string]string{
	"Google": "https://google.com",
	"Amazon Web Services": "https://aws.com",
}

fmt.Println(websites["Amazon Web Services"]) // https://aws.com
```

#### Mutating Maps

When you work with maps, you are also not stuck to the initial map. You can always add new key value pairs. So unlike with arrays, there is no difference between arrays and slices. A map is a map and it's always dynamic. You can always add new key-value pairs. If you wanna add a new website, you just access websites and then you access a key that doesn't exist yet or overwrite a value by targeting an existing key.

```go
websites["LinkedIn"] = "https://linkedin.com"
```

Sometimes you also wanna get rid of keys, and you can do that with the built-in delete function.

```go
delete(websites, "Google")
fmt.Println(websites) // map[Amazon Web Services:https://aws.com LinkedIn:https://linkedin.com]
```

#### **Maps vs Structs**

Why we are using maps, we are already have structs, which are already key value data storages. There are two main very important differences. 
1. The first important difference is that for maps, **you can use anything as a key**. Here we are using strings, but you could also create a map that uses integer or event some array or a struct as a key. So **any value can be used as a key**. That gives you more flexibility since you are not stuck to just using human readable text as keys, even though that is probably what you'll do very often, but you have more flexibility there.
2. Another key difference is simply that maps *solve a different problem*. With structs, you have predefined data structures. 
	```go
	type Product struct {
		id string
		title string
		price float64
	}
	```
	Once we define that struct, when we work with in our code, we can't just add a new key value pair. Instead this is a set in stone, so to say. We also can't delete a key value pair from it. So these things which we can do with maps are not possible for structs, and that's not a disadvantage. Instead a struct solves a different problem. 

You don't yuse structs to manage multiple values of the same kind with different keys, but instead you use structs to describe data entities in your programs. Something like a product or a user or a company or anything like that.

Map on the other hand is used if you have a collection of values, which probably describe the same thing though technically, but then you can assign your own labels, your own keys and use any kinds of values for those keys that makes sense to you.

In a nutshell, you can basically think of **maps as arrays where you don't use indexes**, but instead **any labels of your choice**.

### Using the Special `make` Function

There are two remaining important Go features you should know when working with arrays, slices or maps.

Think of a userNames slice;

```go
userNames := []string{}
userNames = append(userNames, "Eren")
userNames = append(userNames, "Gökşen")
```

Now of course, we can create that slice like this. We can append a username. We know it, Go will essentially also **create an empty array**. Then once you start adding items, it will **start creating new arrays to fit the new content into those arrays**, and therefore, essentially into your slice. A slice is just a window into an array. Go takes care about managing those arrays.

That's of course great, but if you have a scenario where you know that you're going to add a couple of items to a slice that's initially empty, or **at least not as big as it eventually will be**, then you can **also pre allocate some space** for these to be added elements. 

That only makes sense if you know roughly how many elements you are going to add. In here, where I am adding two elements, we could make Go aware of the fact that we will add those two elements eventually. When we do **Go is able to create a bigger array right from the start**, and it then **doesn't have to recreate those arrays all the time**, which is **a bit more efficient**. 

You can tell Go that you need a bigger array behind the scenes by using the make function. You can call the built-in make function to create such a slice. This function then needs a couple of arguments, and the first argument is the type of slice it should create. Therefore, you define **just the type not with curly braces**. Then you must **at least pass one extra argument** to make. First extra argument you can pass to make when using it for creating a slice **would define the length of that slice, the initial length** of that slice.

```go
userNames := make([]string, 2)
```

With that, Go will go ahead and behind the scenes, create an array with length two, **where both elements initially will be null**, empty slots so to say, but where you can now assign elements to those slots.

```go
userNames = append(userNames, "Eren")
userNames = append(userNames, "Gökşen")
fmt.Println(userNames) // output - [  Eren Gökşen]
```

The result of this code might be different that what you may expect though. As you can see output, the empty slots are actually in front of Eren and Gökşen. So the two userNames I assigned here do not occupy these slots. On the other hand, should make sense.

`make` like this, creates an array of length two. These two elements then are empty here. Then we append new elements, **we don't add those for those existing slots**, instead, **we append them to the end**.

Instead you could now, when you using make like this, assign values for these two slots that have been created like this:

```go
userNames[0] = "Julie"
fmt.Println(userNames) // output - [Julie  Eren Gökşen]
```

<hr><br>

If we create the array without make:

```go
userNames := []string{}
userNames[0] = "Julie"
```

would get an error with that code, because this creates an empty array behind the scenes. **When you then try to target the first element there, you'll get an error**.

That's the difference of make. You can create an array behind the scenes that already got some slots, which can be helpful if you wanna **assign values to specific indexes**. 

Originally, about a greater efficiency if you let Go know about the intended size of the array you'll eventually need, that's not yet what we are doing here. Instead you can pass **another argument to make**, when using it to make a string, that would be the **capacity of the array that should be created behind the scenes**, for example, five.

```go
userNames := make([]string, 2, 5)
```

Keep in mind, the capacity is essentially the **maximum number of array items**, therefore **controls how much memory space will be allocated behind the scenes** by Go for this array. So the make function call will make sure that Go ***allocates enough memory space* for a string array** that takes five items, and it will create an array **with two empty slots**.

Not with that pre allocated memory, appending items here is more efficient, because with this code, Go now doesn't have to go to the **memory and allocate new space**. Instead, it can use the existing space, because we **already reserved enough space**. 

```go
userNames = append(userNames, "Eren")
userNames = append(userNames, "Eren")
userNames = append(userNames, "Eren")
userNames = append(userNames, "Eren")
userNames = append(userNames, "Eren")
userNames = append(userNames, "Eren")
```

Only once we go beyond the five capacity limit here, it **will have to allocate new space**. Therefore, using this make function can be useful if you know in advance that you are soon going to add a fixed number of items, or at least a number where you have a rough estimate how much you are going to add, because that **then can make memory management more efficient**.

#### **`make`ing maps**

This make function is not just available for slices. Instead, you can also use it to make maps. 

```go
courseRatings := map[string]float64{}
courseRatings["go"] = 4.7
courseRatings["react"] = 4.8

fmt.Println(courseRatings) // map[go:4.7 react:4.8]
```

When we create such an empty map here, Go will have to **reallocate memory** whenever **we add new items to that map**. If we know at least roughly how many items we are going to add to that map, we can also use the `make` function to create such a map.

Instead here we can also pass an additional argument to make, but unlike with make for slices, it's now not two additional arguments that can be passed here, but instead **only one**, because here, **we can't set any empty slots**. This doesn't really make sense for maps. Instead, we can **justify the intended length of that map**. Go can go ahead and pre-allocate memory.

```go
courseRatings := make(map[string]float64, 3)
courseRatings["go"] = 4.7
courseRatings["react"] = 4.8
courseRatings["nodejs"] = 4.6
```

We could set this to three, now we can add three items here, *without Go having to reallocate memory*. That would only be the case once we add another item here, 
```go
courseRatings["angular"] = 4.7
```
then since we only defined a capacity of three here, Go would have to reallocate memory, but if we know in advance that we only plan on adding three items, at least for the moment we could make this a bit more efficient by using make for creating that map.

#### Working With Type Aliases

Another feature that can make your code a bit more efficient from a developer's perspective could be a custom type, a type alias. 

```go
make(map[string]float64, 3)
```

For this example, types like this are rather long. A map with string keys and float values, that's quite some text you have to write to define this type. Then you could add a **output method**:


```go
type floatMap map[string]float64

func (m floatMap) output() {
	fmt.Println(m)
}
```

Then you can use it them:

```go
courseRatings := make(floatMap, 3)
courseRatings["go"] = 4.7
courseRatings["react"] = 4.8

courseRatings.output() // map[go:4.7 react:4.8]
```

You can print it with it's own method. Even if you don't plan on adding custom methods, using such a custom type, such a type alias for longer built-in types like this can make sense, because now we have this **more concise**, **shorter type** which we can use in our code.

#### For Loops With Arrays, Slices & Maps

When working with slices, arrays or maps, so with collections that store a number of items, you can also use the **for loop** to go through all these items and perform some operation for every item. That indeed is something you'll typically need to do quite a bit when writing code.

The syntax for doint that is pretty easy.

```go
for range userNames {} // if you don't care values or indexes

for index, value := range userNames {
	fmt.Println("Index:", index)
	fmt.Println("Value:", value)
} // if you care about

/* Output
Index: 0
Value: Julie
Index: 1
Value:
Index: 2
Value: Eren
Index: 3
Value: Gökşen
*/
```

Index and value is needed, because this range keyword essentially exposes two values related to the usernames slice for every iteration of this for loop. That's exactly what we store in out userNames slice. We created with two empty slots. Then we store Julie for the first slot. Then we append 2 users.

This for loop does not just exist for slices. You can of course also use it with arrays in the same way you use it for maps. For maps, it's also still the same syntax.

```go
for key, value := range courseRatings {
	fmt.Println("Key:", key)
	fmt.Println("Value:", value)
}

/* Output
Key: go
Value: 4.7
Key: react
Value: 4.8
*/
```

## **Functions**

Function is a piece of code that we can execute on the demand. We give it a name, we accept parameters and we can return values, even multiple return values. 

We can also do with functions in Go is that we can use function themselves as **parameter values for other functions**. This might sound a bit cryptic and strange.

Let's say we have a couple of numbers, I now wanna double every number in that slice. We can write a for loop here and we can go through all the numbers and then perform this operation with for loop. We might have multiple slices of numbers in different parts of our program and therefore we wanna outsource this loop, into a seperate function.

```go
func main() {
	numbers := []int{1, 2, 3, 4}
	doubled := doubleNumbers(&numbers)
	fmt.Println(doubled) // output - [2 4 6 8]
}

func doubleNumbers(numbers *[]int) []int {
	dNumbers := []int{}
	for _, value := range *numbers {
		dNumbers = append(dNumbers, value*2)
	}
	return dNumbers
}
```

With that, we are just repeating what we already learned, but this is an important first step to then understand what that mean with functions as parameter values for other functions. At the moment we are not using that feature yet.

Our goal here is to not have this doubleNumbers function, which only works on slices, but instead we might want a general double function that doubles integer themselves, so not slices of integers, but single integers.

For this we can write another function.

```go
func double(number int) int {
	return number * 2
}

dNumbers = append(dNumbers, double(value)) // from above code
```

Now we have another utility function, but here we are passing the result of calling that function to append and that's also not new. We have been using the results of calling functions as parameters for other functions before already, but now comes the interesting part. Let's say we don't just have double function, but we also have a triple function as a dummy example.

```go
func triple(number int) int {
	return number * 3
}
```

We have to write brand new triple numbers function, where we repeat all that code just to then call a different function here inside of that for loop. *That's where this function are first class values feature can now come in handy*. It would be pretty nice if **double numbers would be less specific**. Maybe just be a transformNumbers function. Exact transformation is not hard coded into the function as it currently is. We maybe also accept a second parameter value **that describes the to be performed transformation**. 

That's where it's now handy that in Go, we can also pass functions as parameter values and we can therefore accept functions as parameter values. 

```go
func main() {
	numbers := []int{1, 2, 3, 4}
	doubled := transformNumbers(&numbers, double)
	tripled := transformNumbers(&numbers, triple)

	fmt.Println(doubled) // output - [2 4 6 8]
	fmt.Println(tripled) // output - [3 6 9 12]
}

func transformNumbers(numbers *[]int, transform func(int) int) []int {
	dNumbers := []int{}
	for _, value := range *numbers {
		dNumbers = append(dNumbers, transform(value))
	}
	return dNumbers
}

func double(number int) int {
	return number * 2
}

func triple(number int) int {
	return number * 3
}
```

Now that we know that we can pass functions themselves as parameter values, we can **save that unneccessary code duplication**, we can avoid it and we can instead justify this generic function once and then accept the specific transformation function that should be executed inside of it as a function parameter.

Now that we know about function types, I can also come back to a feature we learned about **custom types**. Function types can get rather long. This one isn't (`func(int) int`), but that's just a function that takes one parameter and one return value. Let's create our custom type:

```go
type transformFn func(int) int
func transformNumbers(numbers *[]int, transform transformFn) []int {}
```

### Returning Functions as Values - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/10-functions/function-values/function-values.go">Examples</a>

Functions can also return other functions. They can not just get them as parameter values. Now this will become more useful once we also learn about anonymous functions and closures later, but still want to show it to you. 

```go
func getTransformerFunction() transformFn {
	return double
}
```

Now whenever you execute, `getTransformerFunction` you geet a function as a return value because that's also possible. You can not just accept functions as parameter values. You can also return them. Here we are returning double. We are not executing it, because if I would, I would return the result of calling that function. I just wanna return the function itself here, and hence I don't execute it. **Return value is function itself as a value**.

For better example, we could say that `getTransformerFunction` has the job of picking the right transformer for the data on which we want to perform the transformation. Hence we could expect some numbers here, which might be a slice of integer.

```go
func getTransformerFunction(numbers *[]int) transformFn {
	if (*numbers)[0] == 1 {
		return double
	} else {
		return triple
	}
}
```

Now we can use this `getTransformerFunction` in `main` function:

```go
func main() {
	numbers := []int{1, 2, 3, 4}
	moreNumbers := []int{5, 1, 2}

	transformFn1 := getTransformerFunction(&numbers)
	transformFn2 := getTransformerFunction(&moreNumbers)

	transformedNumbers := transformNumbers(&numbers, transformFn1)
	moreTransformedNumbers := transformNumbers(&moreNumbers, transformFn2)

	fmt.Println(transformedNumbers) // output - [2 4 6 8]
	fmt.Println(moreTransformedNumbers) // output - [15 3 6]
}
```

This is definetely a made up case, but the key takeaway is that functions can return other functions and that can come in handy in certain situations. 

### Anonymous Functions - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/10-functions/anonymous-closures/main.go">Examples</a>

We have code that looks similar to what we had before, we have a transformNumbers function just as before, takes another function as a second parameter. 

```go
func main() {
	numbers := []int{1, 2, 3, 4}

	transformed := transformNumbers(&numbers, ???)

	fmt.Println(transformed)
}

func transformNumbers(numbers *[]int, transform func(int) int) []int {
	dNumbers := []int{}
	for _, value := range *numbers {
		dNumbers = append(dNumbers, transform(value))
	}
	return dNumbers
}
```

Here is an error, because we are not passing a value for transformNumbers second parameter. We don't have the double and triple functions from before anymore.

Because now we dive into anonymous functions. When you *have a case where a function wants another function as a parameter value or where a function returns a function*, then you often can save some effort and **time by using anonymous functions**, which is a feature that **allows you to define a function just in time when you need it** instead of in advance.

I need a function that doubles all my numbers, I might not want to write a brand new double function because maybe **I only need the double function once and for the next transformation**, I need a different function, different logic. 

In that case, you can write a function here in place of these free question marks. 

```go
transformed := transformNumbers(&numbers, func(number int) int {
	return number * 2
})
```

This is valid way of writing this. Now this here is a so-called **anonymous function**. It's not a function type, because we are not writing this in a place where a type is expected, but in a place where a value is expected. We are calling another function and we are passing in values for these parameters after all.

#### **Understanding Closures** - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/10-functions/anonymous-closures/main.go">Examples</a>

Related to anonymous function, we have the concept of closures. Closures also use anonymous functions and use a specific aspect of anonymous functions. 

I am using regular function named `createTransformer`. This function has the goal of producing functions. For this, I will return an anonymous function, because in all the places where functions are needed, so both in parameter values as well as in return values, you can use anonymous functions. That function should return functions that takes int as inputs and return int as values.

```go
func createTransformer() func(int) int {
	return func(number int) int {}
}
```

Then in anonymous function returns the number with which I wanna multiply that number should be a parameter of `createTransformer` now. So here the factor is another integer, inside of anonymous function we can use this factor.

```go
func createTransformer(factor int) func(int) int {
	return func(number int) int {
		return number * factor
	}
}
```

Note that factor is **not a parameter of this anonymous function**, but of createTransformer. Because of scoping and because of the fact that we can use variables and parameters act like variables and are just variables in the end, in lower level nested scopes means that we can use factor which belongs to the scope of `createTransformer` inside of this anonymous function, which has it's own scope, but which is part of the function scope.

So we can use factor in this inner anonymous function, even though it's not a parameter of this function, because it is variable or parameter of that outer scope of this outer function. 

Now the function which I return, takes both its own parameter number as well as a parameter of `createTransformer`. We can use this function as a **so-called factory function**. Because that **produces other functions with different configurations**. 

Now we can easily create different number transformers.

```go
numbers := []int{1, 2, 3, 4}

double := createTransformer(2)
triple := createTransformer(3)

doubled := transformNumbers(&numbers, double)
tripled := transformNumbers(&numbers, triple)

fmt.Println(doubled) // output - [2 4 6 8]
fmt.Println(tripled) // output - [3 6 9 12]
```

That's how we can use such a factory function here. **Factory functions are just a pattern**, but we also actually have a closure here. Every anonymous function is a closure, and that simply means that if you use *a variable from a scope in which the function is created*, so from an **outer scope like factor** here, then the value of that **outer scope variable or parameter is locked in into this created function**. 

So that means that if I call `createTransformer` with two different values as I do it here with two and three, then the function that is produced **will not be changed by those later calls**. If I call `createTransformer` with two here, then this function will return me a function that multiplies the input value to this transformer function with two, because I passed in two here, If I then call `createTransformer` thereafter again with a different value, **that will be a totally different scope, totally different function execution**. Just because I call it with three, will not change the double function, which was produced before because this anonymous function closed over the variables or parameters of the scope in which it was created.

`factor` value **will be locked in and will be available at any point** in the future when we execute this function, even if we call `createTransformer` thereafter, this locked in value won't be changed.

### Recursion - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/10-functions/recursion/recursion.go">Examples</a>

We talk about recursion if a **function calls itself**. The great example for this is a function that calculates the factorial of a number. Just to make sure we are on the same page, the factorial of five would be `5 * 4 * 3 * 2 * 1`. So it would simply be `120`.

```go
func main() {
	fact := factorial(5)
	fmt.Println(fact) // 120
}

func factorial(number int) int {
	result := 1
	for i := 1; i <= number; i++ {
		result = result * i
	}
	return result
}
```

This is not using anything new. There is nothing wrong with this approach, but with recursion we can write this in a slightly more concise way, and in other cases recursion can **have even bigger advantages and solve problems which can be difficult to solve**. 

Recursion is calling itself, so you **have to define an exit condition**. *Otherwise this is an infinite loop. Because you keep on calling yourselves, and you just lower the number, at some point will go into the negative space*, but will continue calling ourselves. 

```go
func main() {
	fact := factorial(5)
	fmt.Println(fact) // 120
}

func factorial(number int) int {
	if number == 0 {
		return 1
	}
	return number * factorial(number-1)
}
```

![Alt text](./assets/recursion-in-action.png)

### Variadic Functions - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/10-functions/main.go">Examples</a>

Let's say you wanna build a function `sumup`, which should take a list of numbers and build the sum of that list. Now for this of course, we could accept a slice of ints, and then return a single int.

```go
func main() {
	numbers := []int{1, 10, 15}
	sum := sumup(numbers)
	fmt.Println(sum) // 26
}

func sumup(numbers []int) int {
	sum := 0
	for _, val := range numbers {
		sum += val
	}
	return sum
}
```

Sometimes, when writing code or when working on more complex programs, you might not have a slice or an array of numbers available. You might wanna call `sumup`, but instead of creating a slice in a seperate step, you might **prefer to just pass in your list of numbers like this** as simple parameter values:

```go
sum := sumup(1, 10, 25)
```

So that's not an array or slice, it's just a list of free parameter values. Of course, that doesn't work here, because `sumup` doesn't want free individual parameter values. That's where **variadic functions** come into play.

You can write functions that **work with any amount of parameters**. In most cases, you clearly define that a function as one or two or three or whatever you need parameters. Sometimes, you want to write a function that really works with any amount of parameters. In here I wanna accept **any amount of numbers as inputs**, but I *don't wanna force others to pass in a slice or array of numbers that has to be created seperately*. 

To handle that case we can use three dots:

```go
func sumup(numbers ...int) int {}
sum := sumup(1, 10, 15, 40, -4)
fmt.Println(sum) // 61
```

In the end numbers, if we hover it, will just be a slice of these value types. So the tree dots in the end, **collect that list of standalone values and merge that all into a slice for you**. That's what the three dots here in that parameter list when defining a function do for you. We still act on a slice of numbers, but **now it's created behind the scenes based on a list of standalone values** instead of forcing the color of the function to create the slice ahead of time.

That certainly wouldn't be the end of the world, but it's more convenient to do it like that. It's also worth that you can also mix this feature with other parameters which are defined standalone.

```go
func sumup(startingValue int, numbers ...int) int {}
```

With this way, first value that we pass into `sumup` would be interpreted as a `startingValue`, which we then can use in any way we want in the `sumup` function. **All the other values that don't have their own specific parameter-defined would be collected together into this slice**.

#### Splitting Slices Into Parameter Values

Now what if you have a variadic function that you maybe did not write yourself, but a colleague or third party package have it. You do have a slice of numbers, but you have a function that doesn't want that slice of numbers, but instead, a list of standalone parameters.

```go
numbers := []int{1, 10, 15}
sum := sumup(numbers) // it gives error now
```

Now calling such a function would be pretty annoying if you have a slice, because you *can't pass your slice as a value here, we want list, not a slice*. Thankfully, there is also the **opposite of this collect all parameter**. In a place where a value is needed, so where you call a function that has this collect all parameter, **you can pass in your slice with help of another special operator in Go** and as a first parameter we give an seperate integer.

```go
anotherSum := sumup(1, numbers...) // correct way
fmt.Println(anotherSum) // 27
```

Then for that collect all parameter, which wants a list of individual parameter values, **I can now pass in my slice with the three dots**, and in this place the three dots will actually **pull all the elements from that slice out of that slice** and **turn that slice into a list of standalone parameter values**. 

So behind the scenes, `sumup` is called with four parameters, one is for `startingValue`, and then the three values in that slice pulled out and turned into three seperate parameter values.

So the three dots can be useful to make your functions more **dynamic** and **flexible**. You can either use them *when you define a function in the parameter list that you define to add such a collect all parameter* or use *three dots in place where you do want to split a slice or array of existing values up into a standalone parameter list*, so that you can pass that data into a function that does have this collect all function parameter in it's function definition.

## Practice Project: **Price Calculator** - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/02-price-calculator">Examples</a>

We build a tool that calculates `tax included` prices for a given list of **prices & tax rates**. 

![Alt text](./assets/price-calculator-description.png)

Main goal of this program is to then go through prices and for every price I want to add all taxes for these different tax rates and then get a bunch of new prices for every single price.

I want to have a bunch of prices for every tax rate if we wanna store the result like this:

```go
func main() {
	prices := []float64{10, 20, 30}
	taxRates := []float64{0, 0.7, 0.1, 0.15}

	result := make(map[float64][]float64)

	for _, taxRate := range taxRates {
		taxIncludedPrices := make([]float64, len(prices))
		for priceIndex, price := range prices {
			taxIncludedPrices[priceIndex] = price * (1 + taxRate)
		}
		result[taxRate] = taxIncludedPrices
	}
	fmt.Println(result)
}
```

This is the basic of that program, in the <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/02-price-calculator">file</a> you can see advanced version.

## **Concurrency** - Running Tasks In Parallel

One of Go's advantages focus on concurrency and it's high performance. 
- What exactly concurrency means in Go?
- How you can work with a feature called **Goroutines** to run tasks in parallel?
- Sending Data with **Channels**
- Controlling **Code Flow** & **Simultaneous Tasks**