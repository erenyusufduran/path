package main

import (
	"fmt"
	// "example.com/price-calculator/cmdmanager"
	"example.com/price-calculator/filemanager"
	"example.com/price-calculator/prices"
)

func main() {
	taxRates := []float64{0, 0.7, 0.1, 0.12, 0.15}
	doneChans := make([]chan bool, len(taxRates))

	for index, taxRate := range taxRates {
		doneChans[index] = make(chan bool)
		fm := filemanager.New("prices.txt", fmt.Sprintf("result_%v.json", taxRate*100))
		// cmdm := cmdmanager.New()

		priceJob := prices.NewTaxIncludedPriceJob(fm, taxRate)
		go priceJob.Process(doneChans[index])
		// if err != nil {
		// 	fmt.Println("could not process job")
		// 	fmt.Println(err)
		// }
	}

	for _, doneChan := range doneChans {
		<-doneChan
	}
}
