package user

import (
	"errors"
	"fmt"
	"time"
)

type User struct {
	firstName string
	lastName  string
	birthDate string
	createdAt time.Time
}

func (u User) OutputUserDetails() {
	// Technically we are trying to access firstName, lastName, birthDate, not on the value
	/// stored at that address. However this works because that's essentially a shortcut
	//// that's allowed by Go. The technically correct way would be indeed *u
	fmt.Println(u.firstName, u.lastName, u.birthDate)
}

func (u *User) ClearUserName() { // if we modify struct, it's copy changes, the struct stays same.
	u.firstName = ""
	u.lastName = ""
}

func New(firstName, lastName, birthDate string) (*User, error) {
	if firstName == "" || lastName == "" || birthDate == "" {
		return nil, errors.New("first name, last name and birth date are required")
	}
	// by returning a pointer here instead of a value, we again prevent this value from being copied
	/// because if you would return a regular value, a copy would be created. That's not just the case
	//// for received arguments, but also for returned values.
	return &User{
		firstName,
		lastName,
		birthDate,
		time.Now(),
	}, nil
}
