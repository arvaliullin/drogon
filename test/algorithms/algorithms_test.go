package algorithms

import (
	"drogon/internal/algorithms"
	"testing"
)

func TestGCD(t *testing.T) {
	tests := []struct {
		a, b     int
		expected int
	}{
		{56, 98, 14},
		{48, 18, 6},
		{101, 103, 1},
		{270, 192, 6},
		{100, 100, 100},
		{0, 5, 5},
		{5, 0, 5},
		{0, 0, 0},
	}

	for _, test := range tests {
		if result := algorithms.Gcd(test.a, test.b); result != test.expected {
			t.Errorf("GCD(%d, %d) = %d; expected %d", test.a, test.b, result, test.expected)
		}
	}
}
