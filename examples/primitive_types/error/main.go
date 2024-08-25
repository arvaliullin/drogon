package main

import (
	"errors"
	"fmt"
	"os"
)

func check(a, b int) error {
	if a == 0 && b == 0 {
		return errors.New("custom error message")
	}

	return nil
}

func formattedError(a, b int) error {
	if a == 0 && b == 0 {
		return fmt.Errorf("a %d and b %d. UserId: %d", a, b, os.Getegid())
	}

	return nil
}

func main() {
	err := check(0, 10)
	fmt.Println(err)
	err = check(0, 0)
	fmt.Println(err)
	err = formattedError(0, 0)
	fmt.Println(err)
}
