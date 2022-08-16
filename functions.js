// hoisting
let num1 = 20;
let num2 = 20;

let result = num1 + num2;

// function name(){
// logic in here...
// }

function add() {
  console.log(num1 + num2);
}

// add();
// add();
// add();

let username = "oreopot";

// Function Expression
let alternateGreetingBot = function (uname, height) {
  let greetings = `welcome ${uname} by alternate bot. ${height}cm tall.`;

  console.warn(greetings);
};

alternateGreetingBot("orepot", 180);

// Function declaration
function greetingBot(uname, height = 150) {
  let greetings = `welcome ${uname}! I see you are ${height}cm tall.`;
  console.log(greetings);
}

greetingBot("oreopot", 180);

// Arrow Function
let greetingBotArrow = (uname, height) => {
  console.error("Hello from Arrow function");
  let greetings = `welcome ${uname}! I see you are ${height}cm tall.`;

  console.error(greetings);
};

greetingBotArrow("oreopot");

let calculateDiscountedPrice = (price, discount) => {
  return (price * (100 - discount)) / 100;
  //    result;
};

// let cdp = (price, discount) => (price * (100 - discount)) / 100;

let t = calculateDiscountedPrice(100, 10);
console.log(t);
