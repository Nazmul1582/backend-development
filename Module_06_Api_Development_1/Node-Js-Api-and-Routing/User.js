const express = require("express")
const router = express.Router()

router.get("/user/:id", (req, res) => {
  res.status(200).send("Welcome!")
})

module.exports = router
