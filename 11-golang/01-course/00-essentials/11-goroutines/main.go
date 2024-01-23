package main

import (
	"fmt"
	"time"
)

func greet(phrase string) {
	fmt.Println("Hello!", phrase)
}

func slowGreet(phrase string) {
	time.Sleep(3 * time.Second)
	fmt.Println("Hello!", phrase)
}

func main() {
	go greet("nice to meet you")
	go greet("how are you")
	go slowGreet("how .. are .. you ..")
	go greet("I hope you are like it")
}
