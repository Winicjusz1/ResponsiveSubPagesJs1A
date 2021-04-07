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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\n:root {\\n    --color-blk: #0D0D0D;\\n    --color-wht: #FFFFFF;\\n    --ff-vibes: 'Great Vibes', cursive;\\n}\\n\\n#content {\\n    height: 100vh;\\n}\\n\\nmain {\\n    width: 100%;\\n    height: 100vh;\\n    margin: auto;\\n    display: flex;\\n    flex-direction: column;\\n    align-content: center;\\n}\\n\\np {\\n    font-family: var(--ff-vibes);\\n    font-size: 1.3em;\\n    letter-spacing: 2px;\\n}\\n\\n\\n\\nnav {\\n    width: 100%;\\n    height: auto;\\n    position: fixed;\\n    background-color: var(--color-wht);\\n    transition: transform 400ms cubic-bezier(.5, 0, .5, 1);\\n}\\n\\n.hidden {\\n    transform: translateY(-100%)\\n}\\n\\n.home {\\n    margin: auto;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.menu {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.menu li {\\n    list-style: none;\\n    padding: .5em;\\n    font-size: 2em;\\n    text-align: center;\\n    cursor: pointer;\\n}\\n\\n.menu li:hover {\\n    background-color: rgb(248, 242, 242);\\n}\\n\\n.burger {\\n    width: 3em;\\n    position: fixed;\\n    right: 2em;\\n    top: 2em;\\n    z-index: 2;\\n  } \\n\\n.b-top {\\n    background-color: var(--color-blk);\\n    width: 3em;\\n    height: 3px;\\n    margin-bottom: .5em;\\n}\\n\\n.b-bot {\\n    background-color: var(--color-blk);\\n    width: 1.5em;\\n    height: 3px;\\n    margin-left: auto;\\n}\\n\\n.b-bot-click {\\n    width: 3em;\\n}\\n\\n\\n\\n\\n.home_header {\\n    display: flex;\\n    text-align: center;\\n    padding: .5em;\\n    justify-content: center;\\n    flex-direction: column;\\n}\\n\\n.mountains_foto {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.mountains_foto img {\\n    border-radius: 30%; \\n    height: 50vh;\\n}\\n\\n.mountains_fotoB {\\n    display: flex;\\n    padding-top: 70px;\\n    height: 50vh;\\n    \\n}\\n.mountains_fotoB img {\\nwidth:100%;\\npadding-left: 2em;\\npadding-right: 2em;\\n\\n}\\n\\n.adress {\\n    font-size: 2em;\\n    width: 85%;\\n    margin: auto;\\n    text-align: center;\\n}\\n\\n.adress p {\\n    padding: .2em;\\n}\\n\\n\\n.about {\\n    width: 90%;\\n    padding: 1em;\\n    line-height: 1.5em;\\n    text-align: center;\\n    margin: auto;\\n    font-size: 1.2em;\\n}\\n.about p {\\n    padding-top: 1em;\\n}\\n\\n\\n\\n@media screen and (min-width: 600px) {\\n    .hidden {\\n        transform: translateY(0);\\n    }\\n\\n    .burger {\\n        display: none;\\n    }\\n\\n    .menu {\\n        flex-direction: row;\\n        width: 60%;\\n        margin: auto;\\n        justify-content: center;\\n    }\\n    \\n    .adress {\\n        width: 60%;\\n        text-align: center;\\n        margin: auto;\\n    }\\n\\n    .about {\\n        width: 60%;\\n        font-size: 1.5em;\\n        margin-top: 8em;\\n    }\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://responsivesubpages/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://responsivesubpages/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/img/picture1.jpg":
/*!******************************!*\
  !*** ./src/img/picture1.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a4e391ed7ab55f35e0a497549b4f04ea.jpg\");\n\n//# sourceURL=webpack://responsivesubpages/./src/img/picture1.jpg?");

/***/ }),

