/**
 * Promise
 *  - default state is "pending"
 * - it can either be resolved
 *   OR
 *   rejected
 *
 *
 *  * if you want to request data from API
 *  * we use `fetch` API in JS
 */

let endpoint = "https://reqres.in/api/users";

let requestOptions = { method: "get" };

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

fetch(endpoint, requestOptions)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (res) {
    console.log(res);

    // console.log(res["data"]["first_name"]);
    // console.log(res.data.first_name);
    let containerBox = document.getElementById("user-info");
    containerBox.innerHTML = "";
    for (const user of res["data"]) {
      containerBox.innerHTML =
        containerBox.innerHTML +
        userBoxHtml(
          user["first_name"],
          user["last_name"],
          user["avatar"],
          user["email"],
          user["id"]
        );
    }
  });
// console.log(result);
