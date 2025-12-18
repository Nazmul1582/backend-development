const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

app.use(cookieParser())
app.use(express.json())

const localStorage = {}

app.post("/login", (req, res) => {
  const { username } = req.body
  // res.setHeader("Set-Cookie", `username=${username}; HttpOnly; Max-Age=60`)
  res.cookie("username", username, { maxAge: 60000, httpOnly: true })
  localStorage[username] = { loggedIn: true }

  // Simulate login functionality
  res.send("Cookie is set")
})

app.get("/protected", (req, res) => {
  const { username } = req.cookies

  if (localStorage[username] && localStorage[username].loggedIn)
    res
      .status(200)
      .send(`Welcome ${username}! You have access to this protected route`)
  else res.status(401).send("Unauthorized!")
})

app.listen(3000, () => {
  console.log("Server is running...")
})
