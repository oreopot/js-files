/*
! arrays
`[]` to define it
index start at zero
we have index to fetch the value from array


! objects

`{}` to define it
key:value pair in objects
we have keys to fetch the value from objects

two ways to fetch value:

person = {age: 24, name: 'BM'}
- bracket notation
person['age']

- dot notation
person.age

*/

// let fruits = ["apple", "banana"];
// console.log(fruits);
// console.log(fruits[1]);
let emptyArray = [];
let emptyObject = {};

// how many quantity of each fruits
// I have to buy in my next grocery run
// {key: value}

let fruitsToBuy = { apple: 5, watermelon: 2 };

// console.log(fruitsToBuy);
// console.log(fruitsToBuy["apple"]);

/*
    person: object
        favFruits: array
        favCars: array
*/

let person = { age: 24, favFruits: ["watermelon"], favCars: ["honda"] };

person["fav fruits"];
person["age"] = 25;

console.log(person);

console.log(person);
console.log("===========");

console.log(person["favFruits"]);
person.favFruits = ["Apple", "Banana"];
person["favFruits"] = ["Apple", "Banana"];

person.favFruits.push("Watermelon");
