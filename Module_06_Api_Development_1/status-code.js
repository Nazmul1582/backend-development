const express = require("express")
const app = express()

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const isActive = req.query.isActive
  if (id !== 123) {
    return res.status(404).send("User not found!")
  }
  res.status(200).send(`User id: ${id} and isActive: ${isActive}`)
})

app.listen(3000, () => {
  console.log("Server is running...")
})
