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

app.get("/protected", (req, res) => {
  const { username } = req.cookies
  if (username !== "nazmul") res.status(401).send("Unauthorized!")
  else
    res
      .status(200)
      .send(`Welcome ${username}! You have access to this protected route`)
})

app.listen(3000, () => {
  console.log("Server is running...")
})
