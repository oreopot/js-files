// destructing assignment in objects
const dog = {
  name: "Buzz",
  breed: "Great Pyrenees",
  furColor: "black and white",
  activityLevel: "sloth-like",
  favoriteFood: "hot dogs",
};

// let name = dog.name
// let dogName = dog["name"];
// let breed = dog["breed"];
// let favoriteFood = dog["favoriteFood"];

// let { name: dogName, breed, favoriteFood } = dog;

// console.log(dogName);
// console.log(breed);
// console.log(favoriteFood);

let getData = () => {
  fetch("https://reqres.in/api/users?page=2")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (res) {
      let { page, data } = res;

      console.log(page);
      console.log(data);
      for (user of data) {
        let { id, first_name } = user;
        console.table(id, first_name, user);
        console.table("=================");
      }
    });
};
// getData()

// destructing assignment in arrays
const dogs = [
  "Great Pyrenees",
  "Labrador",
  "German Shephard",
  "Pug",
  "Bull Mastiff",
];

let [, small, giant] = dogs;

console.log(small);
console.log(giant);
