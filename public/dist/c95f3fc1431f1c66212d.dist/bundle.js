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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resources_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/style.css */ \"./public/src/resources/style.css\");\n/* harmony import */ var _three_three_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./three/three.js */ \"./public/src/three/three.js\");\n\n // Setting up the mouse ray\n\nvar pickPosition = {\n  x: 0,\n  y: 0\n};\nclearPickPosition();\n\nfunction getCanvasRelativePosition(event) {\n  var rect = canvas.getBoundingClientRect();\n  return {\n    x: (event.clientX - rect.left) * canvas.width / rect.width,\n    y: (event.clientY - rect.top) * canvas.height / rect.height\n  };\n}\n\nfunction setPickPosition(event) {\n  var pos = getCanvasRelativePosition(event);\n  pickPosition.x = pos.x / canvas.width * 2 - 1;\n  pickPosition.y = pos.y / canvas.height * -2 + 1; // note we flip Y\n}\n\nfunction clearPickPosition() {\n  // unlike the mouse which always has a position\n  // if the user stops touching the screen we want\n  // to stop picking. For now we just pick a value\n  // unlikely to pick something\n  pickPosition.x = -100000;\n  pickPosition.y = -100000;\n}\n\nwindow.addEventListener('mousemove', setPickPosition);\nwindow.addEventListener('mouseout', clearPickPosition);\nwindow.addEventListener('mouseleave', clearPickPosition);\nvar pickHelper = new _three_three_js__WEBPACK_IMPORTED_MODULE_1__.PickHelper();\n\nvar start = function start() {\n  pickHelper.pick(pickPosition, _three_three_js__WEBPACK_IMPORTED_MODULE_1__.scene, _three_three_js__WEBPACK_IMPORTED_MODULE_1__.camera, _three_three_js__WEBPACK_IMPORTED_MODULE_1__.time);\n  _three_three_js__WEBPACK_IMPORTED_MODULE_1__.renderer.render(_three_three_js__WEBPACK_IMPORTED_MODULE_1__.scene, _three_three_js__WEBPACK_IMPORTED_MODULE_1__.camera);\n  _three_three_js__WEBPACK_IMPORTED_MODULE_1__.controls.update();\n  requestAnimationFrame(start);\n};\n\nstart();\n\n//# sourceURL=webpack://matching-game/./public/src/main.js?");

/***/ }),

