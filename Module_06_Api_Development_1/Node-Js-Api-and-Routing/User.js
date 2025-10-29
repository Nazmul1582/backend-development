const express = require("express")
const router = express.Router()

// Data Modeling
class User {
  constructor({ name, age, address }) {
    this.name = name
    this.age = age
    this.address = address
  }
}

router.get("/user/:id", (req, res) => {
  res.status(200).send("Welcome!")
})

router.post("/user/create", (req, res) => {
  const user = new User(req.body)
  if (!user.name) {
    res.status(400).send({
      message: "Name is required!",
    })
  }
  res.status(201).json({
    message: "User created successfully",
    user,
  })
})

module.exports = router
