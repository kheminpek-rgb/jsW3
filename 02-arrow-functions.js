// Exercise 2: Arrow Functions

// TODO 1: Rewrite this function expression as an arrow function called `square`.
// const square = function (n) { return n * n; };
const square = n => n*n;
console.log(square(5)); // expect 25

// TODO 2: Write a ONE-LINER arrow function `double` with NO curly braces
// (implicit return) that doubles a number.

const double = n => n*2;
console.log(double(7)); // expect 14

// TODO 3: Write an arrow function `isEven` (one-liner, implicit return) that returns
// true/false for whether a number is even.

const isEven = n => n%2===0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// TODO 4: Write an arrow function `fullName` that takes (first, last) and returns
// "first last" combined. Use curly braces + explicit return this time.

const fullName = (first,last) =>{
    const result = `${first} ${last}`;
    return result;
}
console.log(fullName("Ada", "Lovelace")); // "Ada Lovelace"

// TODO 5 (challenge, discussion): In a comment, write one sentence on when you'd
// prefer a regular function over an arrow function (hint: think about `this`, or
// naming a function for hoisting/readability).
//I'd use an arrow function when writing a small function to calculate simple math or to combine a few words together, other than that I'll use the regular function.