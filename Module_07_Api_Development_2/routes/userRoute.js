const express = require("express")
const router = express.Router()
const {
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController")
const { isValidUser, checkUserAgent } = require("../middleware/user")

router.get("/", isValidUser, checkUserAgent, getAllUsers)
router.get("/update", isValidUser, updateUser)
router.get("/delete", isValidUser, deleteUser)

module.exports = router
