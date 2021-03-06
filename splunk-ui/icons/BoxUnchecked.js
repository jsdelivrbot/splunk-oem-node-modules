module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 458);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/testSupport");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/SVG");

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BoxUnchecked;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function BoxUnchecked(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Box Unchecked')
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M0 1346.918V153.082c0-44.52 14.384-81.164 43.15-109.93C71.92 14.383 108.563 0 153.083 0h1193.836c44.52 0 81.164 14.384 109.93 43.15C1485.617 71.92 1500 108.563 1500 153.083v1193.836c0 44.52-14.384 81.164-43.15 109.93-28.768 28.768-65.412 43.152-109.932 43.152H153.082c-44.52 0-81.164-14.384-109.93-43.15C14.383 1428.08 0 1391.437 0 1346.917zm225-1045.89v897.945c0 21.917 7.192 40.068 21.575 54.452C260.96 1267.808 279.11 1275 301.027 1275h897.946c21.917 0 40.068-7.192 54.452-21.575 14.383-14.384 21.575-32.535 21.575-54.452V301.027c0-21.917-7.192-40.068-21.575-54.452C1239.04 232.192 1220.89 225 1198.973 225H301.027c-21.917 0-40.068 7.192-54.452 21.575C232.192 260.96 225 279.11 225 301.027z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/BoxUnchecked.jsx"))

/***/ })

/******/ });