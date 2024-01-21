package main

import "fmt"

type floatMap map[string]float64

func (m floatMap) output() {
	fmt.Println(m)
}

func main() {
	userNames := make([]string, 2)
	userNames = append(userNames, "Eren")
	userNames = append(userNames, "Gökşen")
	userNames[0] = "Julie"

	fmt.Println(userNames)

	courseRatings := make(floatMap, 3)
	courseRatings["go"] = 4.7
	courseRatings["react"] = 4.8

	courseRatings.output()
}
