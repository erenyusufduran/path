package main

import (
	"fmt"
)

func main() {
	firstName := getUserData("Please enter your first name: ")
	lastName := getUserData("Please enter your last name: ")
	birthDate := getUserData("Please enter your birthdate (MM/DD/YYYY): ")

	fmt.Println(firstName, lastName, birthDate)
}

func getUserData(prompText string) string {
	fmt.Print(prompText)
	var value string
	fmt.Scan(&value)
	return value
}
