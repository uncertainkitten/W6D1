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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\n\nfunction Asteroid(hash) {\n  hash.color = \"#cccccc\";\n  hash.radius = 25;\n  hash.vel = Util.randomVec(10);\n  MovingObject.call(this, hash);\n}\n\nUtil.inherits(MovingObject, Asteroid);\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ,\n// \"webpack\": \"webpack\",\n// \"webpack-dev\": \"webpack --mode=development\",\n// \"watch\": \"watch --mode=development\"\n\nconsole.log(\"Webpack is working :O!!!1111\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\nwindow.MovingObject = MovingObject;\n// window.Asteroid = Asteroid;\n\nconst mo = new MovingObject(\n  { pos: [80, 80], vel: [10, 10], radius: 20, color: \"#00FF00\" }\n);\nconst aster = new Asteroid( {pos: [30, 30]});\nconst game = new Game();\nconst gameView = new GameView();\n\nconsole.log(aster);\nconsole.log(mo);\nconsole.log(game);\nconsole.log(gameView);\n\n// document.addEventListener(\"DOMContentLoaded\", function(){\ngameView.start();\n\n// });\n// game.moveObjects();\n//\n// aster.move();\n// mo.move();\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\n\nfunction Game()  {\n  this.DIM_X = 1000;\n  this.DIM_Y = 600;\n  this.NUM_ASTEROIDS = 10;\n  this.addAsteroids();\n}\n\nGame.prototype.randomPosition = function() {\n  const x_min = Math.ceil(0);\n  const x_max = Math.floor(this.DIM_X);\n  const x_pos = Math.floor(Math.random() * (x_max - x_min)) + x_min;\n  const y_min = Math.ceil(0);\n  const y_max = Math.floor(this.DIM_Y);\n  const y_pos = Math.floor(Math.random() * (y_max - y_min)) + y_min;\n  return [x_pos, y_pos];\n};\n\nGame.prototype.addAsteroids = function() {\n  this.asteroids = [];\n  for (let i = this.NUM_ASTEROIDS; i > 0; i--) {\n    this.asteroids.push(new Asteroid({pos: this.randomPosition()}));\n  }\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  this.asteroids.forEach((asteroid) => {\n    asteroid.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function() {\n  this.asteroids.forEach((asteroid) => {\n    asteroid.move();\n  });\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\nfunction GameView() {\n  this.game = new Game();\n}\n\nGameView.prototype.canvas = function() {\n  that = this;\n  document.addEventListener(\"DOMContentLoaded\", function() {\n    const canv = document.getElementById(\"game-canvas\");\n    that.ctx = canv.getContext(\"2d\");\n  });\n};\n\nGameView.prototype.start = function() {\n  that = this;\n  setInterval(function() {\n    that.game.draw(that.ctx);\n    that.game.moveObjects();\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (hash) {\n  this.pos = hash.pos;\n  this.vel = hash.vel;\n  this.radius = hash.radius;\n  this.color = hash.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.fillStyle = `${this.color}`;\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n};\n\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(Parent, Child) {\n    Child.prototype = Object.create(Parent.prototype);\n    Child.prototype.constructor = Child;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });