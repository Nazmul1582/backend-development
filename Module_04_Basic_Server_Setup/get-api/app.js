const express = require("express")
const app = express()

const user = {
  name: "Hasan",
  age: 17,
}

app.get("/home", (req, res) => {
  res.send("Hello World!")
})

app.get("/user", (req, res) => {
  res.json(user)
})

app.get("/student/:id", (req, res) => {
  console.log(req.params.id) // route parameter or params
  console.log(req.query.id) // query parameter

  res.send({
    name: "Abdullah",
    age: 20,
  })
})

app.listen(3000)
