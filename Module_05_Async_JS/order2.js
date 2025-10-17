// The solution of Async task serialization is using CALLBACK
// function orderManage(callback) {
//   setTimeout(() => {
//     console.log("Order placed!")
//     callback()
//   }, 100)
// }

// orderManage(function () {
//   console.log("Order Confirmed!")
// })

function orderManagement(callback) {
  setTimeout(() => {
    console.log("Order placed!")
    callback()
  }, 1000)
}
function orderConfirmed(callback) {
  setTimeout(() => {
    console.log("Order Confirmed!")
    callback()
  }, 1000)
}
function orderDelivered(callback) {
  setTimeout(() => {
    console.log("Order Delivered!")
    callback()
  }, 1000)
}

orderManagement(() => {
  orderConfirmed(() => {
    orderDelivered(() => {
      console.log("Order management done successfully!")
    })
  })
})
