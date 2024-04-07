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

/***/ "./src/constructors.js":
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager),\n/* harmony export */   TodoItem: () => (/* binding */ TodoItem)\n/* harmony export */ });\nfunction TodoItem(title, description, project, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.project = project;\n    this.dueDate = dueDate;\n    this.priority = priority;\n}\n\nfunction Project(name) {\n    this.name = name;\n    this.todos = [];\n\n    this.addTodo = function(todo) {\n        if (todo instanceof TodoItem) {\n            this.todos.push(todo);\n        }\n    };\n\n    this.removeTodo = function(todoTitle) {\n        this.todos = this.todos.filter(function(todo) {\n            return todo.title !== todoTitle;\n        });\n    };\n}\n\nfunction ProjectManager() {\n    this.projects = {};\n\n    this.addProject = function(name) {\n        if (!this.projects[name]) {\n            this.projects[name] = new Project(name);\n        }\n    };\n\n    this.addTodoToProject = function(todoItem) {\n        if (!this.projects[todoItem.project]) {\n            console.warn(`Project \"${todoItem.project}\" does not exist. Creating it.`);\n            this.addProject(todoItem.project);\n        }\n        this.projects[todoItem.project].addTodo(todoItem);\n    };\n\n    this.removeTodoFromProject = function(projectName, todoTitle) {\n        if (this.projects[projectName]) {\n            this.projects[projectName].removeTodo(todoTitle);\n        }\n    };\n\n    this.getTodosByProject = function(name) {\n        if (this.projects[name]) {\n            return this.projects[name].todos;\n        }\n        return [];\n    };\n}\n\n//# sourceURL=webpack://top-todo-list/./src/constructors.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ \"./src/constructors.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n\n\n\n// Initialize projectManager by capturing the return value of loadData()\nvar projectManager = (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.loadData)();\n\n// Adding projects\nprojectManager.addProject('Work');\nprojectManager.addProject('Personal');\n\n// Creating and adding todos\nvar todo1 = new _constructors__WEBPACK_IMPORTED_MODULE_0__.TodoItem('Finish report', 'Complete the annual report', 'Work', '2024-04-10', 'High');\nvar todo2 = new _constructors__WEBPACK_IMPORTED_MODULE_0__.TodoItem('Buy groceries', 'Milk, Bread, Oranges & Beans', 'Personal', '2024-04-08', 'Medium');\n\nprojectManager.addTodoToProject(todo1);\nprojectManager.addTodoToProject(todo2);\n\n// Displaying todos by project\nconsole.log('Todos for Work: ', projectManager.getTodosByProject('Work'));\nconsole.log('Todos for Personal: ', projectManager.getTodosByProject('Personal'));\n\n// Change todo project\nprojectManager.removeTodoFromProject(todo1.project, todo1.title);\nprojectManager.addProject('Default');\ntodo1.project = 'Default';\nprojectManager.addTodoToProject(todo1);\n\n// Displaying todos by project\nconsole.log('Todos for Default: ', projectManager.getTodosByProject('Default'));\nconsole.log('Todos for Work: ', projectManager.getTodosByProject('Work'));\nconsole.log('Todos for Personal: ', projectManager.getTodosByProject('Personal'));\n\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\n/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ \"./src/constructors.js\");\n\n\n// Save current state to local storage\nfunction saveData(projectManager) {\n    localStorage.setItem('projectManagerData', JSON.stringify(projectManager));\n}\n  \n// Load state from local storage\nfunction loadData() {\n    var projectManager = new _constructors__WEBPACK_IMPORTED_MODULE_0__.ProjectManager(); // Always initialize\n    var data = localStorage.getItem('projectManagerData');\n  \n    if (data) {\n      var parsedData = JSON.parse(data);\n  \n      Object.keys(parsedData.projects).forEach(function(projectName) {\n        projectManager.addProject(projectName);\n  \n        parsedData.projects[projectName].todos.forEach(function(todo) {\n          projectManager.addTodoToProject(new _constructors__WEBPACK_IMPORTED_MODULE_0__.TodoItem(todo.title, todo.description, todo.project, todo.dueDate, todo.priority));\n        });\n      });\n    }\n  \n    return projectManager; // Return the (potentially updated) projectManager\n}\n  \n  \n  \n\n//# sourceURL=webpack://top-todo-list/./src/localstorage.js?");

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