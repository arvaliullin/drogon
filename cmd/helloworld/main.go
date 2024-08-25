package main

import (
	"drogon/internal/helloworld"
	"fmt"
	"time"
)

func myPrint(start, finish int) {
	for i := start; i < finish; i++ {
		fmt.Print(i, " ")
	}
	fmt.Println()
	time.Sleep(100 * time.Millisecond)
}

func main() {
	fmt.Println("Hello, World!")
	for i := 0; i < helloworld.COUNT; i++ {
		go myPrint(i, helloworld.COUNT)
		time.Sleep(time.Second)
	}
}
