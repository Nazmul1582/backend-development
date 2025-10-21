let operationSuccess = true
let promise = new Promise((resolve, reject) => {
  // Perform async operation
  if (operationSuccess) {
    resolve("Task Successful")
  } else {
    reject("Task failed.")
  }
})
promise.then((res) => console.log(res)).catch((err) => console.log(err))

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("👤 User fetched"), 1000)
  })
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("📝 Posts fetched"), 1000)
  })
}

function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("💬 Comments fetched"), 1000)
  })
}

getUser()
  .then((result) => {
    console.log(result)
    return getPosts()
  })
  .then((result) => {
    console.log(result)
    return getComments()
  })
  .then((result) => {
    console.log(result)
    console.log("✅ All data fetched!")
  })
  .catch((err) => console.error("Error:", err))