/***/ "./public/src/three/three.js":
/*!***********************************!*\
  !*** ./public/src/three/three.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderer\": () => (/* binding */ renderer),\n/* harmony export */   \"scene\": () => (/* binding */ scene),\n/* harmony export */   \"camera\": () => (/* binding */ camera),\n/* harmony export */   \"controls\": () => (/* binding */ controls),\n/* harmony export */   \"PickHelper\": () => (/* binding */ PickHelper),\n/* harmony export */   \"time\": () => (/* binding */ time)\n/* harmony export */ });\n/* harmony import */ var _img_moon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/moon.png */ \"./public/src/img/moon.png\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three/examples/jsm/controls/OrbitControls'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var three_interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three.interactive */ \"./node_modules/three.interactive/build/three.interactive.module.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n // Accessing the DOM canvas\n\nvar canvas = document.getElementById('canvas'); // Setting up standard scene, camera, and light\n//Renderer\n\nvar renderer = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n  canvas: canvas,\n  alpha: true\n}); // Scene\n\nvar scene = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(); // Set size to render app (use width and height of browser)\n\nrenderer.setSize(window.innerWidth, window.innerHeight); // Camera\n\nvar camera = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(60, 2, 0.1, 200);\ncamera.position.z = 30;\n\nvar PickHelper = /*#__PURE__*/function () {\n  function PickHelper() {\n    _classCallCheck(this, PickHelper);\n\n    this.raycaster = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    this.pickedObject = null;\n    this.pickedObjectSavedColor = 0;\n  }\n\n  _createClass(PickHelper, [{\n    key: \"pick\",\n    value: function pick(normalizedPosition, scene, camera, time) {\n      // restore the color if there is a picked object\n      if (this.pickedObject) {\n        this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);\n        this.pickedObject = undefined;\n      } // cast a ray through the frustum\n\n\n      this.raycaster.setFromCamera(normalizedPosition, camera); // get the list of objects the ray intersected\n\n      var intersectedObjects = this.raycaster.intersectObjects(scene.children);\n\n      if (intersectedObjects.length) {\n        // pick the first object. It's the closest one\n        this.pickedObject = intersectedObjects[0].object; // save its color\n\n        this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex(); // set its emissive color to flashing red/yellow\n\n        this.pickedObject.material.emissive.setHex(time * 8 % 2 > 1 ? 0xFFFF00 : 0xFF0000); // this.pickedObject.position.y = -10000\n\n        scene.remove(this.pickedObject);\n      }\n    }\n  }]);\n\n  return PickHelper;\n}();\n\nvar light = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0xFFF);\nlight.position.set(-1, 2, 4); // Ambient light \n\nvar ambientLight = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0xffffff, 0.6); // Controls \n\nvar controls = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three/examples/jsm/controls/OrbitControls'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(camera, renderer.domElement); // Interaction manager\n\nvar interactionManager = new three_interactive__WEBPACK_IMPORTED_MODULE_2__.InteractionManager(renderer, camera, renderer.domElement); // Generating the shapes\n\nvar boxWidth = 1;\nvar boxHeight = 1;\nvar boxDepth = 1;\nvar geometry = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(boxWidth, boxHeight, boxDepth);\n\nfunction rand(min, max) {\n  if (max === undefined) {\n    max = min;\n    min = 0;\n  }\n\n  return min + (max - min) * Math.random();\n}\n\nfunction randomColor() {\n  return \"hsl(\".concat(rand(360) | 0, \", \").concat(rand(50, 100) | 0, \"%, 50%)\");\n}\n\nvar numObjects = 100;\n\nfor (var i = 0; i < numObjects; ++i) {\n  var material = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n    color: randomColor()\n  });\n  var cube = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(geometry, material);\n  cube.addEventListener('mousedown', function (e) {\n    console.log('clicked');\n    e.target.position.y = -10000;\n  });\n  interactionManager.add(cube);\n  scene.add(cube);\n  cube.position.set(rand(-20, 20), rand(-20, 20), rand(-20, 20));\n  cube.rotation.set(rand(Math.PI), rand(Math.PI), 0);\n  cube.scale.set(rand(3, 6), rand(3, 6), rand(3, 6));\n}\n\n; // SCENE\n\nscene.add(camera);\nscene.add(light);\nscene.background = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0xFFFFFF);\nscene.add(ambientLight);\nvar time = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\n\n//# sourceURL=webpack://matching-game/./public/src/three/three.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./public/src/resources/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/src/resources/style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://matching-game/./public/src/resources/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://matching-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./public/src/img/moon.png":
/*!*********************************!*\
  !*** ./public/src/img/moon.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bb4259d6401bc1eed1f0560feb487c73.png\");\n\n//# sourceURL=webpack://matching-game/./public/src/img/moon.png?");

/***/ }),

