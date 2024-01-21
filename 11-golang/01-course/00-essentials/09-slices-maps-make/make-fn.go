package main

import "fmt"

func main() {
	userNames := make([]string, 2)
	userNames = append(userNames, "Eren")
	userNames = append(userNames, "Gökşen")
	userNames[0] = "Julie"

	fmt.Println(userNames)
}
