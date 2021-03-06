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
/******/ 	return __webpack_require__(__webpack_require__.s = 502);
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

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Gear;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function Gear(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Gear')
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M1316.096 890.753l167.466-47.26c8.22 0 16.438-11.3 16.438-19.52V676.027c0-8.22-8.22-19.52-16.438-19.52l-167.466-47.26c-7.192 0-19.52-11.302-19.52-19.52L1250.34 476.71c-4.11-8.22-4.11-19.52 0-27.74l85.274-152.054c4.11-8.22 4.11-19.52-4.11-23.63l-104.794-104.795c-4.11-8.22-15.41-8.22-23.63-4.11l-152.055 85.275c-8.22 4.11-19.52 4.11-27.74 0l-113.013-46.233c-8.22 0-19.52-12.33-19.52-19.52l-47.26-167.467C843.493 8.218 832.19 0 823.973 0H676.026c-8.22 0-19.52 8.22-19.52 16.438l-47.26 167.466c0 7.192-11.302 19.52-19.52 19.52l-117.124 50.343c-7.192 4.11-19.52 4.11-27.74 0l-147.945-89.383c-8.22-4.11-19.52-4.11-23.63 4.11L168.493 273.287c-8.22 4.11-8.22 15.41-4.11 23.63l89.384 147.945c4.11 8.22 4.11 20.548 0 27.74l-50.342 121.233c-4.11 8.22-12.33 19.52-19.52 19.52l-167.467 43.15C8.218 659.59 0 667.81 0 676.027v147.947c0 8.22 8.22 16.438 16.438 19.52l167.466 43.15c7.192 0 15.41 11.302 19.52 19.52l50.343 121.234c4.11 7.192 4.11 19.52 0 27.74l-89.383 147.945c-4.11 8.22-4.11 19.52 4.11 23.63l104.794 104.795c4.11 8.22 15.41 8.22 23.63 4.11l147.945-89.384c8.22-4.11 20.548-4.11 27.74 0l121.233 50.342c8.22 4.11 19.52 12.33 19.52 19.52l43.15 167.467c3.083 8.22 11.302 16.438 19.52 16.438h147.947c8.22 0 19.52-8.22 19.52-16.438l43.15-167.466c0-7.192 11.302-15.41 19.52-19.52l117.125-46.234c8.22-4.11 19.52-4.11 27.74 0l152.054 85.274c8.22 4.11 19.52 4.11 23.63-4.11l104.795-104.794c8.22-4.11 8.22-15.41 4.11-23.63l-85.275-152.055c-4.11-8.22-4.11-19.52 0-27.74l46.233-113.013c0-8.22 12.33-19.52 19.52-19.52zM750 1050c-162.33 0-300-137.67-300-300s137.67-300 300-300 300 137.67 300 300-137.67 300-300 300z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/Gear.jsx"))

/***/ })

/******/ });