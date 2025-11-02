const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const userRoute = require("./routes/userRoute")

app.use(express.json())
app.use("/api/users", userRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
