package main

import (
	"ApiComPostgres/configs"
	"ApiComPostgres/handlers"
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func main() {
	err := configs.Load()
	if err != nil {
		panic(err)
	}

	r := chi.NewRouter()
	r.Post("/", handlers.Create)

	log.Println(`A API está executando na porta `, configs.GetServerPort())

	http.ListenAndServe(fmt.Sprintf(":%s", configs.GetServerPort()), r)
}
