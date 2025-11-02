const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const userRoute = require("./routes/userRoute")
const { checkUserAgent, isValidUser } = require("./middleware/user")

app.use(express.json())
app.use(checkUserAgent)
app.use("/api/users", isValidUser, userRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
