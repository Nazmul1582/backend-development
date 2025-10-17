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
