const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

app.use(cookieParser())

app.get("/set-cookie", (req, res) => {
  res.cookie("name", "nazmul", { httpOnly: true })
  res.send("Cookie has been set successfully!")
})

app.get("/get-cookie", (req, res) => {
  const name = req.cookies.name

  if (name === "nazmul") {
    res.send(`Cookie received: ${name}`)
  } else {
    res.send("Unauthorized!")
  }
})

app.listen(3000, () => {
  console.log("Server is running...")
})
