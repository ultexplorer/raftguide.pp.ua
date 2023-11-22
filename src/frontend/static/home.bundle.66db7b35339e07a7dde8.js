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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/static/styles/styles.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/static/styles/styles.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/**\n * Body CSS\n */\n\n html,\n body {\n   height: 100%;\n }\n \n html,\n body,\n input,\n textarea,\n button {\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n }\n \n \n /**\n  * Sidebar CSS\n  */\n \n #sidebar {\n   background-color: #2196F3;\n   padding: 15px;\n }\n \n @media (min-width: 768px) {\n   #sidebar {\n     position: fixed;\n     top: 0;\n     bottom: 0;\n     width: 180px;\n     height: 100%;\n     padding-top: 30px;\n   }\n }\n \n \n /**\n  * Content CSS\n  */\n @media (min-width: 768px) {\n   #content {\n     margin-left: 180px;\n   }\n }\n\n .author {\n  font-size: .8rem; \n }\n\n .floating-btn {\n     position: fixed;\n     bottom: 50px;\n     right: 50px;\n }\n\n .float-right {\n     float: right;\n }\n\n .float-left {\n  float: left;\n}\n\n\n .modal {\n     max-width: 600px;\n     max-height: 333px;\n     margin: 100px auto;\n     overflow-y: auto;\n     background: #fff;\n }\n\n .modal > h1 {\n     text-align: center;\n }\n\n .modal .modal-content {\n     padding: 1rem;\n }\n\n.modalRegistration {\n    max-width: 600px;\n    max-height: 900px;\n    margin: 100px auto;\n    overflow-y: auto;\n    background: #fff;\n}\n\n.modalRegistration > h1 {\n    text-align: center;\n}\n\n.modalRegistration .modal-content {\n    padding: 1rem;\n}\n\n.hidden {\n  display:none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://raftguide.pp.ua/./src/static/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://raftguide.pp.ua/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://raftguide.pp.ua/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/static/styles/styles.css":
/*!**************************************!*\
  !*** ./src/static/styles/styles.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/static/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://raftguide.pp.ua/./src/static/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://raftguide.pp.ua/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://raftguide.pp.ua/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://raftguide.pp.ua/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://raftguide.pp.ua/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://raftguide.pp.ua/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://raftguide.pp.ua/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/static/js/index.js":
/*!********************************!*\
  !*** ./src/static/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./src/static/styles/styles.css\");\n/* harmony import */ var _lib_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/handlers */ \"./src/static/js/lib/handlers.js\");\n\n\n\n\nconst form = document.getElementById('form');\nconst input = form.querySelector('#question-input');\nconst submitBtn = form.querySelector('#submit');\nconst modalBtn = document.getElementById('modal-btn');\n\n//submitBtn.addEventListener('click', loginRegistrationHandler)\n\n\n(async ()=> {\n    modalBtn.addEventListener('click', _lib_handlers__WEBPACK_IMPORTED_MODULE_1__.loginRegistrationHandler);\n})()\n\n//# sourceURL=webpack://raftguide.pp.ua/./src/static/js/index.js?");

/***/ }),

