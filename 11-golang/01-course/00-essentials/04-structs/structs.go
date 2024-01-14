package main

import (
	"fmt"
	"time"
)

type user struct {
	firstName string
	lastName  string
	birthDate string
	createdAt time.Time
}

func (u user) outputUserDetails() {
	// Technically we are trying to access firstName, lastName, birthDate, not on the value
	/// stored at that address. However this works because that's essentially a shortcut
	//// that's allowed by Go. The technically correct way would be indeed *u
	fmt.Println(u.firstName, u.lastName, u.birthDate)
}

func main() {
	firstName := getUserData("Please enter your first name: ")
	lastName := getUserData("Please enter your last name: ")
	birthDate := getUserData("Please enter your birthdate (MM/DD/YYYY): ")

	appUser := user{
		firstName,
		lastName,
		birthDate,
		time.Now(),
	}

	appUser.outputUserDetails()
}

func getUserData(prompText string) string {
	fmt.Print(prompText)
	var value string
	fmt.Scan(&value)
	return value
}
