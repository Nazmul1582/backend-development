const express = require("express")
const router = express.Router()

router.get("/user/:id", (req, res) => {
  res.status(200).send("Welcome!")
})

router.post("/user/create", (req, res) => {
  console.log(req.body)
  const { name, age } = req.body
  if (!name) {
    res.status(400).send({
      message: "Name is required!",
    })
  }
  const user = {
    name,
    age,
  }
  res.status(201).json({
    message: "User created successfully",
    user,
  })
})

module.exports = router
