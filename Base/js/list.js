window.onload = function (e) {
  //   addRowJs();
  //   deleteRowJs();
  //   addRowJq();
  //   addCollumnJquery();
  getListUsers();
};

function gotoDetail(id) {
  console.log(window.location.href, id);
  // ?id=1 -> params url
  window.location.href = "./detail.html?id=" + id; // redirect
}

function deleteRowJs(elm) {
  let elmRow = elm.parentElement.parentElement;
  console.log(elmRow);
  elmRow.remove();
  // document.getElementById("table_users").deleteRow(index);
}

function deleteRowAPI(elm, id) {
  console.log(elm);
  // call API delete user
  // - xoa thanh cong
  // + xoa row o trong table
  // + call API listUser
  // fetch(
  //   "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/"+id,
  //   {
  //     method: "DELETE",
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     deleteRowJs(elm)
  //     getListUsers();
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
}

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

function gotoDetailEx(id) {
  console.log("gotoDetailEx", id);
  window.location.href = `./detail.html?id=${id}`;
}

function formatRow(user) {
  return `
    <th scope="row" onclick="postUser()">${user?.id}</th>
    <td>${user?.name}</td>
    <td class="text-break">${user?.avatar}</td>
    <td>${user?.name.split(" ")[0]}</td>
    <td>
        <button class="btn btn-success" onclick="gotoDetailEx(${
          user?.id
        })">Detail</button>
        <button class="btn btn-danger" onclick="deleteUser(${
          user?.id
        })">Delete</button>
    </td>
`;
}

function deleteUser(id) {
  deleteUserAPI(id);
}

function deleteUserAPI(id) {
  console.log("deleteUserAPI", id);
  fetch("https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      resetTbody()
      getListUsers();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function resetTbody() {
  var tableRef = document
    .getElementById("table_users")
    .getElementsByTagName("tbody")[0];
  tableRef.innerHTML = "";
}
function addRowJs(user) {
  var tableRef = document
    .getElementById("table_users")
    .getElementsByTagName("tbody")[0];

  var newRow = tableRef.insertRow(tableRef.rows.length);
  newRow.innerHTML = formatRow(user);
}

function addRowJq() {
  $("#table_users").find("tbody").append(`<tr>${myHtmlContent}</tr>`);
}

function addCollumnJquery() {
  $("tr").append("<td>New column</td>").attr("class", "last__column");
}

function getListUsers() {
  fetch(
    "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users?page=1&limit=10",
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
  fetch("https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users", {
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
