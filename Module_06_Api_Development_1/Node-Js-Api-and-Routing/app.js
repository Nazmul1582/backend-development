const express = require("express")
const app = express()

const userRouter = require("./User")
app.use(userRouter)

const paymentRouter = require("./Payment")
app.use(paymentRouter)

app.listen(3000, () => {
  console.log("Server is running...")
})
