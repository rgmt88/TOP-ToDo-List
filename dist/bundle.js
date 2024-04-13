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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body, html {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n}\n\nheader {\n    background-color: #007bff;\n    color: white;\n    padding: 10px 20px;\n    text-align: center;\n}\n\nmain {\n    display: flex;\n    justify-content: space-around;\n    padding: 20px;\n}\n\n#projectList, #todos {\n    width: 40%;\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n    padding: 20px;\n}\n\n#projectList h2, #todos h2 {\n    color: #007bff;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n    margin-top: 20px;\n}\n\nli {\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nbutton {\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 8px 16px;\n    cursor: pointer;\n    margin-top: 10px;\n}\n\nbutton:hover {\n    background-color: #0056b3;\n}\n\nbutton.deleteBtn {\n    padding: 5px 10px;\n    margin-left: 10px;\n    background-color: red;\n    font-size: 0.8rem;\n    /* Add more styling as needed */\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#htmlprojectlist li {\n    cursor: pointer;\n    padding: 8px;\n    border-radius: 4px;\n}\n\n#htmlprojectlist li:hover {\n    background-color: #f0f0f0;\n}\n\n#htmlprojectlist li.active {\n    background-color: #007bff;\n    color: white;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/constructors.js":
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager),\n/* harmony export */   TodoItem: () => (/* binding */ TodoItem)\n/* harmony export */ });\nfunction TodoItem(title, description, project, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.project = project;\n    this.dueDate = dueDate;\n    this.priority = priority;\n}\n\nfunction Project(name) {\n    this.name = name;\n    this.todos = [];\n\n    this.addTodo = function(todo) {\n        if (todo instanceof TodoItem) {\n            this.todos.push(todo);\n        }\n    };\n\n    this.removeTodo = function(todoTitle) {\n        this.todos = this.todos.filter(function(todo) {\n            return todo.title !== todoTitle;\n        });\n    };\n}\n\nfunction ProjectManager() {\n    this.projects = {};\n\n    this.addProject = function(name) {\n        if (!this.projects[name]) {\n            this.projects[name] = new Project(name);\n        }\n    };\n\n    this.removeProject = function(name) {\n        if (this.projects[name]) {\n            delete this.projects[name];\n            return true;\n        }\n        return false;\n    };\n\n    this.getProjects = function() {\n        return Object.values(this.projects);\n    };\n\n    this.addTodoToProject = function(todoItem) {\n        if (!this.projects[todoItem.project]) {\n            console.warn(`Project \"${todoItem.project}\" does not exist. Creating it.`);\n            this.addProject(todoItem.project);\n        }\n        this.projects[todoItem.project].addTodo(todoItem);\n    };\n\n    this.removeTodoFromProject = function(projectName, todoTitle) {\n        if (this.projects[projectName]) {\n            this.projects[projectName].removeTodo(todoTitle);\n        }\n    };\n\n    this.getTodosByProject = function(name) {\n        if (this.projects[name]) {\n            return this.projects[name].todos;\n        }\n        return [];\n    };\n}\n\n//# sourceURL=webpack://top-todo-list/./src/constructors.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _userinteractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userinteractions */ \"./src/userinteractions.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n    // Ensures DOM content is fully loaded before attempting to update the UI\n    (0,_ui__WEBPACK_IMPORTED_MODULE_2__.updateProjectListUI)();\n    \n    (0,_userinteractions__WEBPACK_IMPORTED_MODULE_1__.setupAddProjectButton)();\n    \n    (0,_userinteractions__WEBPACK_IMPORTED_MODULE_1__.setupAddTodoModal)();\n\n    (0,_userinteractions__WEBPACK_IMPORTED_MODULE_1__.setupAddTodoForm)();\n});\n\n\n// // Adding projects\n// projectManager.addProject('Work');\n// projectManager.addProject('Personal');\n\n// // Creating and adding todos\n// var todo1 = new TodoItem('Finish report', 'Complete the annual report', 'Work', '2024-04-10', 'High');\n// var todo2 = new TodoItem('Buy groceries', 'Milk, Bread, Oranges & Beans', 'Personal', '2024-04-08', 'Medium');\n\n// projectManager.addTodoToProject(todo1);\n// projectManager.addTodoToProject(todo2);\n\n// // Displaying todos by project\n// console.log('Todos for Work: ', projectManager.getTodosByProject('Work'));\n// console.log('Todos for Personal: ', projectManager.getTodosByProject('Personal'));\n\n// // Change todo project\n// projectManager.removeTodoFromProject(todo1.project, todo1.title);\n// projectManager.addProject('Default');\n// todo1.project = 'Default';\n// projectManager.addTodoToProject(todo1);\n\n// // Displaying todos by project\n// console.log('Todos for Default: ', projectManager.getTodosByProject('Default'));\n// console.log('Todos for Work: ', projectManager.getTodosByProject('Work'));\n// console.log('Todos for Personal: ', projectManager.getTodosByProject('Personal'));\n\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\n/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ \"./src/constructors.js\");\n\n\n// Save current state to local storage\nfunction saveData(projectManager) {\n    localStorage.setItem('projectManagerData', JSON.stringify(projectManager));\n}\n  \n// Load state from local storage\nfunction loadData() {\n    var projectManager = new _constructors__WEBPACK_IMPORTED_MODULE_0__.ProjectManager(); // Always initialize\n    var data = localStorage.getItem('projectManagerData');\n  \n    if (data) {\n      var parsedData = JSON.parse(data);\n  \n      Object.keys(parsedData.projects).forEach(function(projectName) {\n        projectManager.addProject(projectName);\n  \n        parsedData.projects[projectName].todos.forEach(function(todo) {\n          projectManager.addTodoToProject(new _constructors__WEBPACK_IMPORTED_MODULE_0__.TodoItem(todo.title, todo.description, todo.project, todo.dueDate, todo.priority));\n        });\n      });\n    }\n    \n    return projectManager; // Return the (potentially updated) projectManager\n}\n  \n  \n  \n\n//# sourceURL=webpack://top-todo-list/./src/localstorage.js?");

