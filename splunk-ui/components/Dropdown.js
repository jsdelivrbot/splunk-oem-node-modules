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
/******/ 	return __webpack_require__(__webpack_require__.s = 405);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/errorHandling");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Box");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/guid");

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Dropdown.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Dropdown.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Popover");

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".main_Dropdown__guid__c2aca7{position:relative;-webkit-flex-shrink:1;flex-shrink:1}[data-inline]+.main_Dropdown__guid__c2aca7[data-inline]{margin-left:10px}","enterprise":".main_Dropdown__guid__c2aca7{position:relative;-webkit-flex-shrink:1;flex-shrink:1}[data-inline]+.main_Dropdown__guid__c2aca7[data-inline]{margin-left:10px}"};
var themeLocals = {"lite":{"main":"main_Dropdown__guid__c2aca7"},"enterprise":{"main":"main_Dropdown__guid__c2aca7"}};
var isLite =
    window.__splunkd_partials__ &&
    window.__splunkd_partials__['/services/server/info'] &&
    window.__splunkd_partials__['/services/server/info']
        .entry[0].content.product_type === 'lite';
var theme = window.__splunk_ui_theme__ || (isLite ? 'lite' : 'enterprise');

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
var guid = module.guid ||  s4() + s4() + s4() + s4();
// Add guid to locals
Object.keys(themeLocals[theme]).forEach(function(className) {
    var value = themeLocals[theme][className];
    themeLocals[theme][className] =
        value.replace(/_guid_/g, guid);
 });
//  Add guid to styles
styles[theme] = styles[theme].replace(/_guid_/g, guid);
module.exports = [[module.i, styles[theme], '']];
module.exports.locals = themeLocals[theme];
module.guid = guid;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(6);

var _errorHandling = __webpack_require__(10);

var _guid = __webpack_require__(16);

var _guid2 = _interopRequireDefault(_guid);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Popover = __webpack_require__(20);

var _Popover2 = _interopRequireDefault(_Popover);

var _Dropdown = __webpack_require__(187);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Dropdown is a general purpose container that overlays the page and is anchored to a toggle
* element.
*/
var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown(props) {
        var _ref;

        _classCallCheck(this, Dropdown);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleContainerMount = function (component) {
            _this.setState({
                anchor: component
            });
        };

        _this.handleToggleClick = function (event) {
            if (_this.props.toggle.props.onClick) {
                _this.props.toggle.props.onClick(event);
            }
            if (_this.isOpen()) {
                _this.handleRequestClose({
                    reason: 'toggleClick',
                    event: event
                });
            } else {
                _this.props.onRequestOpen(event, { reason: 'toggleClick' });

                if (!_this.isControlled()) {
                    _this.setState({
                        open: true
                    });
                }
            }
        };

        _this.handleRequestClose = function (info) {
            var reason = info.reason,
                event = info.event;
            var _this$props = _this.props,
                closeReasons = _this$props.closeReasons,
                focusToggleReasons = _this$props.focusToggleReasons,
                onRequestClose = _this$props.onRequestClose;


            if (reason === 'clickAway') {
                var el = event.target;
                var toggleId = _this.props.toggle.props.id || _this.toggleId;

                while (el) {
                    // Ignore clicks on toggle.
                    if (el.id === toggleId) {
                        return;
                    }
                    el = el.parentNode;
                }
            }

            if (_this.isOpen() && (0, _lodash.includes)(closeReasons, reason)) {
                if ((0, _lodash.includes)(focusToggleReasons, reason)) {
                    _this.focus();
                }
                if (!_this.isControlled()) {
                    _this.setState({
                        open: false
                    });
                }
                onRequestClose(info);
            }
        };

        _this.handleContentClick = function (event) {
            _this.handleRequestClose({
                reason: 'contentClick',
                event: event
            });
        };

        _this.state = {
            open: false,
            anchor: null
        };
        _this.controlledExternally = (0, _lodash.has)(props, 'open');

        _this.menuId = (0, _guid2.default)();
        _this.toggleId = (0, _guid2.default)();
        return _this;
    }
    /**
     * Enumeration of the possible reasons for closing the Select.
     * 'clickAway', 'escapeKey', and 'offScreen' are inherited from Popover, but repeated here for
     * docs extraction.
     */


    _createClass(Dropdown, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'open')) {
                (0, _errorHandling.invariant)('Cannot change Dropdown from an uncontrolled component to a controlled\n                one. Prop \'open\' is not valid in subsequent renders if not provided in the initial\n                render');
            }
        }
    }, {
        key: 'isOpen',
        value: function isOpen() {
            return this.isControlled() ? this.props.open : this.state.open;
        }
    }, {
        key: 'focus',


        /**
         * Place focus on the toggle.
         */
        value: function focus() {
            if (this.toggle && this.toggle.focus) {
                this.toggle.focus();
            }
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'renderToggle',
        value: function renderToggle() {
            var _this2 = this;

            return (0, _react.cloneElement)(this.props.toggle, {
                onClick: this.handleToggleClick,
                style: (0, _lodash.extend)({ minWidth: '100%' }, this.props.toggle.props.style),
                ref: function ref(c) {
                    return _this2.toggle = c;
                },
                'aria-haspopup': true,
                'aria-owns': this.menuId,
                id: this.props.toggle.props.id || this.toggleId
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                canCoverAnchor = _props.canCoverAnchor,
                children = _props.children,
                className = _props.className,
                closeReasons = _props.closeReasons,
                defaultPlacement = _props.defaultPlacement,
                inline = _props.inline,
                repositionMode = _props.repositionMode,
                retainFocus = _props.retainFocus,
                scrollContainer = _props.scrollContainer;
            var anchor = this.state.anchor;
            var handleRequestClose = this.handleRequestClose,
                handleContentClick = this.handleContentClick;
            /* eslint-disable jsx-a11y/no-static-element-interactions */

            return _react2.default.createElement(
                _Box2.default,
                _extends({
                    ref: this.handleContainerMount,
                    className: (0, _toClassName2.default)(_Dropdown2.default.main, className),
                    inline: inline
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(this.props, Object.keys(Dropdown.propTypes))),
                this.renderToggle(),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: !!anchor && this.isOpen(),
                        autoCloseWhenOffScreen: (0, _lodash.includes)(closeReasons, 'offScreen'),
                        anchor: anchor,
                        appearance: 'light',
                        canCoverAnchor: canCoverAnchor,
                        retainFocus: retainFocus,
                        defaultPlacement: defaultPlacement,
                        onRequestClose: handleRequestClose,
                        repositionMode: repositionMode,
                        scrollContainer: scrollContainer,
                        id: this.menuId,
                        'aria-labelledby': this.props.toggle.props.id || this.toggleId,
                        takeFocus: true
                    },
                    (0, _lodash.isFunction)(children) ? function () {
                        return _react2.default.createElement(
                            'div',
                            { onClick: handleContentClick },
                            children.apply(undefined, arguments)
                        );
                    } : _react2.default.createElement(
                        'div',
                        { onClick: handleContentClick },
                        children
                    )
                )
            );
            /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
    }]);

    return Dropdown;
}(_react.Component);

