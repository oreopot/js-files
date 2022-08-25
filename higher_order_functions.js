// map/filter/reduce

/**
 * MAP
 * takes an initial value and transform it.
 */

let numbers = [10, 20, 25, 1, 3, 5];

// for (let i = 0; i < numbers.length; i++) {
//   let square = numbers[i] * numbers[i];
//   squareNumbers.push(square);
// }

// for (number of numbers) {
//   square = number * number;
//   squareNumbers.push(square);
// }

// let squareNumbers = numbers.map((elem) => elem * elem);

let squareNumbers = numbers.map((elem, ix) => {
  //   if (ix < 3) {
  //     return 0;
  //   }
  return Math.pow(elem, 2);
});

console.log(numbers);
console.log(squareNumbers);

/**
 * Filter
 * you use filter to remove unwanted values
 */
// use filter to keep even values

let evenValues = numbers.filter((element) => {
  //   logic to filter from the array or object

  if (element % 2 == 0) {
    return true;
  }
  return false;

  //   return element % 2 == 0;
});
console.log(evenValues);

/**
 * Reduce
 * we use it to deduce a single value from the array/objects
 */
let sumOfNumbers = numbers.reduce((previousValue, currentValue) => {
  console.log(`Prev value: ${previousValue} =>  Curr value: ${currentValue}`);
  return previousValue + currentValue;
});

console.log(sumOfNumbers);
