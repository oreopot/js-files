// objects
// curly braces on the outside
// key:value pair
// elements accessed using key name

let circle = {}; // empty object

console.log(circle);

circle.radius = 10;
console.log(`The radius of the circle is: ${circle.radius}`);

// two ways to read it:
// dot notation
// square brackets notation
// console.log(`The radius of the circle is: ${circle.radius}`);
// console.log(
//   `The radius of the circle using square brackets: ${circle["radius"]}`
// );

let tr = { base: 10, "area of triangle": 45 };

console.warn(`using dot: ${tr.base}`);
console.log(`using square brackets: ${tr["area of triangle"]}`);

// array
// square brackets on the outside
// elements accessed using index