Dropdown.possibleCloseReasons = ['clickAway', 'contentClick', 'escapeKey', 'offScreen', 'toggleClick'];
Dropdown.propTypes = {
    /**
     * If there is not enough room to render the `Dropdown` in a direction, this option
     * enables it to be rendered over the toggle.
     */
    canCoverAnchor: _propTypes2.default.bool,
    /**
     * The content of the `Dropdown`. If a function is provided, it will be invoked with an
     * object containing `anchorHeight`, `anchorWidth`, `maxHeight`, `maxWidth`, and
     * `placement`.
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /**
     * An array of reasons for which this `Dropdown` should close.
     */
    closeReasons: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(Dropdown.possibleCloseReasons)),
    /**
     * The default placement of the `Dropdown`. It might be rendered in a different direction
     * depending upon the space available and the `repositionMode`.
     */
    defaultPlacement: _propTypes2.default.oneOf(['above', 'below', 'left', 'right', 'vertical', 'horizontal']),
    /**
     * An array of reasons for which to set focus on the toggle. Only subset of `closeReasons`
     * will be honored. When Menu.Items open a Modal or other dialog, it may be necessary to
     * remove the 'contentClick' reason to allow focus to be passed to the dialog.
     */
    focusToggleReasons: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(Dropdown.possibleCloseReasons)),
    /**
     * Inline or block element.
     * Setting inline to false will remove the dropdown fills the width of it's container.
     */
    inline: _propTypes2.default.bool,
    /**
     * A callback function invoked with a data object containing the event (if applicable) and
     * a reason for the close request.
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * A callback function invoked with a data object containing the event. (The reason is
     * always toggleClick).
     */
    onRequestOpen: _propTypes2.default.func,
    /**
     * If an open prop is provided, this component will behave as a
     * [controlled component](https://facebook.github.io/react/docs/forms.html#controlled-components).
     * This means that the consumer is responsible for handling the open/close state. If no
     * open prop is provided, the component will handle the open/close state internally.
     */
    open: _propTypes2.default.bool,
    /**
     * See `repositionMode` on `Popover` for details.
     */
    repositionMode: _propTypes2.default.oneOf(['none', 'flip', 'any']),
    /**
     * Keep focus within the Popover while open. Note, Menu handles it's own focus by default,
     * so this is only necessary when the popover contains other types of content.
     */
    retainFocus: _propTypes2.default.bool,
    /**
     * The container with which the popover must scroll to stay aligned with the anchor.
     */
    scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    /**
    * A toggle, such as a button, must be a passed.
    * Recommendation: The element should have a `focus` method to support keyboard navigation
    * and accessibility.
    */
    toggle: _propTypes2.default.element.isRequired
};
Dropdown.defaultProps = {
    canCoverAnchor: true,
    closeReasons: Dropdown.possibleCloseReasons,
    defaultPlacement: 'below',
    focusToggleReasons: ['contentClick', 'escapeKey', 'toggleClick'],
    inline: true,
    onRequestClose: function noop() {},
    onRequestOpen: function noop() {},
    retainFocus: false,
    repositionMode: 'flip',
    scrollContainer: 'window'
};
exports.default = Dropdown;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Dropdown/Dropdown.jsx"))

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/toClassName");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })

/******/ });