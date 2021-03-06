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
/******/ 	return __webpack_require__(__webpack_require__.s = 510);
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

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LabelRotationMinus90;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _testSupport = __webpack_require__(1);

var _i18n = __webpack_require__(2);

var _SVG = __webpack_require__(3);

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
function LabelRotationMinus90(props) {
    return _react2.default.createElement(
        _SVG2.default,
        _extends({
            screenReaderText: (0, _i18n._)('Label Rotation Minus 90'),
            viewBox: '0 0 796 1500'
        }, (0, _testSupport.createTestHook)(__filename), props),
        _react2.default.createElement('path', { d: 'M533.498 517.822h-10.254c-90.332 0-161.62 18.433-213.867 55.298-52.246 36.865-78.37 89.234-78.37 157.105 0 67.87 25.39 118.896 76.173 153.076l-.733 2.198H.295v93.018h785.89V897.95l-72.51-8.79c54.686-35.644 82.03-89.11 82.03-160.4 0-66.895-23.315-118.775-69.946-155.64-46.632-36.865-110.72-55.298-192.262-55.298zm-10.254 93.018h10.254c58.594 0 104.004 11.72 136.23 35.156 32.227 23.438 48.34 58.838 48.34 106.2 0 61.036-28.32 105.47-84.96 133.302H393.604c-56.64-28.32-84.96-72.51-84.96-132.568 0-46.875 19.165-82.276 57.495-106.2 38.33-23.927 90.698-35.89 157.104-35.89zm197.754-393.31c0 99.12-65.674 148.68-197.02 148.68h-21.242c-60.058 0-107.788-11.962-143.188-35.888-35.4-23.926-53.1-61.523-53.1-112.793 0-37.598 11.474-68.36 34.423-92.286 22.95-23.926 52.003-36.133 87.16-36.62V0C370.41.488 323.17 20.874 286.305 61.157c-36.866 40.283-55.298 92.407-55.298 156.372 0 77.636 24.902 137.45 74.707 179.443 49.805 41.992 115.478 62.988 197.02 62.988h21.242c82.03 0 147.827-20.995 197.387-62.987 49.56-41.993 74.34-101.807 74.34-179.444 0-59.083-17.82-109.986-53.466-152.71C706.594 22.094 663.868.487 614.064 0v88.623c30.762.488 56.275 13.306 76.54 38.452 20.262 25.147 30.394 55.298 30.394 90.454zm65.186 930.175v-95.947c-30.762 9.277-67.383 13.916-109.864 13.916H413.38c-58.593 0-103.637 18.432-135.13 55.298-31.495 36.865-47.242 87.28-47.242 151.245 0 62.5 15.99 114.136 47.973 154.907 31.984 40.772 69.704 61.157 113.16 61.157v-93.016c-24.413 0-44.8-10.987-61.157-32.96-16.357-21.972-24.536-50.292-24.536-84.96 0-37.598 9.278-66.65 27.832-87.158 18.554-20.508 44.433-30.762 77.636-30.762h55.664v104.736c0 74.22 14.526 132.08 43.58 173.584C540.21 1479.248 581.104 1500 633.84 1500c51.758 0 91.675-14.648 119.75-43.945 28.077-29.297 42.115-72.266 42.115-128.907 0-33.69-7.812-65.063-23.437-94.116-15.625-29.053-36.866-53.59-63.72-73.608 16.112-.977 41.99-4.883 77.636-11.72zm-70.313 165.527c0 30.762-6.957 54.078-20.873 69.947-13.916 15.868-33.57 23.802-58.96 23.802-29.297 0-53.955-12.695-73.975-38.086-20.02-25.39-30.03-59.326-30.03-101.806v-107.666h100.343c24.414 12.695 44.434 32.96 60.06 60.79 15.624 27.833 23.436 58.84 23.436 93.018z' })
    );
}
/* WEBPACK VAR INJECTION */}.call(exports, "src/icons/LabelRotationMinus90.jsx"))

/***/ })

/******/ });