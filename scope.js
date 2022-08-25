// hoisting

function add(n1, n2) {
  console.log(this);
  return n1 + n2;
}

add(2, 2);

let addArrow = (n1, n2) => {
  return n1 + n2;
};

let person = {
  name: "BM",
  suburb: "CBD",
  greet: function () {
    console.log(this);
    console.log(`Hey there! ${this.name} lives in ${this.suburb}!`);
  },
};

console.log(person.suburb);
person.greet();
