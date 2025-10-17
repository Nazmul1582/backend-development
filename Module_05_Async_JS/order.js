// Issues of async task and the solution using callback

// assume it's a order_placed api call
setTimeout(() => {
  console.log("Order Placed.")
}, 1000) // So, it's time can be changed

// assume it's a order_confirmed api call
setTimeout(() => {
  console.log("Order Confirmed.")
}, 800) // So, it's time can be changed

// assume it's a order_delivered api call
setTimeout(() => {
  console.log("Order Delivered.")
}, 900) // So, it's time can be changed

// Output:
// Order Placed.
// Order Confirmed.
// Order Delivered.

// If any api call takes less time, it will be show fast.
// Then output will be:
// Order Confirmed.
// Order Delivered.
// Order Placed.
// It's a big issue. So, what's the solution?
