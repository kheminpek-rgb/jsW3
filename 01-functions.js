// Exercise 1: Functions — Declaration vs Expression, Default Parameters

// TODO 1: Write a FUNCTION DECLARATION called `add` that takes two numbers and
// returns their sum.


console.log(add(2, 3)); // expect 5

// TODO 2: Write a FUNCTION EXPRESSION called `multiply` that takes two numbers and
// returns their product. (const multiply = function(a, b) { ... })


console.log(multiply(4, 5)); // expect 20

// TODO 3: Proof that declarations are "hoisted" — call `sayHi` BEFORE you define it
// below, then look at how it still works.
console.log(sayHi("Trainer"));

function sayHi(name) {
  return `Hi, ${name}!`;
}

// TODO 4: Default parameters. Write a function `greet(name = "Guest")` that returns
// "Hello, <name>!" — call it once with an argument and once with none.


console.log(greet());        // expect "Hello, Guest!"
console.log(greet("Sam"));   // expect "Hello, Sam!"

// TODO 5 (challenge): Write a function `power(base, exponent = 2)` that returns
// base raised to exponent (default: square the number). Test with power(3) and power(2, 3).
