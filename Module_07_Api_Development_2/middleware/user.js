const saveUserAgent = require("../utils/logger")

const isValidUser = (req, res, next) => {
  if (req.query.token === "123") {
    next()
  } else {
    res.status(401).json({ message: "Unauthorized: Invalid token" })
  }
}

const checkUserAgent = (req, res, next) => {
  const userAgent = req.headers["user-agent"]
  const blockedPatterns = [
    /curl/i,
    /wget/i,
    /python-requests/i,
    /Go-http-client/i,
    /Java/i,
    /sqlmap/i,
    /nmap/i,
    /Nikto/i,
    /HeadlessChrome/i,
    /PhantomJS/i,
  ]
  const isBlocked = blockedPatterns.some((pattern) => pattern.test(userAgent))

  if (!userAgent || isBlocked) {
    // blocked json
    return res.status(403).json({ message: "Forbidden: Suspicious User-Agent" })
  } else {
    // Save to JSON file
    saveUserAgent(userAgent)
    next()
  }
}

module.exports = {
  isValidUser,
  checkUserAgent,
}
