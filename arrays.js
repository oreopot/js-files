// array is used to store data
// define it using `[]`
// indexes start with zero

let fruit1 = "Watermelon";
let fruit2 = "Grapes";
let fruit3 = "Strawberry";
//elements   // 1,           2,        3
let fruits = ["watermelon", "grape", "Strawberry"];
//index      // 0,           1,        2

let totalFruits = fruits.length;
console.log(fruits);
// console.log(totalFruits);

console.log(fruits[1]);

fruits[1] = "Apple";
console.log("=============");
console.log(fruits);
console.log(fruits[1]);

let cars = [];

cars.push("Honda");
cars.push("Mazda");

console.log(cars);

cars.unshift("Honda1");
cars.push("Honda2");
console.log(cars);
