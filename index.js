console.log("Hello, world!");
console.log("Hello, world123");

var GRAVITY = 9.81;

var GRAVITY = 10;
console.log(GRAVITY);

var a = 10;
var b = 20;
var rent = a * b * b;

console.log(rent);
// easily rewrite which could lead to bug later on
var rent = 299;
console.log(rent);

console.log("========");

// let and const
let aa = 10;
let bb = 20;
let newRent = aa * bb * bb;

console.log(newRent);

// `let` => you can re assign the variable, but you cannot reinitialize it. i.e. you can overwrite the value
// `const` => you CANNOT re assign or re initialize the variable. i.e. you CANNOT overwrite the value, hence a CONSTANT

let newRent1 = 299;
console.log(newRent);
console.log(newRent1);

const PI = 22 / 7;
const BASE_DISCOUNT = 10;
console.log(PI);

// PI = 3;
console.log(PI);
