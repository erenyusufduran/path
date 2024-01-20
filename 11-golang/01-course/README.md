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

### Arrays - <a href="https://github.com/erenyusufduran/colins-path/tree/main/11-golang/01-course/00-essentials/06-arrays">examples</a>

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

#### Diving Deeper Into Slices

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
	highlightedPrices := featuredPrices[1:2] // That would be causes an error, if wroted above, because it's capacity would be 2 after that.
```

Even though highlightedPrices originally only had one element, we can reslice based on that element slice and now suddenly select more than that one element because internally, Go always **memorized that there is more content available to the right of the selected slice**. That's what this capacity here kind of told us where we had a difference between capacity and length.