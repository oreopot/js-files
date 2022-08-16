/*
we use loops when we want to do the 
same operation "multiple times"
*/

// for-loop

let fruits = [
  "apple",
  "banana",
  "grapes",
  "watermelon",
  "guava",
  "orange",
  "mango",
  "blackberries",
  "blueberries",
];

console.log(`Total elements in fruits: ${fruits.length}`);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for-loop
console.groupCollapsed("for");
console.warn("printing using for loop");
for (let i = 0; i < fruits.length; i++) {
  //   fruits[i] = fruits[i].toUpperCase();
  //   let result = `${fruits[i]} is stored at index: ${i}`;
  // console.log(result);
  console.log(`${fruits[i]}`);
}
console.groupEnd();

// for-of loop
console.groupCollapsed("for-of");
console.warn("printing using for-of loop");
for (let fruit of fruits) {
  console.log(fruit);
}
console.groupEnd();

console.groupCollapsed("for-in");
console.warn("printing using for-in loop");
const object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  console.log(`${key}: ${object[key]}`);
}
console.groupEnd();

console.group("example");
let person = {
  age: 24,
  favFruits: ["watermelon", "apple", "grapes"],
  favCars: ["honda", "ferrari"],
};

for (let i in person) {
  //   console.log(`${i}: ${person[i]} ${typeof person[i]}`);
  // console.log(`${i}: ${person[i]}`);
}
/**
 * age: 24
 * favFruits: [array]
 *  - watermelon
 *  - apple
 *  - grapes
 * favCars: [array]
 *  - honda
 *  - ferrari
 */
console.groupEnd();
