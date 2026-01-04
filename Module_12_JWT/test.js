const jwt = require("jsonwebtoken")

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hem11bCIsImlhdCI6MTc2NzQ5MDMwMiwiZXhwIjoxNzY3NDkzOTAyfQ.GLpsepg4AbyNJyvJyp7UPaepCeUWsAlealil6XUo81I"

const decode = jwt.decode(token)

console.log(decode)
