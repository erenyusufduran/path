// 1) Create a new array (!) that contains three hobbies you have
// 		Output (print) that array in the command line.
// 2) Also output more data about that array:
//		- The first element (standalone)
//		- The second and third element combined as a new list
// 3) Create a slice based on the first element that contains
//		the first and second elements.
//		Create that slice in two different ways (i.e. create two slices in the end)
// 4) Re-slice the slice from (3) and change it to contain the second
//		and last element of the original array.
// 5) Create a "dynamic array" that contains your course goals (at least 2 goals)
// 6) Set the second goal to a different one AND then add a third goal to that existing dynamic array
// 7) Bonus: Create a "Product" struct with title, id, price and create a
//		dynamic list of products (at least 2 products).
//		Then add a third product to the existing list of products.

package main

import "fmt"

type Product struct {
	title string
	id    string
	price float64
}

func main() {
	hobbies := [3]string{"Learning Coding", "Reading Book", "Riding Cycle"}
	fmt.Println(hobbies[0])
	fmt.Println(hobbies[1:])

	firstTwoElementsFromHobbies := hobbies[:2]
	fmt.Println(firstTwoElementsFromHobbies)

	reSlicedHobbies := hobbies[1:] // or 1:3
	fmt.Println(reSlicedHobbies)

	courseGoals := []string{"Learn Memory Management", "Learn Error Handling"}
	courseGoals[1] += " Very Well"
	fmt.Println(courseGoals)

	products := []Product{{"Bottle", "bottle_1", 18.99}, {"Phone", "phone_1", 877.99}}
	fmt.Println(products)

	products = append(products, Product{title: "Mouse", id: "mouse_1", price: 47.99})
	fmt.Println(products)
}