/***/ "./src/static/js/lib/form.js":
/*!***********************************!*\
  !*** ./src/static/js/lib/form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emailNotRFoundForm: () => (/* binding */ emailNotRFoundForm),\n/* harmony export */   errorRegistrationForm: () => (/* binding */ errorRegistrationForm),\n/* harmony export */   loginForm: () => (/* binding */ loginForm),\n/* harmony export */   registrationForm: () => (/* binding */ registrationForm),\n/* harmony export */   successLoginForm: () => (/* binding */ successLoginForm),\n/* harmony export */   successRegistrationForm: () => (/* binding */ successRegistrationForm)\n/* harmony export */ });\n\nclass Form {\n    constructor(title, id, html, modalClass) {\n        this.title = title;\n        this.id = id;\n        this.html = html;\n        this.modalClass = modalClass;\n    }\n}\n\nconst loginForm = new Form(\n    'Авторизация',\n    'auth-form',\n    `<form class=\"mui-form\" id=\"auth-form\">\n                    \n                    <div class=\"mui-textfield mui-textfield--float-label\">\n                         <input type=\"email\" id=\"email\" required >\n                         <label for=\"email\">Email</label>\n                    </div>\n                    <div class=\"mui-textfield mui-textfield--float-label\">\n                        <input type=\"password\" id=\"password\" required  minlength=\"7\" maxlength=\"256\">\n                    <label for=\"password\">Пароль</label>\n                    </div>\n                    <button \n                        id=\"login-btn\"\n                        type=\"button\"\n                        class=\"mui-btn mui-btn--raised mui-btn--primary\"\n           \n                        >Войти</button>\n                    <button \n                        id=\"registration\"\n                        type=\"button\"\n                        class=\"mui-btn mui-btn--raised mui-btn--primary float-right\"\n                        \n                        >Регистрация</button>\n                        \n              </form>`,\n    'modal'\n)\n\nconst registrationForm = new Form('Регистрация',\n    'reg-form',\n    `<form class=\"mui-form\" id=\"reg-form\">\n                    <div class=\"mui-textfield mui-textfield--float-label\">\n                         <input type=\"text\" id=\"your-name\" required >\n                         <label for=\"your-name\">Ваше имя</label>\n                    </div>\n                    <div class=\"mui-textfield mui-textfield--float-label\">\n                         <input type=\"email\" id=\"email\" required >\n                         <label for=\"email\">Email</label>\n                    </div>\n                    <div class=\"mui-textfield mui-textfield--float-label\">\n                        <input type=\"password\" id=\"password\" required >\n                    <label for=\"password\">Пароль</label>\n                    </div>\n                    <div class=\"mui-textfield mui-textfield--float-label\">\n                        <input type=\"password\" id=\"check-password\" required >\n                    <label for=\"check-password\">Пароль еще раз...</label>\n                    </div>\n                    <button \n                        id=\"send-registration\"\n                        type=\"submit\"\n                        class=\"mui-btn mui-btn--raised mui-btn--primary\"\n            \n                        >Зарегестрироваться</button>\n                        \n              </form>`,\n    'modalRegistration');\n\n    const emailNotRFoundForm = new Form(\n        \"Email не найден\",\n        \"form-no-email\",\n        `<div><div class=\"float-left\"><h2>Зарегестрируйтесь!</h2></div>\n        <div class=\"float-right\">\n        <form class=\"mui-form\" id=\"reg-form\">\n        \n        <button \n                        id=\"registration\"\n                        type=\"button\"\n                        class=\"mui-btn mui-btn--raised mui-btn--primary \"\n                        \n                        >Регистрация</button>\n                        \n        </form>\n        </div>\n        </div>\n        `,\n        'modal'\n    )\n\n   \n    const successLoginForm = new Form(\n        \"Приветствую!\",\n        \"form-success-login\",\n        `<div id=\"form-success-login\">\n        <p>Вы зашли на сайт под именем </p>\n        </div>`,\n        'modal',\n    )\n\n    const successRegistrationForm = new Form(\n        \"Поздравляю!\",\n        \"form-success-login\",\n        `<div id=\"form-success-login\">\n        <p>Вы зарегестрировались на сайте под именем </p>\n        </div>`,\n        'modal',\n    )\n\n    const errorRegistrationForm = new Form(\n        \"Ошибка при регистрации:\",\n        \"form-reg-error\",\n        ``,\n        'modal'\n    )\n\n\n\n\n//# sourceURL=webpack://raftguide.pp.ua/./src/static/js/lib/form.js?");

/***/ }),

