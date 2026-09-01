// Exercise 3: Callback Functions
// Recap: a callback is a function passed as an argument into another function,
// to be executed later (by that other function).

// TODO 1: Write a function `processUser(name, callback)` that:
//   - builds a greeting string "Processing user: <name>"
//   - calls `callback` with that string as its argument
function processUser(name, callback) {
  const message = `Processing user: ${name}`;
  callback(message); 
}

processUser("Alex", function (message) {
  console.log(message); // expect "Processing user: Alex"
});

// TODO 2: Call processUser again, but this time pass an ARROW FUNCTION as the callback
// that logs the message in uppercase.

processUser("Alex", (message) => console.log(message.toUpperCase()));

// TODO 3: Write a function `repeatAction(times, callback)` that calls `callback`
// `times` times, passing the current iteration number (starting at 1) each time.
function repeatAction(times, callback) {
  for(let n= 1;n<=times;n++){
    callback(n);
  }
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
function calculate(a,b,operationCallback){
  const plus = a+b;
  operationCallback(plus);
  const minus = a-b;
  operationCallback(minus);
  const multiply = a*b;
  operationCallback(multiply);
  const division = a/b;
  operationCallback(division);
}

calculate(4,5,(answer) => console.log("Answer: " + answer + "\n") );