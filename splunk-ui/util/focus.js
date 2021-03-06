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
/******/ 	return __webpack_require__(__webpack_require__.s = 572);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("keycode");

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSortedTabableElements = getSortedTabableElements;
exports.handleTab = handleTab;
exports.takeFocus = takeFocus;

var _keycode = __webpack_require__(32);

var _keycode2 = _interopRequireDefault(_keycode);

var _lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A helper method that will enforce circular tabbing inside the given container (i.e. tabbing from
 * the last element will wrap around to the first element and reverse tabbing from the first element
 * will wrap around to the last).
 *
 * Will only set focus on the next element if the event's target is inside the container, and if it
 * does, will prevent the default action of the event.
 *
 * @param $container (element) the container that should enforce the circular tabbing.
 * @param event (DOM event object) the keydown event that initiated the tabbing action.
 * @returns (element) the element that was focused, or null if no element was focused.
 */

var tabbableSelectors = 'a[href], input:not([disabled]), select:not([disabled]),\n     textarea:not([disabled]), button:not([disabled]), [tabindex], [contenteditable]';

function getSortedTabableElements(container) {
    var elems = container.querySelectorAll(tabbableSelectors);
    var tabbableElems = (0, _lodash.filter)(elems, function (el) {
        return el.tabIndex >= 0;
    });
    return (0, _lodash.sortBy)(tabbableElems, function (el) {
        if (el.tabIndex > 0) {
            return -1 / el.tabIndex;
        }
        return el.tabIndex;
    });
}

function handleTab(container, event) {
    // Ensure this is a valid event
    if ((0, _keycode2.default)(event) !== 'tab' || event.metaKey || event.altKey || event.controlKey) {
        return null;
    }
    var tabbableElements = getSortedTabableElements(container);
    if (tabbableElements.length === 0) {
        // if the container is focused, don't allow the focus to leave.
        if (document.activeElement === container) {
            event.preventDefault();
            return container;
        }

        return null;
    }

    // Find the current index or set default.
    var currentElement = event && event.target || container.querySelector(':focus');
    var currentIndex = tabbableElements.indexOf(currentElement);
    if (currentIndex === -1) {
        currentIndex = event.shiftKey ? 0 : tabbableElements.length - 1;
    }

    // Shift the array instead of the current index.
    if (event.shiftKey) {
        tabbableElements.unshift(tabbableElements.pop()); // move last to first
    } else {
        tabbableElements.push(tabbableElements.shift()); // move first to last
    }

    // Focus
    event.preventDefault();
    tabbableElements[currentIndex].focus();
    return tabbableElements[currentIndex];
}

/**
 * A helper method that will focus on the first focusable element in a container.
 * If a contained element already has focus, focus will not shift.
 *
 * @param container (element) the container that should take focus.
 * @param defaultElement ('container' or 'first') defaults to 'first'.
 * @returns (element) the element that was focused, or null if no element was focused.
 */

function takeFocus(container) {
    var defaultElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'first';

    var currentElement = container.querySelector(':focus');
    if (currentElement) {
        return currentElement;
    }
    if (defaultElement === 'first') {
        var targetEl = getSortedTabableElements(container)[0];
        if (targetEl) {
            (0, _lodash.defer)(function () {
                return targetEl.focus();
            });
            return targetEl;
        }
    }
    if (container.hasAttribute('tabIndex')) {
        (0, _lodash.defer)(function () {
            return container.focus();
        });
        return container;
    }
    return null;
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });