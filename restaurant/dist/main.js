/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadMenu */ \"./src/loadMenu.js\");\n/* harmony import */ var _loadInitPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadInitPage */ \"./src/loadInitPage.js\");\n/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadHome */ \"./src/loadHome.js\");\n\n\n\n\ninit();\n\nfunction addNavEvents() {\n  const homebtn = document.getElementById(\"home\");\n  const menubtn = document.getElementById(\"menu\");\n\n  homebtn.addEventListener(\"click\", _loadHome__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  menubtn.addEventListener(\"click\", _loadMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\nfunction init() {\n  (0,_loadInitPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_loadHome__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  addNavEvents();\n}\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout() {\n  //about section\n  const about = document.createElement(\"div\");\n\n  //title\n  const title = document.createElement(\"h2\");\n  title.textContent = \"ABOUT\";\n\n  about.appendChild(title);\n\n  //about para\n  const para = document.createElement(\"p\");\n  para.innerHTML = `This is the best restaurant in the world (if you're a cat) `;\n\n  about.appendChild(para);\n  return about;\n}\n\nfunction setActBtn(id) {\n  const activeBtn = document.querySelector(\".tab.active\");\n  if (activeBtn) {\n    activeBtn.classList.remove(\"active\");\n  }\n  const homeBtn = document.getElementById(id);\n  homeBtn.classList.add(\"active\");\n}\n\nfunction loadHome() {\n  const content = document.getElementById(\"tab-content\");\n  content.classList.add(\"flex\");\n\n  content.innerHTML = \"\";\n\n  const aboutSec = createAbout();\n  setActBtn(\"home\");\n\n  content.appendChild(aboutSec);\n}\nconsole.log(\"does this work\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://restaurant/./src/loadHome.js?");

/***/ }),

/***/ "./src/loadInitPage.js":
/*!*****************************!*\
  !*** ./src/loadInitPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(id, text) {\n  const header = document.createElement(\"header\");\n  header.setAttribute(\"id\", id);\n  const h1 = document.createElement(\"h1\");\n  h1.innerHTML = text;\n  header.appendChild(h1);\n  return header;\n}\n\nfunction createBtn(id, text) {\n  const btn = document.createElement(\"button\");\n  btn.setAttribute(\"id\", id);\n  btn.innerHTML = text;\n  return btn;\n}\n\nfunction createNav(id) {\n  const navi = document.createElement(\"nav\");\n  navi.setAttribute(\"id\", id);\n\n  const homebtn = createBtn(\"home\", \"Home\");\n  const menubtn = createBtn(\"menu\", \"Menu\");\n\n  navi.appendChild(homebtn);\n  navi.appendChild(menubtn);\n\n  return navi;\n}\nfunction createMain(id) {\n  const main = document.createElement(\"main\");\n  main.setAttribute(\"id\", id);\n  return main;\n}\nfunction loadPage() {\n  console.log(\"called loadPage\");\n\n  const content = document.getElementById(\"content\");\n\n  const header = createHeader(\"header\", \"Best restaurant in the world\");\n  content.appendChild(header);\n\n  const nav = createNav(\"navi\");\n  content.appendChild(nav);\n\n  const tabContent = createMain(\"tab-content\");\n  content.appendChild(tabContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://restaurant/./src/loadInitPage.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createGallery(src, alt, text, price) {\n  //create flex container for image gallery\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n\n  //create images and set source and alt text\n  const img = document.createElement(\"img\");\n  img.setAttribute(\"src\", src);\n  img.setAttribute(\"alt\", alt);\n\n  //set a div and description for images\n  const desc = document.createElement(\"div\");\n  desc.classList.add(\"description\");\n\n  const foodName = document.createElement(\"div\");\n  foodName.innerHTML = text;\n\n  const cost = document.createElement(\"div\");\n  cost.innerHTML = price;\n\n  //append item details to description\n  desc.appendChild(foodName);\n  desc.appendChild(cost);\n\n  //append description and image to container\n  container.appendChild(img);\n  container.appendChild(desc);\n\n  return container;\n}\n\nfunction setActBtn(id) {\n  const actBtn = document.querySelector(\".tab.active\");\n  if (actBtn) {\n    actBtn.classList.remove(\"active\");\n  }\n  const menuBtn = document.getElementById(id);\n  menuBtn.classList.add(\"active\");\n}\n\nfunction loadMenu() {\n  const content = document.getElementById(\"tab-content\");\n  content.classList.add(\"flex\");\n  setActBtn(\"menu\");\n  content.textContent = \"\";\n  const items = [\n    createGallery(\n      \"../resources/fish.jpg\",\n      \"Fish. Do you need to know more?\",\n      \"Finest fish for the finest cats\",\n      \"Price: 10 meows per dish\"\n    ),\n    createGallery(\n      \"../resources/kibbles.jpg\",\n      \"Kibbles Kudasai\",\n      \"A Japanese style assortment of the finest kibbles\",\n      \"100¥ or 15 meows per dish\"\n    ),\n  ];\n\n  items.forEach((food) => {\n    content.append(food);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://restaurant/./src/loadMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;