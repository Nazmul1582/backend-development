// function task_one() {
//   setTimeout(function () {
//     console.log("Task one completed.")
//   }, 1500)
// }
// function task_two() {
//   setTimeout(function () {
//     console.log("Task two completed.")
//   }, 1000)
// }
// function task_three() {
//   setTimeout(() => {
//     console.log("Task three completed.")
//   }, 500)
// }

// task_one()
// task_two()
// task_three()
// console.log("All Task completed.")

// Unexpected output:
// All Task completed.
// Task three completed.
// Task two completed.
// Task one completed.

// ============== Solution
function task_one(callback) {
  setTimeout(function () {
    console.log("Task one completed.")
    callback()
  }, 1500)
}
function task_two(callback) {
  setTimeout(function () {
    console.log("Task two completed.")
    callback()
  }, 1000)
}
function task_three(callback) {
  setTimeout(() => {
    console.log("Task three completed.")
    callback()
  }, 500)
}

task_one(function () {
  task_two(function () {
    task_three(function () {
      console.log("All Task Completed.")
    })
  })
})
// Output:
// Task one completed.
// Task two completed.
// Task three completed.
// All Task Completed.
