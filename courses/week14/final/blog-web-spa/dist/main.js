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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _classes_FetchApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/FetchApi */ \"./src/classes/FetchApi.js\");\n/* harmony import */ var _page_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/HomePage */ \"./src/page/HomePage.js\");\n/* harmony import */ var _page_AboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/AboutPage */ \"./src/page/AboutPage.js\");\n\n\n\n\nclass App {\n  constructor(appDOM) {\n    this.appDOM = appDOM;\n    this.fetchApi = new _classes_FetchApi__WEBPACK_IMPORTED_MODULE_0__[\"FetchApi\"]('http://localhost:3000');\n    this.homePage = new _page_HomePage__WEBPACK_IMPORTED_MODULE_1__[\"HomePage\"](this.fetchApi);\n    this.aboutPage = new _page_AboutPage__WEBPACK_IMPORTED_MODULE_2__[\"AboutPage\"]();\n\n    this.pageUrl = 'home'\n    this.render();\n  }\n\n  renderContent() {\n    this.contentDOM.innerHTML = \"\";\n    switch (this.pageUrl) {\n      case 'home': {\n        const homeDOM = this.homePage.render();\n        this.contentDOM.appendChild(homeDOM);\n        break;\n      }\n      case 'about': {\n        const aboutDOM = this.aboutPage.render();\n        this.contentDOM.appendChild(aboutDOM);\n        break;\n      }\n    }\n  }\n\n  switchPage({ target }) {\n    const pageUrl = target.href.split(\"#\")[1]\n    this.pageUrl = pageUrl;\n    this.renderContent()\n  }\n\n  renderHeader() {\n    const header = document.createElement('header');\n    header.classList.add('app-header');\n\n    header.innerHTML = `\n        <a href=\"#home\" class=\"homeBtn\">Home</a>\n        <a href=\"#about\" class=\"aboutBtn\">About</a>\n    `\n    const links = header.querySelectorAll('a');\n    links.forEach(link => {\n      link.addEventListener('click', this.switchPage.bind(this))\n    })\n    return header;\n  }\n\n  render() {\n    const appHeader = this.renderHeader();\n\n    this.contentDOM = document.createElement('div');\n    this.contentDOM.classList.add('app-content')\n    this.renderContent();\n\n    this.appDOM.appendChild(appHeader);\n    this.appDOM.appendChild(this.contentDOM);\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/classes/Comment.js":
/*!********************************!*\
  !*** ./src/classes/Comment.js ***!
  \********************************/
/*! exports provided: MyComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyComment\", function() { return MyComment; });\n\nclass MyComment {\n  constructor(id, user, text) {\n    this.id = id;\n    this.user = user;\n    this.text = text;\n  }\n  // render nu este nume default, se poate pune orice\n  // De exemplu la Post am schimba in display\n  // creaza reprezentare unui Comment in html\n  render() {\n    const containerComment = document.createElement('div');\n    containerComment.setAttribute(\"id\", this.id);\n    containerComment.innerHTML = `\n    <span>${this.user}</span>\n    <b>${this.text}</b>\n    `;\n    return containerComment;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/classes/Comment.js?");

/***/ }),

/***/ "./src/classes/FetchApi.js":
/*!*********************************!*\
  !*** ./src/classes/FetchApi.js ***!
  \*********************************/
/*! exports provided: FetchApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchApi\", function() { return FetchApi; });\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ \"./src/classes/Comment.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ \"./src/classes/Post.js\");\n\n\nclass FetchApi {\n  constructor(baseServerUrl) {\n    this.baseServerUrl = baseServerUrl;\n  }\n\n  async getPosts() {\n    const response = await fetch(`${this.baseServerUrl}/posts`);\n    const postsServer = await response.json();\n    const posts = postsServer.map(postServer => new _Post__WEBPACK_IMPORTED_MODULE_1__[\"Post\"](\n      postServer.id,\n      postServer.author,\n      postServer.date,\n      postServer.title,\n      postServer.text\n    ));\n    return posts;\n  }\n\n  async getPostById(postId) {\n    const response = await fetch(`${this.baseServerUrl}/posts/${postId}`);\n    const postServer = await response.json();\n    return postServer;\n  }\n\n  async getCommentsByPostId(postId) {\n    const response = await fetch(`${this.baseServerUrl}/posts/${postId}/comments`);\n    const commentsServer = await response.json();\n    const listComment = [];\n    for (let idx = 0; idx < commentsServer.length; idx++) {\n      const commentServer = commentsServer[idx];\n      const comment = new _Comment__WEBPACK_IMPORTED_MODULE_0__[\"MyComment\"](commentServer.id, commentServer.user, commentServer.text);\n      listComment.push(comment);\n    }\n    return listComment;\n  }\n\n  async addComment(postId, userName, commentText) {\n    const url = `${this.baseServerUrl}/posts/${postId}/comments`;\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        user: userName,\n        text: commentText\n      })\n    });\n    const commentServer = await response.json();\n    const comment = new _Comment__WEBPACK_IMPORTED_MODULE_0__[\"MyComment\"](commentServer.id, commentServer.user, commentServer.text);\n    return comment;\n  }\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/classes/FetchApi.js?");

/***/ }),

