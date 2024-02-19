package main

import "fmt"

var msg string

func updateMessage(s string) {
	msg = s
}

func printMessage() {
	fmt.Println(msg)
}

func main() {
	msg = "Hello, world!"

	updateMessage("Hello, universe!")
	printMessage()

	updateMessage("Hellos, cosmos!")
	printMessage()

	updateMessage("Hello, world!")
	printMessage()
}
