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

func GenericPrint[T any](s []T) {
	for _, v := range s {
		fmt.Println(v)
	}
	fmt.Println()
}

func main() {
	fmt.Println("Hello, World!")
	for i := 0; i < helloworld.COUNT; i++ {
		go myPrint(i, helloworld.COUNT)
		time.Sleep(time.Second)
	}

	a1 := []int{1, 2, 3, 4}
	GenericPrint(a1)

	s1 := []string{"One", "Two", "Three", "Four"}
	GenericPrint(s1)
}
