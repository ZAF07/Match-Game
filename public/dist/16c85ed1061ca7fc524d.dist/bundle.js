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

/***/ "./public/src/main.js":
/*!****************************!*\
  !*** ./public/src/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '.resources/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n // Setting up the mouse ray\n\nvar pickPosition = {\n  x: 0,\n  y: 0\n};\nclearPickPosition();\n\nfunction getCanvasRelativePosition(event) {\n  var rect = canvas.getBoundingClientRect();\n  return {\n    x: (event.clientX - rect.left) * canvas.width / rect.width,\n    y: (event.clientY - rect.top) * canvas.height / rect.height\n  };\n}\n\nfunction setPickPosition(event) {\n  var pos = getCanvasRelativePosition(event);\n  pickPosition.x = pos.x / canvas.width * 2 - 1;\n  pickPosition.y = pos.y / canvas.height * -2 + 1; // note we flip Y\n}\n\nfunction clearPickPosition() {\n  // unlike the mouse which always has a position\n  // if the user stops touching the screen we want\n  // to stop picking. For now we just pick a value\n  // unlikely to pick something\n  pickPosition.x = -100000;\n  pickPosition.y = -100000;\n}\n\nwindow.addEventListener('mousemove', setPickPosition);\nwindow.addEventListener('mouseout', clearPickPosition);\nwindow.addEventListener('mouseleave', clearPickPosition);\nvar pickHelper = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\nvar start = function start() {\n  pickHelper.pick(pickPosition, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './three.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n  requestAnimationFrame(start);\n};\n\nstart();\n\n//# sourceURL=webpack://matching-game/./public/src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/src/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;