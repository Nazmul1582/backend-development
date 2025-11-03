const express = require("express")
const app = express()
const { rateLimit } = require("express-rate-limit")
const port = process.env.PORT || 3000

const userRoute = require("./routes/userRoute")
const { checkUserAgent, isValidUser } = require("./middleware/user")

app.use(express.json())
app.use(checkUserAgent)

const rateLimiter = rateLimit({
  windowMs: 10 * 1000,
  max: 10,
  message: {
    message: "Too many requests from this ip. Please try again in 30 seconds",
  },
})

// use the users route
app.use("/api/users", rateLimiter, isValidUser, userRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
