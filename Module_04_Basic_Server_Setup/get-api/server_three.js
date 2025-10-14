const express = require("express")
const axios = require("axios")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello, Express JS!")
})
app.get("/fetch-fastapi", (req, res) => {
  axios
    .get("http://localhost:8000")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))

  res.send("Successfully fetch data from python server")
})

app.listen(3000)