/***/ }),

/***/ "./src/projectManagerModule.js":
/*!*************************************!*\
  !*** ./src/projectManagerModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProjectManager: () => (/* binding */ getProjectManager),\n/* harmony export */   setProjectManager: () => (/* binding */ setProjectManager)\n/* harmony export */ });\n/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ \"./src/constructors.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n\n\n\n// Initialize projectManager by capturing the return value of loadData()\nlet projectManager = (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.loadData)();\n\n// Export functions to get and set the projectManager instance\nfunction getProjectManager() {\n    return projectManager;\n}\n\nfunction setProjectManager(newManager) {\n    projectManager = newManager;\n}\n\n//# sourceURL=webpack://top-todo-list/./src/projectManagerModule.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTodosForProject: () => (/* binding */ displayTodosForProject),\n/* harmony export */   updateProjectListUI: () => (/* binding */ updateProjectListUI)\n/* harmony export */ });\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _projectManagerModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManagerModule */ \"./src/projectManagerModule.js\");\n\n\n\nfunction updateProjectListUI() {\n    const projectManager = (0,_projectManagerModule__WEBPACK_IMPORTED_MODULE_1__.getProjectManager)();\n    \n    const ul = document.getElementById('htmlprojectlist');\n    // Clear existing list items\n    ul.innerHTML = '';\n\n    // Retrieve an array of project names\n    const projects = projectManager.getProjects();\n\n    // Iterate over the project names and create a list\n    projects.forEach(project => {\n        const li = document.createElement('li');\n        li.textContent = project.name;\n\n        // Click event to display todos and handle active toggling\n        li.addEventListener('click', function() {\n            // Remove 'active' class from all list items\n            ul.querySelectorAll('li').forEach(x => x.classList.remove('active'));\n            // Add 'active' class to the clicked list item\n            li.classList.add('active');\n\n            // Display todos for the clicked project\n            displayTodosForProject(project.name);\n        });\n        \n        // Create a delete button\n        const deleteBtn = document.createElement('button');\n        deleteBtn.textContent = 'Delete';\n        deleteBtn.className = 'deleteBtn';\n        deleteBtn.onclick = function() {\n            projectManager.removeProject(project.name);\n            updateProjectListUI();\n            (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.saveData)(projectManager);\n        };\n        li.appendChild(deleteBtn);\n\n        ul.appendChild(li);\n    });\n\n    // Optionally, auto-select the first project in the list\n    const anyActive = ul.querySelector('.active');\n    if (projects.length > 0 && !anyActive) {\n        ul.children[0].click();\n    }\n}\n\nfunction displayTodosForProject(projectName) {\n    const projectManager = (0,_projectManagerModule__WEBPACK_IMPORTED_MODULE_1__.getProjectManager)();\n    const todos = projectManager.getTodosByProject(projectName);\n    const todosList = document.getElementById('todoItemsList');\n    // Clear existing todos\n    todosList.innerHTML = '';\n\n    todos.forEach(todo => {\n        const li = document.createElement('li');\n        li.textContent = `${todo.title}: ${todo.description} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;\n        \n        // Create a delete button\n        const deleteBtn = document.createElement('button');\n        deleteBtn.textContent = 'Delete';\n        deleteBtn.className = 'deleteBtn';\n        deleteBtn.onclick = function() {\n            projectManager.removeTodoFromProject(projectName, todo.title);\n            updateProjectListUI();\n            (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.saveData)(projectManager);\n        };\n        li.appendChild(deleteBtn);\n\n        todosList.appendChild(li);\n    });\n\n\n\n    if (todos.length === 0) {\n        const emptyMesg = document.createElement('li');\n        emptyMesg.textContent = 'No todos for his project.';\n        todosList.appendChild(emptyMesg);\n    }\n}\n\n//# sourceURL=webpack://top-todo-list/./src/ui.js?");

