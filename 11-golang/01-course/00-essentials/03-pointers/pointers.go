package main

import "fmt"

func main() {
	age := 32 // regular variable

	var agePointer *int = &age

	fmt.Println("Age:", *agePointer) // dereferencing - value at this address with *

	editAgeToAdultYears(agePointer)
	fmt.Println(age)
}

func editAgeToAdultYears(age *int) {
	*age = *age - 18
}
