const { createServer } = require("node:http")
const hostname = "127.0.0.1"
const port = 3000
const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello World")
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// const { createServer } = require("node:http")
// const server = createServer((req, res) => {
//   res.end("Hello World!")
// })
// server.listen(3000, () => console.log("Server is running..."))