/***/ "./src/img/picture2.jpg":
/*!******************************!*\
  !*** ./src/img/picture2.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ec7cee82bb06bb287e5282a8e14f31a7.jpg\");\n\n//# sourceURL=webpack://responsivesubpages/./src/img/picture2.jpg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://responsivesubpages/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://responsivesubpages/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutRender\": () => (/* binding */ aboutRender)\n/* harmony export */ });\n\n\nfunction aboutRender() {\n    const main = document.querySelector('main');\n    main.innerHTML = '';\n    content.appendChild(main);\n\n    const about = document.createElement('div');\n    about.className = 'about';\n    about.innerHTML = 'Lets visit our <p>\"The Best Places\" - Company</p>We are very happy that you have decided to visit our best places. Our company is an innovative network of travel agencies selling tourist services of tour operators such as Itaka, Exim Tours and many others. In addition to holiday holidays, we offer sightseeing tours to the most interesting places in the world and also skiing trips in the winter season. Our offer also includes camps, summer camps, flight and coach tickets as well as offers for organized groups. We are one of the largest multiagencies in Poland, operating in the tourism industry since 2007.'\n\n    main.appendChild(about)\n}\n\n\n\n//# sourceURL=webpack://responsivesubpages/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactRender\": () => (/* binding */ contactRender)\n/* harmony export */ });\n\n\nfunction contactRender() {\n    const content = document.getElementById('content');\n\n    const main = document.querySelector('main');\n    main.innerHTML = '';\n    content.appendChild(main);\n\n    const adress = document.createElement('div');\n    adress.className = 'adress';\n    main.appendChild(adress);\n\n    adress.innerHTML = `<p>\"The Best Places\" - Company</p>\n                        <p>Miłkowskiego st.530</p>\n                        <p>30-349 Krakow</p>\n                        <p>Poland</p>\n                        <p>+48 123-456-789</p>`\n}\n\n\n\n//# sourceURL=webpack://responsivesubpages/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeRender1\": () => (/* binding */ homeRender1),\n/* harmony export */   \"homeRender\": () => (/* binding */ homeRender)\n/* harmony export */ });\n/* harmony import */ var _img_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img_import */ \"./src/img_import.js\");\n\n\nfunction homeRender1() {\n    const content = document.getElementById('content');\n\n    const main = document.createElement('main');\n\n    main.innerHTML = '';\n\n    const home = document.createElement('div');\n    home.className = 'home';\n    main.appendChild(home);\n\n    const header = document.createElement('h1');\n    header.className = 'home_header';\n    header.innerHTML = 'Lets visit our <br></br> <p>\"The Best Places\" - Company</p>';\n\n    const pictures = _img_import__WEBPACK_IMPORTED_MODULE_0__.pictureFoto;\n\n    const mountainsFoto = document.createElement('div')\n    mountainsFoto.className = 'mountains_foto';\n\n    content.appendChild(main)\n    home.appendChild(header)\n    home.appendChild(mountainsFoto)\n    mountainsFoto.appendChild(pictures)\n}\n\nfunction homeRender() {\n    const content = document.getElementById('content');\n\n    const main = document.querySelector('main');\n    main.innerHTML = '';\n    content.appendChild(main);\n\n    const home = document.createElement('div');\n    home.className = 'home';\n    main.appendChild(home);\n\n    const header = document.createElement('h1');\n    header.className = 'home_header';\n    header.innerHTML = 'Lets visit our <br><br> <p>\"The Best Places\" - Company</p>';\n\n\n    const pictures = _img_import__WEBPACK_IMPORTED_MODULE_0__.pictureFoto;\n\n    const mountainsFoto = document.createElement('div')\n    mountainsFoto.className = 'mountains_foto';\n\n    content.appendChild(main)\n    home.appendChild(header)\n    home.appendChild(mountainsFoto)\n    mountainsFoto.appendChild(pictures)\n}\n\n\n\n//# sourceURL=webpack://responsivesubpages/./src/home.js?");

/***/ }),

/***/ "./src/img_import.js":
/*!***************************!*\
  !*** ./src/img_import.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pictureFoto\": () => (/* binding */ pictureFoto)\n/* harmony export */ });\n/* harmony import */ var _img_picture1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/picture1.jpg */ \"./src/img/picture1.jpg\");\n\nconst pictureFoto = new Image();\npictureFoto.src = _img_picture1_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n\n\n\n\n\n//# sourceURL=webpack://responsivesubpages/./src/img_import.js?");

/***/ }),

