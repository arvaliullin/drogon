package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
)

// Функция task, которая возвращает произведение аргумента на его квадрат
func task(x int) int {
	return x * x
}

// Обработчик для /login/
func loginHandler(w http.ResponseWriter, r *http.Request) {
	// Устанавливаем заголовки
	w.Header().Set("Content-Type", "text/plain; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Отправляем ответ
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, "itmo282614")
}

// Обработчик для /sample/
func sampleHandler(w http.ResponseWriter, r *http.Request) {
	// Читаем аргумент x из query-параметра
	xStr := r.URL.Query().Get("x")
	if xStr == "" {
		http.Error(w, "Missing parameter x", http.StatusBadRequest)
		return
	}

	// Преобразуем строку в целое число
	x, err := strconv.Atoi(xStr)
	if err != nil {
		http.Error(w, "Invalid parameter x", http.StatusBadRequest)
		return
	}

	// Вычисляем результат
	result := task(x)

	// Устанавливаем заголовки
	w.Header().Set("Content-Type", "text/plain; charset=UTF-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Отправляем ответ
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, result)
}

func main() {
	// Настраиваем маршруты
	http.HandleFunc("/login/", loginHandler)
	http.HandleFunc("/sample/", sampleHandler)
	log.Fatal(http.ListenAndServe(":10888", nil))
}
