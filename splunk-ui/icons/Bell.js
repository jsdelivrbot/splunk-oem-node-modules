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
/******/ 	return __webpack_require__(__webpack_require__.s = 453);
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

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Bell;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function Bell(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Bell'),
            viewBox: '0 0 1384 1500'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M840.94 75.613v73.57c84.47 21.798 152.59 59.945 204.36 114.44 51.77 54.497 83.106 118.19 94.005 191.077l74.59 409.74c9.538 53.135 31.337 98.435 65.397 135.9 69.482 76.976 104.223 141.35 104.223 193.12 0 55.86-30.824 107.29-92.473 154.292-61.648 47.003-145.606 84.128-251.873 111.376C932.9 1486.376 817.097 1500 691.756 1500c-125.34 0-241.144-13.624-347.41-40.872-106.268-27.248-190.226-64.373-251.874-111.376C30.823 1300.75 0 1249.32 0 1193.46c0-51.09 35.082-115.463 105.245-193.12 12.943-14.305 22.65-25.885 29.12-34.74 6.473-8.856 13.115-21.118 19.927-36.785 6.812-15.668 11.92-33.72 15.327-54.156l74.59-419.96c10.9-72.888 42.234-136.58 94.005-191.076 51.77-54.496 119.89-92.643 204.36-114.44v-73.57c0-21.8 7.153-39.85 21.458-54.156C578.338 7.153 596.39 0 618.188 0h147.14c21.797 0 39.85 7.153 54.154 21.458 14.305 14.305 21.458 32.357 21.458 54.155zm-149.183 1324.25c102.862 0 197.89-9.195 285.082-27.588 87.193-18.392 156.164-43.426 206.913-75.102 50.75-31.676 76.124-66.247 76.124-103.713 0-37.465-25.374-72.036-76.124-103.712-50.75-31.676-119.72-56.71-206.914-75.102-87.194-18.393-182.22-27.59-285.083-27.59-102.86 0-197.888 9.197-285.08 27.59-87.195 18.392-156.166 43.426-206.915 75.102-50.75 31.676-76.124 66.247-76.124 103.712 0 37.466 25.374 72.037 76.124 103.713 50.75 31.676 119.72 56.71 206.914 75.102 87.193 18.393 182.22 27.59 285.08 27.59zm0-317.78c-158.72 2.045-288.147 22.822-388.283 62.33 14.986 32.7 42.234 58.414 81.744 77.147 39.51 18.733 85.49 26.737 137.943 24.012 66.758-1.362 122.106-17.03 166.043-47.003 43.937-29.973 66.247-68.12 66.928-114.442l1.023-2.044c-17.712-1.362-28.27-1.703-31.676-1.02-2.044-1.364-8.004-1.534-17.882-.512-9.877 1.022-15.156 1.532-15.838 1.532z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/Bell.jsx"))

/***/ })

/******/ });