import loadMenu from "loadMenu.js";
import loadPage from "loadInitPage.js";
import loadHome from "loadHome.js";

init();

function addNavEvents() {
  const homebtn = document.getElementById("home");
  const menubtn = document.getElementById("menu");

  homebtn.addEventListener("click", loadHome);
  menubtn.addEventListener("click", loadMenu);
}

function init() {
  loadPage();
  loadHome();
  addNavEvents();
}

pageDiv();