/***/ "./src/classes/Post.js":
/*!*****************************!*\
  !*** ./src/classes/Post.js ***!
  \*****************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\n// functie constructor - clasa cu ajutor ei face obiect de tip Post\n// este ca o macheta cu ajutor carei face mai multe obiecte\nclass Post {\n  constructor(id, author, date, title, text) {\n    this.id = id;\n    this.author = author;\n    this.title = title;\n    this.text = text;\n    this.date = date;\n    this.commentList = [];\n  }\n\n  // creaza reprezentare unei post in HTML\n  display() {\n    const containerListComment = document.createElement('div');\n    containerListComment.classList.add('comment-list');\n    // parcurgem lista de comentari\n    for (let i = 0; i < this.commentList.length; i++) {\n      const comment = this.commentList[i];\n      const commentNode = comment.render();\n      containerListComment.appendChild(commentNode);\n    }\n    const containerPost = document.createElement('div');\n    containerPost.classList.add('post');\n    containerPost.innerHTML = `\n    <h1>${this.title}</h1>\n    <p> ${this.text}</p>\n    `;\n    containerPost.appendChild(containerListComment);\n    return containerPost;\n  }\n  // afisam postul pe prima pagina\n  displayShort() {\n    const containerPost = document.createElement('div');\n    containerPost.classList.add('post');\n    // ca sa trimiteti informati, se foloseste query params\n    // key=valoare&key2=valoare2...\n    // valoare este string\n    containerPost.innerHTML = `\n  <h1>${this.title}</h1>\n  <p> ${this.text.substring(0, 100)}...</p>\n  <a href=\"./view-post.html?id=${this.id}\">View</a>\n    `;\n    return containerPost;\n  }\n  // adauga commentariu in memory\n  addCommentToList(comment) {\n    this.commentList.push(comment);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/classes/Post.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\nconst appDOM = document.getElementById('app')\nconst app = new _App__WEBPACK_IMPORTED_MODULE_0__[\"App\"](appDOM);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/page/AboutPage.js":
/*!*******************************!*\
  !*** ./src/page/AboutPage.js ***!
  \*******************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AboutPage\", function() { return AboutPage; });\nclass AboutPage {\n\n  render() {\n    this.aboutDOM = document.createElement('div');\n    this.aboutDOM.classList.add('about-page')\n    this.aboutDOM.innerHTML = `Ceva despre voi`\n    return this.aboutDOM;\n  }\n}\n\n//# sourceURL=webpack:///./src/page/AboutPage.js?");

/***/ }),

/***/ "./src/page/HomePage.js":
/*!******************************!*\
  !*** ./src/page/HomePage.js ***!
  \******************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePage\", function() { return HomePage; });\nclass HomePage {\n  constructor(fetchApi) {\n    this.fetchApi = fetchApi;\n  }\n\n  async displayPosts() {\n    const posts = await this.fetchApi.getPosts();\n    // afisam posturile in HTML\n    const postsDOM = posts.map(p => p.displayShort());\n    const containerPost = document.createElement('div')\n    containerPost.id = 'listOfPost'\n\n    postsDOM.forEach(postDOM => {\n      containerPost.appendChild(postDOM);\n    })\n\n    return containerPost;\n  }\n\n  render() {\n    this.homeDOM = document.createElement('div');\n    this.homeDOM.classList.add('home-page');\n\n    this.displayPosts().then(containerPost => {\n      this.homeDOM.appendChild(containerPost)\n    });\n\n    return this.homeDOM;\n  }\n}\n\n//# sourceURL=webpack:///./src/page/HomePage.js?");

/***/ })

/******/ });