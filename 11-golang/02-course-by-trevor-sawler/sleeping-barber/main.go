package main

import (
	"math/rand"
	"time"

	"github.com/fatih/color"
)

// package level variables
var seatingCapacity = 10
var arrivalRate = 100
var cutDuration = 1000 * time.Millisecond
var timeOpen = 10 * time.Second

func main() {
	// seed our random number generator
	rand.New(rand.NewSource(time.Now().UnixNano()))

	// print welcome message
	color.Yellow("The Sleeping barber Problem")
	color.Yellow("---------------------------")

	// create channels if we need any
	clientChan := make(chan string, seatingCapacity) // maximum ten people in this channel
	doneChan := make(chan bool)                      // when everythings done.

	// create the barbershop
	shop := BarberShop{
		ShopCapacity:    seatingCapacity,
		HairCutDuration: cutDuration,
		NumberOfBarbers: 0,
		ClientsChan:     clientChan,
		BarbersDoneChan: doneChan,
		Open:            true,
	}

	color.Green("The shop is open for the day!")

	// add barbers
	shop.addBarber("Frank")

	// start the barbershop as a goroutine

	// add clients

	// block until the barbership is closed
	time.Sleep(5 * time.Second)
}
