package main

import (
	"fmt"
	"sync"
	"time"
)

func printSomething(s string, wg *sync.WaitGroup) {
	fmt.Println(s)
}

func main() {
	var wg sync.WaitGroup

	words := []string{
		"alpha",
		"beta",
		"delta",
		"gamma",
		"pi",
		"zetta",
		"eta",
		"theta",
		"epsilon",
	}

	wg.Add(9)

	for i, x := range words {
		go printSomething(fmt.Sprintf("%d: %s", i, x), &wg)
	}

	wg.Wait()

	go printSomething("This is the first thing to be printed!", &wg)

	time.Sleep(1 * time.Second)
	printSomething("This is the second thing to be printed!", &wg)
}
