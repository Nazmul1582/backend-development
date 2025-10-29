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
  const { name, age, address } = req.body

  if (!name || !age || !address) {
    return res.status(400).send({
      message:
        "You have to provide all data (name, age, address) to create a user",
    })
  }

  if (typeof name !== "string" || name.length < 3 || name.length > 100) {
    return res.status(400).json({
      message: "Name must be a string and between 3 to 100 character",
    })
  }

  if (typeof age !== "number" || age < 0) {
    return res.status(400).json({
      message: "Age must be a positive number",
    })
  }

  if (typeof address !== "string" || address.length <= 5) {
    return res.status(400).json({
      message: "Address must be characters and more then 5 characters",
    })
  }

  const user = new User(req.body)
  res.status(201).json({
    message: "User created successfully",
    user,
  })
})

module.exports = router
