const isValidUser = (req, res, next) => {
  const token = req.query.token
  if (token !== "123") {
    return res.status(401).json({
      message: "Unauthorized: Invalid token!",
    })
  }
  next()
}

const checkUserAgent = (req, res, next) => {
  const userAgent = req.headers["user-agent"]
  console.log(`The agent is ${userAgent}`)
  if (!userAgent) {
    res.status(400).json({
      message: "Bad request: Missing User-Agent header",
    })
  }
  next()
}

module.exports = {
  isValidUser,
  checkUserAgent,
}
