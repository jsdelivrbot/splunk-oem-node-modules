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
/******/ 	return __webpack_require__(__webpack_require__.s = 487);
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

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DataInput;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function DataInput(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Data Input'),
            viewBox: '0 0 1480 1500'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M739.865 460.135c-130.406 0-252.027-10.642-364.865-31.926-112.838-21.284-202.027-49.494-267.568-84.63-65.54-35.134-98.31-72.634-98.31-112.5 0-39.864 32.77-77.533 98.31-113.006C172.972 82.6 262.162 54.054 375 32.432 487.838 10.812 609.46 0 739.865 0s252.196 10.81 365.37 32.432c113.177 21.622 202.535 50.17 268.076 85.642 65.54 35.473 98.312 73.142 98.312 113.007 0 39.866-32.94 77.366-98.818 112.5-65.878 35.136-155.236 63.346-268.074 84.63-112.838 21.283-234.46 31.925-364.865 31.925zm-63.85 126.69L675 1055.067l-225-225-91.216 90.202 381.08 382.095 381.082-381.08-91.216-91.217-225 225V586.824h83.108c170.27-9.46 310.98-34.12 422.128-73.986 111.15-39.865 167.737-86.824 169.764-140.88v894.934c0 29.73-19.595 58.784-58.784 87.162-39.19 28.378-91.554 53.21-157.095 74.493-65.54 21.284-144.424 38.514-236.654 51.69C934.966 1493.41 839.19 1500 739.866 1500c-99.325 0-194.934-6.588-286.825-19.764-91.89-13.175-170.608-30.405-236.148-51.69-65.54-21.282-117.737-46.114-156.588-74.492-38.85-28.378-58.277-57.432-58.277-87.162L0 369.932c0 35.136 26.014 68.075 78.04 98.818C130.07 499.493 201.015 525 290.88 545.27c89.865 20.27 190.54 33.784 302.027 40.54l83.11 1.014z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/DataInput.jsx"))

/***/ })

/******/ });