/***/ "./public/src/resources/style.css":
/*!****************************************!*\
  !*** ./public/src/resources/style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./public/src/resources/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://matching-game/./public/src/resources/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://matching-game/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://matching-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://matching-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://matching-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/three.interactive/build/three.interactive.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/three.interactive/build/three.interactive.module.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InteractionManager\": () => (/* binding */ InteractionManager),\n/* harmony export */   \"InteractiveEvent\": () => (/* binding */ InteractiveEvent),\n/* harmony export */   \"InteractiveObject\": () => (/* binding */ InteractiveObject)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nvar InteractiveObject = function InteractiveObject(target, name) {\n  _classCallCheck(this, InteractiveObject);\n\n  this.target = target;\n  this.name = name;\n  this.intersected = false;\n  this.distance = 0;\n};\nvar InteractiveEvent = /*#__PURE__*/function () {\n  function InteractiveEvent(type) {\n    var originalEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    _classCallCheck(this, InteractiveEvent);\n\n    this.cancelBubble = false;\n    this.type = type;\n    this.originalEvent = originalEvent;\n  }\n\n  _createClass(InteractiveEvent, [{\n    key: \"stopPropagation\",\n    value: function stopPropagation() {\n      this.cancelBubble = true;\n    }\n  }]);\n\n  return InteractiveEvent;\n}();\nvar InteractionManager = function InteractionManager(renderer, camera, _domElement) {\n  var _this = this;\n\n  _classCallCheck(this, InteractionManager);\n\n  this.dispose = function () {\n    domElement.removeEventListener('click', _this.onMouseClick);\n\n    if (_this.supportsPointerEvents) {\n      domElement.ownerDocument.removeEventListener('pointermove', _this.onDocumentMouseMove);\n      domElement.removeEventListener('pointerdown', _this.onMouseDown);\n      domElement.removeEventListener('pointerup', _this.onMouseUp);\n    } else {\n      domElement.ownerDocument.removeEventListener('mousemove', _this.onDocumentMouseMove);\n      domElement.removeEventListener('mousedown', _this.onMouseDown);\n      domElement.removeEventListener('mouseup', _this.onMouseUp);\n      domElement.removeEventListener('touchstart', _this.onTouchStart);\n      domElement.removeEventListener('touchmove', _this.onTouchMove);\n      domElement.removeEventListener('touchend', _this.onTouchEnd);\n    }\n  };\n\n  this.add = function (object) {\n    var childNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    if (object) {\n      if (childNames.length > 0) {\n        childNames.forEach(function (name) {\n          var o = object.getObjectByName(name);\n\n          if (o) {\n            var interactiveObject = new InteractiveObject(o, name);\n\n            _this.interactiveObjects.push(interactiveObject);\n          }\n        });\n      } else {\n        var interactiveObject = new InteractiveObject(object, object.name);\n\n        _this.interactiveObjects.push(interactiveObject);\n      }\n    }\n  };\n\n  this.remove = function (object) {\n    var childNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    if (object) {\n      if (childNames.length > 0) {\n        var interactiveObjectsNew = [];\n\n        _this.interactiveObjects.forEach(function (o) {\n          if (!childNames.includes(o.name)) {\n            interactiveObjectsNew.push(o);\n          }\n        });\n\n        _this.interactiveObjects = interactiveObjectsNew;\n      } else {\n        var _interactiveObjectsNew = [];\n\n        _this.interactiveObjects.forEach(function (o) {\n          if (o.name !== object.name) {\n            _interactiveObjectsNew.push(o);\n          }\n        });\n\n        _this.interactiveObjects = _interactiveObjectsNew;\n      }\n    }\n  };\n\n  this.update = function () {\n    _this.raycaster.setFromCamera(_this.mouse, _this.camera); // console.log( scene.children );\n\n\n    _this.interactiveObjects.forEach(function (object) {\n      if (object.target) _this.checkIntersection(object);\n    });\n\n    _this.interactiveObjects.sort(function (a, b) {\n      return a.distance - b.distance;\n    });\n\n    var eventOut = new InteractiveEvent('mouseout');\n\n    _this.interactiveObjects.forEach(function (object) {\n      if (!object.intersected && object.wasIntersected) {\n        _this.dispatch(object, eventOut);\n      }\n    });\n\n    var eventOver = new InteractiveEvent('mouseover');\n\n    _this.interactiveObjects.forEach(function (object) {\n      if (object.intersected && !object.wasIntersected) {\n        _this.dispatch(object, eventOver);\n      }\n    });\n  };\n\n  this.checkIntersection = function (object) {\n    var intersects = _this.raycaster.intersectObjects([object.target], true);\n\n    object.wasIntersected = object.intersected;\n\n    if (intersects.length > 0) {\n      var distance = intersects[0].distance;\n      intersects.forEach(function (i) {\n        if (i.distance < distance) {\n          distance = i.distance;\n        }\n      });\n      object.intersected = true;\n      object.distance = distance;\n    } else {\n      object.intersected = false;\n    }\n  };\n\n  this.onDocumentMouseMove = function (mouseEvent) {\n    // event.preventDefault();\n    _this.mapPositionToPoint(_this.mouse, mouseEvent.clientX, mouseEvent.clientY);\n\n    var event = new InteractiveEvent('mousemove', mouseEvent);\n\n    _this.interactiveObjects.forEach(function (object) {\n      _this.dispatch(object, event);\n    });\n  };\n\n  this.onTouchMove = function (touchEvent) {\n    // event.preventDefault();\n    _this.mapPositionToPoint(_this.mouse, touchEvent.touches[0].clientX, touchEvent.touches[0].clientY);\n\n    var event = new InteractiveEvent(_this.treatTouchEventsAsMouseEvents ? 'mousemove' : 'touchmove', touchEvent);\n\n    _this.interactiveObjects.forEach(function (object) {\n      _this.dispatch(object, event);\n    });\n  };\n\n  this.onMouseClick = function (mouseEvent) {\n    _this.update();\n\n    var event = new InteractiveEvent('click', mouseEvent);\n\n    _this.interactiveObjects.forEach(function (object) {\n      if (object.intersected) {\n        _this.dispatch(object, event);\n      }\n    });\n  };\n\n  this.onMouseDown = function (mouseEvent) {\n    _this.mapPositionToPoint(_this.mouse, mouseEvent.clientX, mouseEvent.clientY);\n\n    _this.update();\n\n    var event = new InteractiveEvent('mousedown', mouseEvent);\n\n    _this.interactiveObjects.forEach(function (object) {\n      if (object.intersected) {\n        _this.dispatch(object, event);\n      }\n    });\n  };\n\n  this.onTouchStart = function (touchEvent) {\n    _this.mapPositionToPoint(_this.mouse, touchEvent.touches[0].clientX, touchEvent.touches[0].clientY);\n\n    _this.update();\n\n    var event = new InteractiveEvent(_this.treatTouchEventsAsMouseEvents ? 'mousedown' : 'touchstart', touchEvent);\n\n    _this.interactiveObjects.forEach(function (object) {\n      if (object.intersected) {\n        _this.dispatch(object, event);\n      }\n    });\n  };\n\n  this.onMouseUp = function (mouseEvent) {\n    var event = new InteractiveEvent('mouseup', mouseEvent);\n\n    _this.interactiveObjects.forEach(function (object) {\n      _this.dispatch(object, event);\n    });\n  };\n\n  this.onTouchEnd = function (touchEvent) {\n    _this.mapPositionToPoint(_this.mouse, touchEvent.touches[0].clientX, touchEvent.touches[0].clientY);\n\n    _this.update();\n\n    var event = new InteractiveEvent(_this.treatTouchEventsAsMouseEvents ? 'mouseup' : 'touchend', touchEvent);\n\n    _this.interactiveObjects.forEach(function (object) {\n      _this.dispatch(object, event);\n    });\n  };\n\n  this.dispatch = function (object, event) {\n    if (object.target && !event.cancelBubble) {\n      event.coords = _this.mouse;\n      event.distance = object.distance;\n      event.intersected = object.intersected;\n      object.target.dispatchEvent(event);\n    }\n  };\n\n  this.mapPositionToPoint = function (point, x, y) {\n    var rect; // IE 11 fix\n\n    if (!_this.renderer.domElement.parentElement) {\n      rect = {\n        x: 0,\n        y: 0,\n        left: 0,\n        top: 0,\n        width: 0,\n        height: 0\n      };\n    } else {\n      rect = _this.renderer.domElement.getBoundingClientRect();\n    }\n\n    point.x = (x - rect.left) / rect.width * 2 - 1;\n    point.y = -((y - rect.top) / rect.height) * 2 + 1;\n  };\n\n  this.renderer = renderer;\n  this.camera = camera;\n  this.domElement = _domElement;\n  this.mouse = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(-1, 1); // top left default position\n\n  this.supportsPointerEvents = !!window.PointerEvent;\n  this.interactiveObjects = [];\n  this.raycaster = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\n  _domElement.addEventListener('click', this.onMouseClick);\n\n  if (this.supportsPointerEvents) {\n    _domElement.ownerDocument.addEventListener('pointermove', this.onDocumentMouseMove);\n\n    _domElement.addEventListener('pointerdown', this.onMouseDown);\n\n    _domElement.addEventListener('pointerup', this.onMouseUp);\n  } else {\n    _domElement.ownerDocument.addEventListener('mousemove', this.onDocumentMouseMove);\n\n    _domElement.addEventListener('mousedown', this.onMouseDown);\n\n    _domElement.addEventListener('mouseup', this.onMouseUp);\n\n    _domElement.addEventListener('touchstart', this.onTouchStart, {\n      passive: true\n    });\n\n    _domElement.addEventListener('touchmove', this.onTouchMove, {\n      passive: true\n    });\n\n    _domElement.addEventListener('touchend', this.onTouchEnd, {\n      passive: true\n    });\n  }\n\n  this.treatTouchEventsAsMouseEvents = true;\n};\n\n\n//# sourceMappingURL=three.interactive.module.js.map\n\n\n//# sourceURL=webpack://matching-game/./node_modules/three.interactive/build/three.interactive.module.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/src/main.js");
/******/ 	
/******/ })()
;