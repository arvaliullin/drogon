package main

import (
	"fmt"
	"math"
)

var Global int = 1234
var AnotherGlobal = -5678

func main() {
	var j int
	i := Global + AnotherGlobal
	fmt.Println("j = ", j)
	j = Global
	k := math.Abs(float64(AnotherGlobal))
	fmt.Println("Global = ", Global)
	fmt.Println("AnotherGlobal = ", AnotherGlobal)
	fmt.Println("i = ", i)
	fmt.Println("k = ", k)

	x := complex(2.5, 3.1)
	y := complex(10.2, 2.0)

	fmt.Println("x = ", x)
	fmt.Println("y = ", y)
	fmt.Println("x + y = ", x+y)
	fmt.Println("x - y = ", x-y)
	fmt.Println("x * y = ", x*y)
	fmt.Println("x / y = ", x/y)
}
