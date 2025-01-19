package main

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/arvaliullin/drogon/docs"
	"github.com/arvaliullin/drogon/internal/glossary/delivery"
	"github.com/arvaliullin/drogon/internal/glossary/repository"
	"github.com/arvaliullin/drogon/internal/glossary/usecase"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	_ "github.com/lib/pq"
	swagger "github.com/swaggo/echo-swagger"
)

func main() {
	databaseURL, exists := os.LookupEnv("DATABASE_CONNECTION")
	if !exists {
		log.Fatal("DATABASE_CONNECTION environment variable not set")
	}

	db, err := sql.Open("postgres", databaseURL)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	repo := repository.NewGlossaryRepository(db)
	uc := usecase.NewGlossaryUsecase(repo)
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	e.Static("/", "dist")

	e.GET("/swagger/*", swagger.WrapHandler)

	delivery.NewGlossaryHandler(e, uc)

	if err := e.Start(":8080"); err != nil {
		log.Fatal(err)
	}
}
