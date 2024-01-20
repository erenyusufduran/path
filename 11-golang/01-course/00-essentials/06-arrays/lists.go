package main

import "fmt"

func main() {
	prices := []float64{10.99, 8.99}

	prices = append(prices, 5.99)
	prices = prices[1:]
	fmt.Println(prices)
}

// func main() {
// 	var productNames [4]string

// 	prices := [4]float64{10.99, 9.99, 45.99, 20.0}
// 	fmt.Println(prices)

// 	productNames = [4]string{"A Book"}
// 	productNames[2] = "A Carpet"
// 	fmt.Println(productNames)

// 	fmt.Println(prices[2])

// 	featuredPrices := prices[1:]
// 	fmt.Println(featuredPrices)

// 	highlightedPrices := featuredPrices[:1]
// 	fmt.Println(highlightedPrices)

// 	featuredPrices[0] = 199.99
// 	fmt.Println(prices)

// 	fmt.Println(len(featuredPrices), cap(featuredPrices))
// 	fmt.Println(len(highlightedPrices), cap(highlightedPrices))

// 	highlightedPrices = highlightedPrices[:2]
// 	fmt.Println(len(featuredPrices), cap(featuredPrices))
// 	fmt.Println(len(highlightedPrices), cap(highlightedPrices))

// 	fmt.Println(highlightedPrices)

// 	newPrices := highlightedPrices[1:]
// 	fmt.Println(newPrices)
// }
