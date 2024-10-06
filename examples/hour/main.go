package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

/*
Напишите корневой адрес работающего по https веб-приложения,
которое по маршруту /login выдаёт ваш логин, а по маршруту /hour
выдаёт в формате HH
(например, 07 или 13) значение текущего часа по Московскому времени.
*/

func MyLogin(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s", "login")
}

func CurrentHour(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%v", time.Now().Hour())
}

func main() {
	http.HandleFunc("/login", MyLogin)
	http.HandleFunc("/hour", CurrentHour)
	log.Fatal(http.ListenAndServe(":10888", nil))
}
