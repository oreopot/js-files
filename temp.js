// first class function

function addition(num1, num2) {
  return num1 + num2;
}

let additionNew = function (num1, num2) {
  return num1 + num2;
};

function LotteryCalculator(n1, n2, lotteryFunction) {
  let result = lotteryFunction(n1, n2);
  console.log(result);
  return result;
}

LotteryCalculator(20, 40, addition);