/***/ "./src/static/js/lib/handlers.js":
/*!***************************************!*\
  !*** ./src/static/js/lib/handlers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginRegistrationHandler: () => (/* binding */ loginRegistrationHandler)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/static/js/lib/modal.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/static/js/lib/form.js\");\n/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validators */ \"./src/static/js/lib/validators.js\");\n/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests */ \"./src/static/js/lib/requests.js\");\n\n\n\n\n\n\n// Вызов формы логин-регистрациии\nasync function loginRegistrationHandler(event){\n    event.preventDefault();\n\n    await (0,_modal__WEBPACK_IMPORTED_MODULE_0__.aBuildModal)(_form__WEBPACK_IMPORTED_MODULE_1__.loginForm)\n    const btnLogin = document.getElementById('login-btn');\n    const inputEmail = document.getElementById('email');\n    const inputPassword = document.getElementById('password');\n    ////////////////////////////////////////////////////////////\n    \n    ///////////////////////////////////////////////////////////////19\n    btnLogin.disabled = true;\n    let buttonKey = 0;\n    let sw1 = true\n    ///////////////////////////////////////////////////////////////19\n    inputEmail.addEventListener('input', () => {\n        if((0,_validators__WEBPACK_IMPORTED_MODULE_2__.isValidLong)(inputEmail.value, 3) && sw1 === true){\n            buttonKey+=1;\n            sw1 = false;\n            console.log('buttonKey:', buttonKey)\n        }\n    })\n    let sw2 = true;\n    inputPassword.addEventListener('input', () => {\n        if((0,_validators__WEBPACK_IMPORTED_MODULE_2__.isValidLong)(inputPassword.value, 7) && sw2 === true){\n            buttonKey+=1;\n            sw2 = false;\n            console.log('buttonKey:', buttonKey)\n            if(buttonKey === 2) btnLogin.disabled = false;\n        }\n    })\n    //------------ЛОГИН LISTENER BTN--------------------------\n\n    //---|----------|------------------|----------|--------|--\n    btnLogin.addEventListener('click', async (event ) => {\n        btnLogin.disabled = true;\n        //console.log(inputEmail.value, inputPassword.value)\n        const answer = await loginHandler(event);\n        console.log(answer)\n        console.log('answer:', answer)\n        if(answer === 'not found'){\n            await (0,_modal__WEBPACK_IMPORTED_MODULE_0__.aBuildModal)(_form__WEBPACK_IMPORTED_MODULE_1__.emailNotRFoundForm)\n            const btnRegistration = document.getElementById('registration')\n            btnRegistration.addEventListener('click', async (event) => {\n            await callRegistrationFormHandler(event);\n          })\n        }else{\n            const user = answer.nickName;\n            console.log('from btnLogin user:', user)\n            await (0,_modal__WEBPACK_IMPORTED_MODULE_0__.aBuildModal)(_form__WEBPACK_IMPORTED_MODULE_1__.successLoginForm, user)\n        }\n    });\n\n    \n////////////////////////////////////////////////////////////\n\n\n    const btnRegistration = document.getElementById('registration')\n    btnRegistration.addEventListener('click', async (event) => {\n        await callRegistrationFormHandler(event)\n    })\n}\n\n\n//               #                              #\n// ЛОГИН HANDLER-|-------ЛОГИН HANDLER------ ---|---------ЛОГИН HANDLER--------\n//               *                              *\n// отправка данных формой login:  (login/password)\nasync function loginHandler (event) {\n    event.preventDefault();\n    const email = document.getElementById('email').value;\n    const password = document.getElementById('password').value;\n    if((0,_validators__WEBPACK_IMPORTED_MODULE_2__.isValidLong)(password, 7)){\n        const data = { email, password };\n        \n        console.log(data);\n\n        document.getElementById('email').value = ''\n        document.getElementById('email').className = ''\n        document.getElementById('password').value = ''\n        document.getElementById('password').className = ''\n        // Async request to server to save question\n        const answerFromServer = await (0,_requests__WEBPACK_IMPORTED_MODULE_3__.serverAccessUser)('/api/post/login', data);\n        ///////////////////////получил ответ с сервера\n        const respond = await answerFromServer.json();\n        console.log('respond from loginHandler:', respond)\n        // здесь от ответа с сервера надо создать функцию для дальнейших действий\n        return respond\n        //-----------------------------------------------------------------------\n\n    }\n}\n//          ^\n//----------|---------------END LOGIN-------------------------------------------\n\n// Вызов формы регистрации\nasync function callRegistrationFormHandler (event) {\n    event.preventDefault()\n    await (0,_modal__WEBPACK_IMPORTED_MODULE_0__.aBuildModal)(_form__WEBPACK_IMPORTED_MODULE_1__.registrationForm);\n\n    const sendRegistrationBtn = document.getElementById('send-registration');\n    sendRegistrationBtn.disabled = true;\n    //Валидация\n    const inputYourName = document.getElementById('your-name');\n    const inputPassword = document.getElementById('password');\n    const inputCheckPassword = document.getElementById('check-password');\n    let buttonKey = 0;\n    let sw1 = true\n    sendRegistrationBtn.disabled = true;\n    inputYourName.addEventListener('input', () => {\n        \n        if((0,_validators__WEBPACK_IMPORTED_MODULE_2__.isValidLong)(inputYourName.value, 3) && sw1 === true){\n            buttonKey+=1;\n            sw1 = false;\n            console.log('buttonKey:', buttonKey)\n        }\n    })\n    let sw2 = true;\n    inputPassword.addEventListener('input', () => {\n        \n        if((0,_validators__WEBPACK_IMPORTED_MODULE_2__.isValidLong)(inputPassword.value, 7) && sw2 === true){\n            buttonKey+=1;\n            sw2 = false;\n            console.log('buttonKey:', buttonKey)\n        }\n    })\n    let sw3 = true;\n    inputCheckPassword.addEventListener('input', () => {\n        if((0,_validators__WEBPACK_IMPORTED_MODULE_2__.isValidLong)(inputCheckPassword.value, 7) && sw3 === true){\n            buttonKey+=1;\n            sw3 = false;\n            console.log('buttonKey:', buttonKey)\n        }\n    })\n    inputCheckPassword.addEventListener('input', () => {\n        let even = (document.getElementById('password').value === document.getElementById('check-password').value);\n        if(buttonKey === 3 && even){\n            sendRegistrationBtn.disabled = false;\n        }\n    })\n\n\n    //////////////////////////////////////////////////////////////////////////////////////////////\n    sendRegistrationBtn.addEventListener('click', async (event) => {\n        const yourName = document.getElementById('your-name');\n        //console.log(yourName)\n        await sendRegistrationFormHandler(event)\n        sendRegistrationBtn.disabled = true; /// !!!!!!!!!!!\n    })\n}\n\n// Отправка данных формой регистрации: (your-name/email/password/check-password)\nasync function sendRegistrationFormHandler (event){\n    event.preventDefault();\n    const yourName = document.getElementById('your-name').value;\n    const email = document.getElementById('email').value;\n    const password = document.getElementById('password').value;\n    const checkPassword = document.getElementById('check-password').value;\n\n    const data = { yourName, email, password, checkPassword };\n    const answerFromServer = await (0,_requests__WEBPACK_IMPORTED_MODULE_3__.serverAccessUser)('/api/post/registration', data).then(data => data.json())\n    \n   console.log(answerFromServer)\n   const errors = answerFromServer.error;\n   if(errors){\n        const keys = Object.keys(errors);\n        const errorType = {\n            uniqueEmail: 'такой email уже существует.',\n            uniqueNickname: 'такой nickname уже существует.'\n        }\n        const errorMessage = errorType[keys[0]]\n        console.log(errorMessage)\n        await (0,_modal__WEBPACK_IMPORTED_MODULE_0__.aBuildModal)(_form__WEBPACK_IMPORTED_MODULE_1__.errorRegistrationForm, '', errorMessage)\n   }else {\n      const user = answerFromServer.yourName;\n      await (0,_modal__WEBPACK_IMPORTED_MODULE_0__.aBuildModal)(_form__WEBPACK_IMPORTED_MODULE_1__.successRegistrationForm, user)\n   }\n   \n}\n\n\n\n//# sourceURL=webpack://raftguide.pp.ua/./src/static/js/lib/handlers.js?");

