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
/******/ 	return __webpack_require__(__webpack_require__.s = 544);
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

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Settings;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function Settings(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Settings'),
            viewBox: '0 0 1500 1429'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M358.12 312.133V108.61C358.12 45.99 314.09 0 252.447 0c-62.622 0-108.61 45.988-108.61 108.61v202.545C58.708 351.272 0 437.378 0 537.182 0 637.965 58.708 724.07 143.836 764.188v555.773c0 62.623 44.03 108.61 105.675 108.61 62.623 0 108.61-45.987 108.61-108.61V763.21C442.27 723.09 500 636.985 500 537.18c0-98.826-57.73-184.932-141.88-225.05zm500 500V108.61C858.12 45.99 814.09 0 752.447 0c-62.622 0-108.61 45.988-108.61 108.61v702.545C558.708 851.272 500 937.378 500 1037.182c0 100.783 58.708 186.888 143.836 227.006v55.773c0 62.623 44.03 108.61 105.675 108.61 62.623 0 108.61-45.987 108.61-108.61v-56.75C942.27 1223.09 1000 1136.985 1000 1037.18c0-98.826-57.73-184.932-141.88-225.05zm500-644.814v-58.71C1358.12 45.99 1314.09 0 1252.447 0c-62.622 0-108.61 45.988-108.61 108.61v57.73C1058.708 206.46 1000 292.565 1000 392.37c0 100.783 58.708 186.888 143.836 227.006v700.587c0 62.623 44.03 108.61 105.675 108.61 62.623 0 108.61-45.987 108.61-108.61V618.396C1442.27 578.278 1500 492.172 1500 392.368c0-98.826-57.73-184.932-141.88-225.05zM1251.47 571.43c-98.826 0-179.06-80.236-179.06-179.062 0-97.847 80.234-178.082 179.06-178.082 97.847 0 178.082 80.235 178.082 178.082 0 98.826-80.235 179.06-178.082 179.06zM250.488 716.242c-98.825 0-179.06-80.235-179.06-179.06 0-97.848 80.235-178.083 179.06-178.083 97.85 0 178.083 80.235 178.083 178.082 0 98.826-80.233 179.06-178.08 179.06zm500.98 500c-98.826 0-179.06-80.235-179.06-179.06 0-97.848 80.234-178.083 179.06-178.083 97.847 0 178.082 80.235 178.082 178.082 0 98.826-80.235 179.06-178.082 179.06z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/Settings.jsx"))

/***/ })

/******/ });