const express = require("express")
const app = express()

app.get("/set-cookie", (req, res) => {
  res.cookie("name", "nazmul", { httpOnly: true })
  res.send("Cookie has been set successfully!")
})

app.listen(3000, () => {
  console.log("Server is running...")
})