/***/ }),

/***/ "./src/userinteractions.js":
/*!*********************************!*\
  !*** ./src/userinteractions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeTodoModal: () => (/* binding */ closeTodoModal),\n/* harmony export */   setupAddProjectButton: () => (/* binding */ setupAddProjectButton),\n/* harmony export */   setupAddTodoForm: () => (/* binding */ setupAddTodoForm),\n/* harmony export */   setupAddTodoModal: () => (/* binding */ setupAddTodoModal)\n/* harmony export */ });\n/* harmony import */ var _projectManagerModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManagerModule */ \"./src/projectManagerModule.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructors */ \"./src/constructors.js\");\n\n\n\n\n\nfunction setupAddProjectButton() {\n    const addProjectButton = document.getElementById('addProject');\n\n    addProjectButton.addEventListener('click', function() {\n        const projectName = prompt('Enter the name of the new project:');\n        if (projectName) {\n            const projectManager = (0,_projectManagerModule__WEBPACK_IMPORTED_MODULE_0__.getProjectManager)();\n            projectManager.addProject(projectName);\n            (0,_ui__WEBPACK_IMPORTED_MODULE_1__.updateProjectListUI)();\n            (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveData)(projectManager);\n        } else {\n            alert('Project creation was cancelled or no name was entered.');\n        }\n    });\n}\n\nfunction setupAddTodoModal() {\n    // Get the modal\n    let modal = document.getElementById('addTodoModal');\n\n    // Get the button that opens the modal\n    let btn = document.getElementById('addTodo');\n\n    // Get the <span> element that closes the modal\n    let span = document.getElementsByClassName('close')[0];\n\n    // When the user clicks the button, open the modal\n    btn.onclick = function() {\n        populateProjectDropdown();\n        modal.style.display = 'block';\n    }\n\n    // When the user clicks on <span> (x), close the modal\n    span.onclick = function() {\n        modal.style.display = 'none';\n    }\n\n    // When the user clicks anywhere outside of the modal, close it\n    window.onclick = function (event) {\n        if (event.target == modal) {\n            modal.style.display = 'none';\n        }\n    }\n\n    closeTodoModal();\n}\n\nfunction closeTodoModal() {\n    // Get the modal\n    let modal = document.getElementById('addTodoModal');\n\n    // Close the modal\n    modal.style.display = 'none';\n}\n\nfunction populateProjectDropdown() {\n    const projectDropdown = document.getElementById('todoProject');\n    // Clear existing options\n    projectDropdown.innerHTML = '';\n\n    // Fetch projects\n    const projects = (0,_projectManagerModule__WEBPACK_IMPORTED_MODULE_0__.getProjectManager)().getProjects();\n    projects.forEach(project => {\n        const option = document.createElement('option');\n        option.value = project.name;\n        option.textContent = project.name;\n        projectDropdown.appendChild(option);\n    });\n}\n\nfunction setupAddTodoForm() {\n    const addTodoForm = document.getElementById('addTodoForm');\n\n    addTodoForm.addEventListener('submit', function(event) {\n        // Prevent form from submitting the traditional way\n        event.preventDefault();\n\n        // Collect form data and use it to add a todo\n        const title = document.getElementById('todoTitle').value;\n        const description = document.getElementById('todoDescription').value;\n        const dueDate = document.getElementById('todoDueDate').value;\n        const projectName = document.getElementById('todoProject').value;\n        const priority = document.getElementById('todoPriority').value;\n\n        const projectManager = (0,_projectManagerModule__WEBPACK_IMPORTED_MODULE_0__.getProjectManager)();    \n        var todo = new _constructors__WEBPACK_IMPORTED_MODULE_3__.TodoItem(title, description, projectName, dueDate, priority);\n        projectManager.addTodoToProject(todo);\n\n        // Close modal and update UI\n        closeTodoModal();\n        (0,_ui__WEBPACK_IMPORTED_MODULE_1__.updateProjectListUI)();\n\n        // Save the updated manager state\n        (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveData)(projectManager);\n    });\n}\n\n\n//# sourceURL=webpack://top-todo-list/./src/userinteractions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;