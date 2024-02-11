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

// That you build a new struct that builds up on an existing struct.
// ----- Inheritence -----
type Admin struct {
	email    string
	password string
	User     // anonymous embedding to use user's methods.
}

func (u *User) OutputUserDetails() {
	// Technically we are trying to access firstName, lastName, birthDate, not on the value
	/// stored at that address. However this works because that's essentially a shortcut
	//// that's allowed by Go. The technically correct way would be indeed *u
	fmt.Println(u.firstName, u.lastName, u.birthDate)
}

func (u *User) ClearUserName() { // if we modify struct, it's copy changes, the struct stays same.
	u.firstName = ""
	u.lastName = ""
}

func NewAdmin(email, password string) Admin {
	return Admin{
		email:    email,
		password: password,
		User: User{
			firstName: "ADMIN",
			lastName:  "ADMIN",
			birthDate: "-----",
			createdAt: time.Now(),
		},
	}
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
