const express = require("express")
const router = express.Router()

const users = [
  {
    id: 1,
    name: "Nazmul",
  },
  {
    id: 2,
    name: "Hasan",
  },
]

router.get("/", (req, res) => {
  res.status(200).json({
    users,
  })
})

module.exports = router
