let number1 = 10
let number2 = 20
console.log("number1: ", number1)
console.log("number2: ", number2)
for (let i = 1; i <= 50; i++) {
  console.log(i)
}
console.log("number1 + number2 = ", number1 + number2)

// At first the number1: 10 is printed
// then number2: 20 is printed
// then printed 1 to 50 through for loop
// last, printed the addition: number1 + number2 = 30

// JavaScript is synchronous and single-threaded by default, meaning it executes code line by line in a single call stack. Each operation must complete before the next one begins.

// However, JavaScript has mechanisms to handle asynchronous operations, allowing it to perform tasks that might take time (like network requests or file I/O) without blocking the main thread. This is achieved through features like: Callbacks, Promises, Async/Await.

// Therefore, while JavaScript's core execution model is synchronous, it is designed to effectively manage and handle asynchronous tasks, making it a versatile language for both synchronous and asynchronous programming.
