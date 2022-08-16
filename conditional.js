let age = 18;

let is_allowed_to_buy_beer;

/*
age < 13 => toddler
age between 13 and 20 => teenager
age over 20 and less than 30 => you are in your tweties
*/

// (condition) ? <do this if true> : <do this if false>
// age >= 18  ? console.log("you are allowed to buy beer")  : console.log("sorry :(");
is_allowed_to_buy_beer = age >= 18 ? 199 : 0;

// a username can be between 3 and 8 characters long

let username = "oreopot123";
let username_length = username.length;

console.log("username length: " + username_length);

if (username_length < 3 || username_length > 8) {
  console.error("invalid username length");
} else {
  console.warn("all good :) ");
}

// if (age >= 18) {
//   is_allowed_to_buy_beer = true;
// } else {
//   is_allowed_to_buy_beer = false;
// }

// if (age >= 18) {
//     is_allowed_to_buy_beer = true;
//     console.log("I am good");
//   } else {
//     is_allowed_to_buy_beer = false;
//     console.log("hard luck");
//   }

if (is_allowed_to_buy_beer) {
  console.log("you are allowed to buy beer");
} else {
  console.log("sorry mate! :( ");
}

// if (age < 13) {
//   console.log("toddler");
// } else if (age >= 13 && age <= 20) {
//   console.log("teenager!");
// } else if (age > 20 && age < 30) {
//   console.log("you are in your twenties");
// }
