const express = require("express")
const router = express.Router()

router.get("/user/:id/payment", (req, res) => {
  res.status(200).send("Payment successfully done!")
})

module.exports = router
