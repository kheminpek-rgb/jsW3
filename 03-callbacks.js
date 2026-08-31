// Exercise 3: Callback Functions
// Recap: a callback is a function passed as an argument into another function,
// to be executed later (by that other function).

// TODO 1: Write a function `processUser(name, callback)` that:
//   - builds a greeting string "Processing user: <name>"
//   - calls `callback` with that string as its argument
function processUser(name, callback) {
  // your code here
}

processUser("Alex", function (message) {
  console.log(message); // expect "Processing user: Alex"
});

// TODO 2: Call processUser again, but this time pass an ARROW FUNCTION as the callback
// that logs the message in uppercase.


// TODO 3: Write a function `repeatAction(times, callback)` that calls `callback`
// `times` times, passing the current iteration number (starting at 1) each time.
function repeatAction(times, callback) {
  // your code here
}

repeatAction(3, function (i) {
  console.log(`Action #${i}`);
});
// expect:
// Action #1
// Action #2
// Action #3

// TODO 4 (challenge): Write `calculate(a, b, operationCallback)` that returns
// operationCallback(a, b). Call it three times passing different arrow functions
// for add, subtract, and multiply.
