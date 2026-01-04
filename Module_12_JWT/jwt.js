const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000
const JWT_SECRET = "YOUR_JWT_SECRETE_KEY"

app.use(bodyParser.json())

app.post("/signin", (req, res) => {
  const { username, password } = req.body

  if (username === "nazmul" && password === "1234") {
    const payload = { username }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })
    res.json({ token })
  } else {
    res.status(401).json({ message: "Invalid Credentials" })
  }
})

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000")
})
