/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\r\\n  background-color: #222;\\r\\n  color: #eee;\\r\\n  font-family: sans-serif;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  color: tomato;\\r\\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\\r\\n  margin-top: 2px;\\r\\n  margin-bottom: 2px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n  font-size: 16px;\\r\\n  margin-top: 2px;\\r\\n  margin-left: 16px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  border: 2px solid #eee;\\r\\n  background-color: #222;\\r\\n  color: #eee;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#appContainer {\\r\\n  margin: 0px auto;\\r\\n  max-width: 512px;\\r\\n}\\r\\n\\r\\n#formContainer {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 16px;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n#formContainer input[type=\\\"text\\\"] {\\r\\n  border: 2px solid #ccc;\\r\\n  border-radius: 4px;\\r\\n  flex-grow: 1;\\r\\n  font-size: 16px;\\r\\n  margin-right: 8px;\\r\\n  padding: 4px;\\r\\n}\\r\\n\\r\\n#formContainer button {\\r\\n  padding: 4px;\\r\\n}\\r\\n\\r\\n.delBtn {\\r\\n  cursor: pointer;\\r\\n  margin-right: 4px;\\r\\n}\\r\\n\\r\\n#countersContainer .counter {\\r\\n  align-items: center;\\r\\n  border: 1px solid #eee;\\r\\n  border-radius: 4px;\\r\\n  font-size: 18px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin: 8px;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.right {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.counter .name {\\r\\n  margin-right: 4px;\\r\\n}\\r\\n\\r\\n.counter .value {\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n  margin: 0px 8px;\\r\\n}\\r\\n\\r\\n.counter button {\\r\\n  margin-left: 4px;\\r\\n  width: 32px;\\r\\n  height: 32px;\\r\\n}\\r\\n\\r\\n.tidbit {\\r\\n  margin-left: 16px;\\r\\n  font-size: 14px;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./src/app.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/app.css?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters */ \"./src/counters.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ \"./src/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nvar counters = new _counters__WEBPACK_IMPORTED_MODULE_0__[\"Counters\"]();\r\n\r\nvar h1 = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('h1', { innerText: 'count-things' });\r\nvar h2 = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('h2', { innerText: 'by Walter F. Hahn' });\r\n\r\nvar appContainer  = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('div', { id: \"appContainer\" });\r\nvar formContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('div', { id: \"formContainer\" });\r\n\r\nvar nameInput = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('input', { type: \"text\" });\r\nvar addCounterBtn = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('button', {\r\n  innerText: \"Add\",\r\n  onclick: (e) => {\r\n    var name = nameInput.value;\r\n    if (name.length)\r\n      counters.add(nameInput.value);\r\n    nameInput.value = \"\";\r\n  }\r\n});\r\n\r\nvar countersContainer = Object(_elements__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('div', { id: \"countersContainer\" });\r\n\r\nformContainer.appendChildren([ nameInput, addCounterBtn ])\r\n\r\nappContainer.appendChildren([\r\n  h1,\r\n  h2,\r\n  formContainer,\r\n  countersContainer\r\n]);\r\n\r\ndocument.body.appendChild(appContainer);\r\n\r\ncounters.setContainer(countersContainer);\r\ncounters.render();\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/counters.js":
/*!*************************!*\
  !*** ./src/counters.js ***!
  \*************************/
