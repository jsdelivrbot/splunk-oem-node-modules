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
/******/ 	return __webpack_require__(__webpack_require__.s = 539);
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

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ReportSearch;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function ReportSearch(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Report Search'),
            viewBox: '0 0 1275 1500'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M820.89 995.548l125.343 165.41c8.904 10.96 12.5 22.946 10.788 35.96-1.712 13.014-8.047 23.972-19.006 32.877-10.274 8.904-22.432 12.67-36.473 11.3-14.04-1.37-25.513-8.218-34.417-20.547l-124.315-163.356c-43.835 24.657-91.438 36.986-142.808 36.986-82.192 0-152.74-29.452-211.644-88.356C329.452 946.918 300 876.37 300 794.178c0-82.192 29.452-152.74 88.356-211.644C447.26 523.63 517.808 494.178 600 494.178c82.192 0 152.74 29.452 211.644 88.356C870.548 641.438 900 711.986 900 794.178c0 77.397-26.37 144.52-79.11 201.37zM400.685 792.123c0 54.795 19.52 101.884 58.562 141.267 39.04 39.384 85.958 59.076 140.753 59.076 54.795 0 102.055-19.692 141.78-59.076 39.727-39.383 59.59-86.472 59.59-141.267 0-54.11-19.863-100.856-59.59-140.24C702.056 612.5 654.796 592.81 600 592.81s-101.712 19.52-140.753 58.562c-39.042 39.04-58.562 85.96-58.562 140.753zM0 1500V0h975l300 300v1200H0zM900 134.59V375h247.603L900 134.59zM148.973 150v1201.027H1125V450H825V150H148.973z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/ReportSearch.jsx"))

/***/ })

/******/ });