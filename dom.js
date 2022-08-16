/**
 * DOM: Document object Model
 * key:value
 */

/**
 * To manipulate a DOM element, there are 3 steps
 *
 * 1. Target the element.
 * 2. to save the reference in a variable for future use
 * 3. do the modifications
 *
 *
 * document.getElementById() => target element based on its ID
 * document.getElementsByClassName() => target element based on class
 * document.getElementsByTagName() => target element based on tags
 * document.querySelector() => return the first occurence
 * document.querySelectorAll() => returns all occurence
 *
 * events:
 * onclick
 * onkeyup
 * onkeydown
 */

let paragraphElement = document.getElementById("para1");

console.log(paragraphElement);

let result = document.getElementsByClassName("para");
console.log(result);

// for (i of result) {
//   i.innerText = Math.round(Math.random() * 100, 4);
// }

let allPara = document.getElementsByTagName("p");
console.log(allPara);

let btn = document.getElementById("changeColor");
let tweetBox = document.getElementById("tweet");
let tweetLength = document.querySelector(".tweet-length");

// when to fire
// what to do

tweetBox.addEventListener("keyup", function (event) {
  console.log(event);
  // console.log(`length of the input : ${tweetBox.value.length}`);
  tweetLength.innerText = tweetBox.value.length;
});

let postTweetBtn = document.querySelector("#changeColor");

function stopFormSubmit(event) {
  event.preventDefault();
  console.log("post button clicked!");
}

postTweetBtn.addEventListener("click", stopFormSubmit);
