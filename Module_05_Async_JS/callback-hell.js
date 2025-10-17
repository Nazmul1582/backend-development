function task_one() {
  setTimeout(function () {
    console.log("Task one completed.")
  }, 1500)
}
function task_two() {
  setTimeout(function () {
    console.log("Task two completed.")
  }, 1000)
}
function task_three() {
  setTimeout(() => {
    console.log("Task three completed.")
  }, 500)
}

task_one()
task_two()
task_three()
console.log("All Task completed.")

// Unexpected output:
// All Task completed.
// Task three completed.
// Task two completed.
// Task one completed.
