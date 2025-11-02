const express = require("express")
const router = express.Router()
const {
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController")

router.get("/", getAllUsers)
router.get("/update", updateUser)
router.get("/delete", deleteUser)

module.exports = router