/***/ "./src/img_import2.js":
/*!****************************!*\
  !*** ./src/img_import2.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pictureFotoB\": () => (/* binding */ pictureFotoB)\n/* harmony export */ });\n/* harmony import */ var _img_picture2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/picture2.jpg */ \"./src/img/picture2.jpg\");\n\r\nconst pictureFotoB = new Image();\r\npictureFotoB.src = _img_picture2_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\r\n\r\n\n\n//# sourceURL=webpack://responsivesubpages/./src/img_import2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n(0,_render__WEBPACK_IMPORTED_MODULE_0__.navRender)();\n\n(0,_render__WEBPACK_IMPORTED_MODULE_0__.homeRender1)()\n\n\n\n\nconst homeBtn = document.querySelector('.nav_home');\nconst aboutBtn = document.querySelector('.nav_about');\nconst menuBtn = document.querySelector('.nav_offers');\nconst contactBtn = document.querySelector('.nav_contact');\nconst main = document.querySelector('main');\nconst burgerBtn = document.querySelector('.burger');\nconst burgerBott = document.querySelector('.b-bot');\nconst nav = document.querySelector('nav');\n\n\nhomeBtn.addEventListener('click', () => {\n    main.innerHTML = '';\n    content.appendChild(main);\n    nav.classList.toggle('hidden');\n    burgerBott.classList.toggle('b-bot-click');\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.homeRender)()\n}\n);\n\n\naboutBtn.addEventListener('click', () => {\n    main.innerHTML = '';\n    content.appendChild(main);\n    nav.classList.toggle('hidden');\n    burgerBott.classList.toggle('b-bot-click');\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.aboutRender)()\n}\n);\n\nmenuBtn.addEventListener('click', () => {\n    main.innerHTML = '';\n    content.appendChild(main);\n    nav.classList.toggle('hidden');\n    burgerBott.classList.toggle('b-bot-click');\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.offerRender)()\n}\n);\n\ncontactBtn.addEventListener('click', () => {\n    main.innerHTML = '';\n    content.appendChild(main);\n    nav.classList.toggle('hidden');\n    burgerBott.classList.toggle('b-bot-click');\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.contactRender)()\n}\n);\n\nburgerBtn.addEventListener('click', () => {\n    nav.classList.toggle('hidden');\n    burgerBott.classList.toggle('b-bot-click');\n})\n\n//# sourceURL=webpack://responsivesubpages/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navRender\": () => (/* binding */ navRender)\n/* harmony export */ });\n\n\nfunction navRender() {\n    const content = document.getElementById('content');\n\n    const nav = document.createElement('nav');\n    nav.classList = 'hidden';\n\n    const burger = document.createElement('div');\n    burger.className = 'burger';\n\n\n    const burgerTop = document.createElement('div');\n    burgerTop.className = 'b-top';\n    const burgerBot = document.createElement('div');\n    burgerBot.className = 'b-bot';\n\n    burger.appendChild(burgerTop);\n    burger.appendChild(burgerBot)\n\n\n    const list = document.createElement('ul');\n    list.className = 'menu';\n\n    const li1 = document.createElement('li');\n    li1.className = 'nav_home';\n    li1.textContent = 'HOME';\n    list.appendChild(li1);\n\n    const li2 = document.createElement('li');\n    li2.className = 'nav_about';\n    li2.textContent = 'ABOUT';\n    list.appendChild(li2);\n\n    const li3 = document.createElement('li');\n    li3.className = 'nav_offers';\n    li3.textContent = 'OFFERS';\n    list.appendChild(li3);\n\n    const li4 = document.createElement('li');\n    li4.className = 'nav_contact';\n    li4.textContent = 'CONTACT';\n    list.appendChild(li4);\n\n    content.appendChild(burger);\n    content.appendChild(nav)\n    nav.appendChild(list)\n}\n\n\n\n//# sourceURL=webpack://responsivesubpages/./src/nav.js?");

/***/ }),

/***/ "./src/offer.js":
/*!**********************!*\
  !*** ./src/offer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"offerRender\": () => (/* binding */ offerRender)\n/* harmony export */ });\n/* harmony import */ var _img_import2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img_import2 */ \"./src/img_import2.js\");\n\n\nfunction offerRender() {\n\n\n    const content = document.getElementById('content');\n\n    const main = document.querySelector('main');\n    main.innerHTML = '';\n    content.appendChild(main);\n\n    const pictures = _img_import2__WEBPACK_IMPORTED_MODULE_0__.pictureFotoB;\n\n    const mountainsFotoB = document.createElement('div');\n    mountainsFotoB.className = 'mountains_fotoB';\n\n    content.appendChild(main);\n    main.appendChild(mountainsFotoB);\n    mountainsFotoB.appendChild(pictures);\n\n}\n\n\n\n\n\n//# sourceURL=webpack://responsivesubpages/./src/offer.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navRender\": () => (/* reexport safe */ _nav__WEBPACK_IMPORTED_MODULE_0__.navRender),\n/* harmony export */   \"homeRender\": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_1__.homeRender),\n/* harmony export */   \"offerRender\": () => (/* reexport safe */ _offer__WEBPACK_IMPORTED_MODULE_2__.offerRender),\n/* harmony export */   \"contactRender\": () => (/* reexport safe */ _contact__WEBPACK_IMPORTED_MODULE_3__.contactRender),\n/* harmony export */   \"aboutRender\": () => (/* reexport safe */ _about__WEBPACK_IMPORTED_MODULE_4__.aboutRender),\n/* harmony export */   \"homeRender1\": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_1__.homeRender1)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _offer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offer */ \"./src/offer.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://responsivesubpages/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.p = scriptUrl;
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