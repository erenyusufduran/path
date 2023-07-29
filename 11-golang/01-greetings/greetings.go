package greetings

import (
	"errors"
	"fmt"
)

// Hello returns a greeting for the names person.
func Hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("Empty Name")
	}
	message := fmt.Sprintf("Hi, %v. Welcome!", name)
	return message, nil
}
