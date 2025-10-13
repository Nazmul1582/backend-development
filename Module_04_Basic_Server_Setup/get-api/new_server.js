const express = require("express")
const axios = require("axios")
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome to the backend server")
})

app.get("/user", (req, res) => {
  axios
    .get("http://localhost:3000/user")
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => console.log(error))
  res.send("success")
})

app.listen(4000)
