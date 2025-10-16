const fs = require("fs")

fs.readFile("test.txt", "utf8", (error, data) => {
  if (error) {
    console.log("Error reading the file: ", error)
    return
  }
  console.log("File content: ", data)
})

// setTimeout(() => {
//   console.log("showing from setTimeout")
// }, 1000)

let count = 1
do {
  console.log(count)
  count++
} while (count <= 10)
console.log("Hello, World!")

// First, Hello, World! is printed.
// then printed 1 to 10 from do while loop
// then printed the text from setTimeout, though setTimeout is written first.
