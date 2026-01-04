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

app.get("/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "No token provided" })
  }

  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token" })
    }
    console.log("decoded: ", decoded)
    res.status(200).json({
      message: `Hello ${decoded.username}, you have access to this protected route!`,
    })
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
