const express = require("express")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(
  session({
    secret: "signature",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 900000, httpOnly: true },
  })
)

const localStorage = {}

app.post("/login", (req, res) => {
  const { username } = req.body
  if (!username) return res.status(400).send("Username required")
  req.session.name = username
  req.session.loggedIn = true

  // Simulate login functionality
  res.send("Cookie is set")
})

app.get("/protected", (req, res) => {
  const { name, loggedIn } = req.session

  if (name && loggedIn)
    res
      .status(200)
      .send(`Welcome ${name}! You have access to this protected route`)
  else res.status(401).send("Unauthorized!")
})

app.get("/logout", (req, res) => {
  req.session.destroy(() => res.send("Logged Out"))
})

app.listen(3000, () => {
  console.log("Server is running...")
})
