/**
 *
 * Promise
 *  - default state is "pending"
 * - it can either be resolved
 *   OR
 *   rejected
 *
 *
 *  * if you want to request data from API
 *  * we use `fetch` API in JS
 *
 */

// let endpoint = "https://reqres.in/api/users";
let endpoint = "https://dog.ceo/api/breeds/image/random/5";
let token = Math.random() * 100 * Math.random() * 100;

let requestOptions = {
  method: "get",
  headers: {
    // Authorization: `Bearer: ${token}`,
    // "Access-Control-Allow-Origin": "*",
  },
};

let getData = async () => {
  try {
    let response = await fetch(endpoint, requestOptions);
    let result = await response.json();
    console.log(result);
  } catch (err) {
    console.table([err.name, err.message]);
  }
};

getData();

let userBoxHtml = (
  first_name,
  last_name,
  profilePicture,
  emailAddress,
  userId
) => {
  return `
    <div class="user-box box">
        <div>
            <p class="para"><img src=${profilePicture}></p>
        </div>
        <div>
            <p class="para">Name: ${first_name} ${last_name}</p>
            <p class="para">Email: ${emailAddress}</p>
            <p class="para">ID: ${userId}</p>
        </div>
    </div>
    `;
};
