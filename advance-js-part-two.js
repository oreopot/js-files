// rest and spread operator
// ...
// rest operator / syntax
console.groupCollapsed("rest");
function sum(a, b) {
  return a + b;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNew(...numbers) {
  // console.log([num1, num2, numbers]);

  let result = 0;

  for (i of numbers) {
    result += i;
  }
  console.log(result);
  return result;
}
sumNew(1, 2, 34, 4, 2, 2, 2, 2, 2, 2);
sumNew(1, 2, 3);
sumNew();
console.groupEnd();

console.group("spread");
//spread operator / syntax

let rn1 = [1, 22, 42, 3, 4, 5];

let rn2 = [6, Math.random() * -10, Math.random() * 1000];
console.log(rn1);
console.log(rn2);
console.log(Math.max(...rn1, ...rn2));
console.log(Math.min(...rn1, ...rn2));
