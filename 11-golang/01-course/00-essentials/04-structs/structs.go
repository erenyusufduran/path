package main

import (
	"errors"
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

func (u *user) clearUserName() { // if we modify struct, it's copy changes, the struct stays same.
	u.firstName = ""
	u.lastName = ""
}

func newUser(firstName, lastName, birthDate string) (*user, error) {
	if firstName == "" || lastName == "" || birthDate == "" {
		return nil, errors.New("first name, last name and birth date are required")
	}
	// by returning a pointer here instead of a value, we again prevent this value from being copied
	/// because if you would return a regular value, a copy would be created. That's not just the case
	//// for received arguments, but also for returned values.
	return &user{
		firstName,
		lastName,
		birthDate,
		time.Now(),
	}, nil
}

func main() {
	firstName := getUserData("Please enter your first name: ")
	lastName := getUserData("Please enter your last name: ")
	birthDate := getUserData("Please enter your birthdate (MM/DD/YYYY): ")

	appUser, err := newUser(firstName, lastName, birthDate)

	if err != nil {
		fmt.Println(err)
		return
	}

	appUser.outputUserDetails()
	appUser.clearUserName()
	appUser.outputUserDetails()
}

func getUserData(prompText string) string {
	fmt.Print(prompText)
	var value string
	fmt.Scanln(&value)
	return value
}
