package main

import(
	"github.com/gin-gonic/gin"
)

func main(){
	// create a Gin router
	r:= gin.Default();

	// simple get route
	r.get("/", func(c *gin.Context){
		c.JSON(200, gin.H{
			"message": "Hello, Gin!"
		})
	})

	// start the server on port 8080
	r.Run(":8080");
}