import loadMenu from "./loadMenu";
import loadPage from "./loadInitPage";
import loadHome from "./loadHome";

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
