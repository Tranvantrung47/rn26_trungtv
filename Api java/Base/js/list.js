window.onload = function (e) {
  //   addRowJs();
  //   deleteRowJs();
  //   addRowJq();
  //   addCollumnJquery();
  // getListUsers();
};

function gotoDetail(id) {
  console.log(id);
}

function deleteRowJs(elm) {
  let elmRow = elm.parentElement.parentElement;
  console.log(elmRow);
  elmRow.remove();
  // document.getElementById
const myHtmlContent = `
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
    <td>
        <button class="btn btn-success">Detail</button>
        <button class="btn btn-danger">Delete</button>
    </td>
`;

function formatRow(user) {
  return `
    <th scope="row" onclick="postUser()">${user?.id}</th>
    <td>${user?.name}</td>
    <td class="text-break">${user?.avatar}</td>
    <td>${user?.name.split(" ")[0]}</td>
    <td>
        <button class="btn btn-success" onclick="gotoDetail(${
          user?.id
        })">Detail</button>
        <button class="btn btn-danger" onclick="deleteRowJs(this)">Delete</button>
    </td>
`;
}
function addRowJs(user) {
  var tableRef = document
    .getElementById("table_users")
    .getElementsByTagName("tbody")[0];

  var newRow = tableRef.insertRow(tableRef.rows.length);
  newRow.innerHTML = formatRow(user);
}

function getListUsers() {
  fetch(
    "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users?page=1&limit=10",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      data?.map((user) => addRowJs(user));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function postUser() {
  const data = {
    name: "Manhph",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
  };
  fetch("https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.error("Error:", error);
    });
}
function resrtTbody() {
  var tableRef = document
  .getElementById("table_users")
  .getElementsByTagName("tbody") [0];
  tableRef.innerHTML=""
}