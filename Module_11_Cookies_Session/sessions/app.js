const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

app.use(cookieParser())
app.use(express.json())

app.post("/login", (req, res) => {
  const { username } = req.body
  // res.cookie("username", username, { maxAge: 60000, httpOnly: true })
  res.setHeader("Set-Cookie", `username=${username}; HttpOnly; Max-Age=60`)
  // Simulate login functionality
  res.send("Cookie is set")
})

app.listen(3000, () => {
  console.log("Server is running...")
})
