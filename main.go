package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/template/html/v2"
)

func main() {
	engine := html.New("./views", ".html")

	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Use(logger.New())

	app.Static("/", "./public")

	app.Get("/admin", func(c *fiber.Ctx) error {
		return c.SendString("Hello, Admin!")
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Page": "index",
		}, "layouts/main")
	})

	app.Get("/cost", func(c *fiber.Ctx) error {
		// Render index within layouts/main
		return c.Render("cost", fiber.Map{
			"Page": "cost",
		}, "layouts/main")
	})

	app.Get("/cost/:name", func(c *fiber.Ctx) error {
		route := fmt.Sprintf("cost_pages/%s", c.Params("name"))
		return c.Render(route, fiber.Map{
			"Page": "cost",
		}, "layouts/main")
	})

	app.Get("/reviews", func(c *fiber.Ctx) error {
		// Render index within layouts/main
		return c.Render("reviews", nil, "layouts/main")
	})

	app.Get("/about_us", func(c *fiber.Ctx) error {
		// Render index within layouts/main
		return c.Render("about_us", fiber.Map{
			"Page": "about_us",
		}, "layouts/main")
	})

	app.Get("/blogs", func(c *fiber.Ctx) error {
		// Render index within layouts/main
		return c.Render("blogs", nil, "layouts/main")
	})

	app.Get("/qa", func(c *fiber.Ctx) error {
		// Render index within layouts/main
		return c.Render("qa", nil, "layouts/main")
	})

	log.Fatalln(app.Listen(":8080"))
}
