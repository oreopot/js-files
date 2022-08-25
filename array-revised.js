// array and objects are data structures in javascript.
// data structures are used to hold the values.
/**
 *
 * arrays:
 * [] => square brackets
 * arrays have indexes, starting from 0
 * you can access/modify array elements using index ONLY
 */

let things = [
  "hoonda",
  "Ferrari",
  ["watermelon", "guava", ["grape", "Strawberry"]],
  "Tesla",
];

things[0] = "Honda";
things[2][2][1];
console.log(things[2][2][1]);

/**
 *
 * objects:
 * {} => curly brackets/braces
 * objects have `key:value` pair
 * where key and value are seperated with `:`
 *
 * you can access/modify objects using key ONLY
 */

/* prettier-ignore */
let otherThings = { 'cars': "fferrari", 'fruit': "watermelon" };

otherThings.cars = "Ferrari";
console.log(otherThings);

let users = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 1,
      name: "cerulean",
      year: 2000,
      color: "#98B2D1",
      pantone_value: "15-4020",
    },
    {
      id: 2,
      name: "fuchsia rose",
      year: 2001,
      color: "#C74375",
      pantone_value: "17-2031",
    },
    {
      id: 3,
      name: "true red",
      year: 2002,
      color: "#BF1932",
      pantone_value: "19-1664",
    },
    {
      id: 4,
      name: "aqua sky",
      year: 2003,
      color: "#7BC4C4",
      pantone_value: "14-4811",
    },
    {
      id: 5,
      name: "tigerlily",
      year: 2004,
      color: "#E2583E",
      pantone_value: "17-1456",
    },
    {
      id: 6,
      name: "blue turquoise",
      year: 2005,
      color: "#53B0AE",
      pantone_value: "15-5217",
    },
  ],
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};
console.log(users);
console.log(users["data"]);
console.log(users["data"][3]["name"]);
console.log(users["data"][5]["name"]);
