// Exercise 6: Objects — create, access, add/delete properties, dot vs bracket notation

// TODO 1: Create an object `car` with properties: brand, model, year, and a nested
// object `owner` with a `name` property.
let car = {
    brand: "Toyota",
    model: "Yamaha",
    year: 2014,
    owner: {name: "Oushii"} 
};

// TODO 2: Log `car.brand` using DOT notation, and `car["model"]` using BRACKET notation.
console.log(car.brand);
console.log(car["model"]);


// TODO 3: Add a new property `color` to `car` by assignment (car.color = "..."), then
// log the whole object.

car.color = "Full black";
console.log(car);
// TODO 4: Delete the `year` property using the `delete` keyword. Log the object again
// to confirm it's gone.

delete car.year;
console.log(car);
// TODO 5: Add a property with a multi-word key, e.g. "top speed" (a key with a space).
// Try to access it with dot notation first (car.top speed) — notice it's a syntax
// error — then access it correctly with bracket notation: car["top speed"].
// (Comment out the broken dot-notation line before running!)

car["top speed"] = 240;
console.log(car["top speed"]);

// TODO 6: Check if `car` has a key "color" using the `in` operator.
// console.log("color" in car);
console.log("color" in car);


// TODO 7: Loop over all of `car`'s own keys and values using for...in, logging
// "key: value" for each.

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}


console.log(car);
console.log(car);