/*! exports provided: Counters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Counters\", function() { return Counters; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n\r\n\r\n\r\nclass Counters {\r\n  constructor() {\r\n    var data = _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('counters')\r\n      ? JSON.parse(_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('counters'))\r\n      : {};\r\n\r\n    this.counters = {};\r\n\r\n    for (var key in data)\r\n      this.counters[key] = new Counter(data[key], this);\r\n  }\r\n\r\n  setContainer(el) {\r\n    this.container = el;\r\n  }\r\n\r\n  add(name) {\r\n    this.counters[name] = new Counter({ name, value: 0 }, this);\r\n    this.save();\r\n    this.render();\r\n  }\r\n\r\n  getCount() {\r\n    return Object.keys(this.counters).length;\r\n  }\r\n\r\n  getAll() {\r\n    return this.counters;\r\n  }\r\n\r\n  get(name) {\r\n    return this.counters[name];\r\n  }\r\n\r\n  save() {\r\n    var data = {};\r\n    for (var name in this.counters)\r\n      data[name] = this.counters[name].getData();\r\n    _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('counters', JSON.stringify(data));\r\n  }\r\n\r\n  deleteAll() {\r\n    this.counters = {};\r\n    this.save();\r\n    this.render();\r\n  }\r\n\r\n  del(name) {\r\n    delete this.counters[name];\r\n    this.save();\r\n    this.render();\r\n  }\r\n\r\n  render() {\r\n    if ( ! this.container)\r\n      return;\r\n    this.container.innerHTML = \"\";\r\n    for (var i in this.counters)\r\n      this.container.appendChild(this.counters[i].render());\r\n  }\r\n}\r\n\r\nclass Counter {\r\n  constructor(config, parent) {\r\n    this.name = config.name;\r\n    this.value = parseInt(config.value) || 0;\r\n    this.color = config.color || this.randomColor()\r\n    this.parent = parent;\r\n  }\r\n\r\n  randomColor() {\r\n    var high = 200;\r\n    var low = 32;\r\n    return [\r\n      Math.floor(Math.random() * (high - low)) + low,\r\n      Math.floor(Math.random() * (high - low)) + low,\r\n      Math.floor(Math.random() * (high - low)) + low\r\n    ]\r\n  }\r\n\r\n  getData() {\r\n    return {\r\n      name: this.name,\r\n      value: this.value,\r\n      color: this.color\r\n    }\r\n  }\r\n\r\n  incr(value) {\r\n    this.value += value;\r\n    this.update();\r\n  }\r\n\r\n  decr(value) {\r\n    this.value -= value;\r\n    this.update();\r\n  }\r\n\r\n  update() {\r\n    this.valueElement.innerText = this.value;\r\n    this.parent.save();\r\n  }\r\n\r\n  assignRandomColor(e) {\r\n    if (e.target.classList.contains('counter')) {\r\n      this.color = this.randomColor();\r\n      e.target.style = `background-color: rgb(${this.color.join(',')});`;\r\n      this.parent.save();\r\n    }\r\n  }\r\n\r\n  del() {\r\n    if (confirm(`Remove ${this.name}?`))\r\n      this.parent.del(this.name)\r\n  }\r\n\r\n  render() {\r\n    const container = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', {\r\n      className: 'counter',\r\n      onclick: this.assignRandomColor.bind(this),\r\n      style: `background-color: rgb(${this.color.join(',')});`\r\n    });\r\n\r\n    const left = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', { className: \"left\" });\r\n    const right = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', { className: \"right\" });\r\n\r\n    const delBtn = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', {\r\n      className: \"delBtn\",\r\n      innerText: \"🗑️\",\r\n      onclick: this.del.bind(this)\r\n    })\r\n\r\n    const name = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', {\r\n      className: 'name',\r\n      innerText: this.name\r\n    });\r\n\r\n    const value = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', {\r\n      className: 'value',\r\n      innerText: this.value + \"\"\r\n    });\r\n\r\n    const incrBtn = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('button', {\r\n      innerText: '+',\r\n      onclick: () => { this.incr(1) }\r\n    });\r\n\r\n    const decrBtn = Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('button', {\r\n      innerText: '-',\r\n      onclick: () => { this.decr(1) }\r\n    });\r\n\r\n    left.appendChild(delBtn);\r\n    left.appendChild(name);\r\n\r\n    right.appendChild(value);\r\n    right.appendChild(incrBtn);\r\n    right.appendChild(decrBtn);\r\n\r\n    container.appendChild(left);\r\n    container.appendChild(right);\r\n\r\n    this.valueElement = value;\r\n\r\n    return container;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/counters.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nconst createElement = (tag, options = {}) => {\r\n  var el = document.createElement(tag);\r\n\r\n  for (var o in options)\r\n    el[o] = options[o];\r\n\r\n  el.appendChildren = (elements) => {\r\n    for (var i in elements)\r\n      el.appendChild(elements[i]);\r\n  }\r\n\r\n  return el;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/elements.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar storage = window.localStorage;\r\n\r\nvar store = {\r\n  clr: () => {\r\n    storage.clear();\r\n  },\r\n\r\n  del: (key) => {\r\n    storage.removeItem(key);\r\n  },\r\n\r\n  get: (key) => {\r\n    return storage.getItem(key);\r\n  },\r\n\r\n  set: (key, val) => {\r\n    storage.setItem(key, val);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\r\n\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ })

/******/ });