package main

import "fmt"

func main() {
	userNames := make([]string, 2)
	userNames = append(userNames, "Eren")
	userNames = append(userNames, "Gökşen")
	userNames[0] = "Julie"

	fmt.Println(userNames)

	courseRatings := make(map[string]float64, 3)
	courseRatings["go"] = 4.7
	courseRatings["react"] = 4.8

	fmt.Println(courseRatings)
}
