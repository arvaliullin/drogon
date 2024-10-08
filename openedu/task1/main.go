package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	// Устанавливаем кастомные заголовки
	w.Header().Set("X-Author", "itmo282614")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Устанавливаем статус ответа и отправляем текст
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, "itmo282614")
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":10888", nil))
}
