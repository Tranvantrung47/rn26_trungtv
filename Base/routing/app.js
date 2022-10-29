var App = {};
const BASE_URL = "/2-Examples/Base/routing";

var addRoutes = function () {
  $NB.addRoute(
    "/books/:id",
    function (params) {
      console.log("Route is ", params.Title, params.id);
      getContentAPI(params);
    },
    "books"
  );

  $NB.addRoute(
    "/:category/:id",
    function (params) {
      console.log("Route is ", params.Title, params.category, params.id);
    },
    "category"
  );

  $NB.addRoute(
    "/:category/:id/:action",
    function (params) {
      console.log(
        "Route is ",
        params.Title,
        params.category,
        params.id,
        params.action
      );
    },
    "category action"
  );

  $NB.addRoute(
    ["/", "/:pagename"],
    function (params) {
      console.log("Route is ", params.Title, params.pagename);
      getContentAPI(params);
    },
    "page"
  );
  $NB.addRoute(
    ["/", "*"],
    function (params) {
      console.log("Not found", params);
    },
    "page"
  );
};
function getContentAPI(params) {
  fetch(`${BASE_URL}/${params.pagename}.html`)
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Something went wrong");
    })
    .then((data) => {
      console.log(data);
      document.getElementById("root").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

App.init = function () {
  addRoutes();
  $NB.loadController(location.pathname);
};

App.navigateTo = function (pageUrl) {
  $NB.navigateTo(pageUrl);
};
