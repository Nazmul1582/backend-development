const express = require("express")
const crypto = require("crypto")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/signin", (req, res) => {
  const { username, password } = req.body
  const data = JSON.stringify({ username, password })

  if (!password) return res.send("Password is required!")
  const hash = crypto
    .createHmac("sha256", "asd5r34u85iu348")
    .update(data)
    .digest("hex")
  res.send(`hashed value: ${hash}`)
})

app.get("/protected", (req, res) => {
  const { username, password, hash } = req.query
  const data = JSON.stringify({ username, password })
  const newHash = crypto
    .createHmac("sha256", "asd5r34u85iu348")
    .update(data)
    .digest("hex")

  if (hash !== newHash) return res.status(401).send("Unauthorized!")
  return res.send("Your are authorized to access this protected route")
})

app.listen(3000, () => {
  console.log("Server is runnig on http://localhost:3000")
})
