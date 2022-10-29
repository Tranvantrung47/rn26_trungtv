window.onload = function () {
    getUser();
  };
function getUser() {
    let id = getIdUrl();
    fetch("https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" +id, {
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
      <p>Số thứ tự : ${user?.id}</p>
      <p>Tên: ${user?.name}</p>
      <p>Tuổi: ${user?.age}</p>
      <p>Ngày tạo: ${user?.Creat}</p>
      
    `;
    const elm = document.getElementById("info");
    elm.innerHTML = contentHTML;
  }