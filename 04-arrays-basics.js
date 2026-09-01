// Exercise 4: Arrays — Declaration, Access, push/pop/shift/unshift

// TODO 1: Declare an array `colors` with at least 4 color strings.
const color = ["Blue", "Green", "Black", "Yellow"]; 

// TODO 2: Log the FIRST and LAST element of `colors` using index access.
// (hint: for the last one, use colors[colors.length - 1])

console.log(color[0]);
console.log(color[3]);
// TODO 3: Use `push()` to add a new color to the END of the array. Log the array after.
color.push("Pink");
console.log(color[4]);

// TODO 4: Use `pop()` to remove the LAST color. Log the removed value AND the array after.
console.log(color.pop());
console.log(color);
// TODO 5: Use `unshift()` to add a new color to the BEGINNING. Log the array after.

color.unshift("Red");
// TODO 6: Use `shift() or splice(0,1)` to remove the FIRST color. Log the removed value AND the array after.
console.log(color.shift());

// TODO 7: Log the final length of the array using `.length`.
console.log(color.length);

console.log("Final colors array:", color);
