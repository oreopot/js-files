// function name() {
// your code would go here
// }
// function definition

// Function declaration
function greetMe(name, height) {
  return `Good morning ${name}, you are ${height}cm tall!`;
}
// function invoked
console.groupCollapsed("function-declaration");
console.log(greetMe("Bhaumik", 180));
console.log(greetMe("Tuan", 185));
console.log(greetMe("Leslie", 180));
console.groupEnd();

// Function Expression
// let greetMeNew = function() {
// your code for the function
// }

let greetMeNew = function (firstName, height) {
  console.log(`Good morning ${firstName}, you are ${height}cm tall!`);
};

console.groupCollapsed("function-expression");
greetMeNew("Bhaumik", 180);
greetMeNew("Tuan", 185);
greetMeNew("Leslie", 180);
console.groupEnd();

// arrow function
// let greetMeArrow = () => {
// your code goes here
// }
// function greetMe(name, height) {
//   console.log(`Good morning ${name}, you are ${height}cm tall!`);
// }

let greetMeArrow = (name, height) => {
  console.log(`Good morning ${name}, you are ${height}cm tall!`);
};

// let square = (number) => number * number;

console.group("function-arrow");
greetMeArrow("Bhaumik", 180);
greetMeArrow("Tuan", 185);
greetMeArrow("Leslie", 180);
console.groupEnd();