/***/ }),

/***/ "./src/static/js/lib/modal.js":
/*!************************************!*\
  !*** ./src/static/js/lib/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aBuildModal: () => (/* binding */ aBuildModal),\n/* harmony export */   pCreateModal: () => (/* binding */ pCreateModal)\n/* harmony export */ });\n\n// вызов модального окна с классом css: modalClass, h1 = title, content = html\nfunction pCreateModal(title, html, modalClass, user, error){\n    return new Promise((resolve, reject) => {\n        const modal = document.createElement('div');\n        modal.classList.add(modalClass);\n        modal.innerHTML = `<h1>${title}</h1>\n        <div class=\"modal-content\">${html}<h1>${user}</h1><h1>${error}</h1></div>`\n        resolve(mui.overlay('on', modal))\n    })\n}\n\nasync function aBuildModal (form, user='', error=''/*text, form, id, modalClass*/) {\n    const title = form.title;\n    const html = form.html;\n    const id = form.id;\n    const modalClass = form.modalClass;\n    await pCreateModal(title, html, modalClass, user, error); // Жду создания модального окна в DOM на странице вызова модального окна...\n}\n\n\n\n\n//# sourceURL=webpack://raftguide.pp.ua/./src/static/js/lib/modal.js?");

/***/ }),

/***/ "./src/static/js/lib/requests.js":
/*!***************************************!*\
  !*** ./src/static/js/lib/requests.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serverAccessUser: () => (/* binding */ serverAccessUser)\n/* harmony export */ });\n\nasync function postFetch(url, data) {\n    return fetch(url, {\n        method: \"POST\", // или 'PUT'\n        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n    })\n}\n\nasync function serverAccessUser(url, data){\n    return await postFetch(url, data);\n}\n\n/*export async function loginUser(url, data){\n    return await postFetch(url, data);\n}*/\n\n\n\n//# sourceURL=webpack://raftguide.pp.ua/./src/static/js/lib/requests.js?");

/***/ }),

/***/ "./src/static/js/lib/validators.js":
/*!*****************************************!*\
  !*** ./src/static/js/lib/validators.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isValidLong: () => (/* binding */ isValidLong)\n/* harmony export */ });\nfunction isValidLong(value, len){\n    return value.length >= len\n}\n\n//# sourceURL=webpack://raftguide.pp.ua/./src/static/js/lib/validators.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/static/js/index.js");
/******/ 	
/******/ })()
;