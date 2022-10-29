window.onload = function () {
  getUser();
};
function getUser() {
  let id = getIdUrl();
  fetch("https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/person/" +id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(id);
}

function getIdUrl() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  return id;
}

function renderInfo(user) {
  const contentHTML = `
    <p style="font-size:25px">Số thứ tự : ${user?.id}</p>
    <p style="font-size:25px">Tên: ${user?.name}</p>
    <p style="font-size:25px">Tuổi: ${user?.age}</p>
    <p style="font-size:25px">Địa chỉ: ${user?.address}</p>
    <a href="./form.html?id=${user?.id}"><input type="submit" value="Update" style="background-color:orange"/></a>
    
  `;
  const elm = document.getElementById("info");
  elm.innerHTML = contentHTML;
}