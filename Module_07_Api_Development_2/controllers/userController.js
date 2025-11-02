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

const getAllUsers = (req, res) => {
  res.status(200).json({
    users,
  })
}

const updateUser = (req, res) => {
  res.json({
    message: "User is updated!",
  })
}

const deleteUser = (req, res) => {
  res.json({
    message: "User is deleted!",
  })
}

module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
}
