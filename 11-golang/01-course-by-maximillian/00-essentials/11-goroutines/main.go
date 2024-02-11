package main

import (
	"fmt"
	"time"
)

func greet(phrase string, doneChan chan bool) {
	fmt.Println("Hello!", phrase)
	doneChan <- true
}

func slowGreet(phrase string, doneChan chan bool) {
	time.Sleep(3 * time.Second)
	fmt.Println("Hello!", phrase)
	doneChan <- true
	close(doneChan)
}

func main() {
	done := make(chan bool)

	go greet("nice to meet you", done)
	go greet("how are you", done)
	go slowGreet("how .. are .. you ..", done)
	go greet("I hope you are like it", done)

	for range done {
	}
}
