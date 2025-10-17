// Issue of async task;

// Step One
let inventory = {}
setTimeout(() => {
  console.log("5 pices mango purchased successfully!")
  inventory = { mango: 5 }
})
console.log(inventory)

// Output:
// {}
// 5 pices mango purchased successfully!

// but it should:
// {mango: 5}
// 5 pices mango purchased successfully!
