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
/******/ 	return __webpack_require__(__webpack_require__.s = 403);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/keyboard");

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Date.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Date.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Text");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Popover");

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Calendar");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/moment");

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".text_Date__guid__241ddf[data-inline]{width:90px;-webkit-flex-basis:90px;flex-basis:90px}.text_Date__guid__241ddf[data-inline][data-size=large]{width:115px;-webkit-flex-basis:115px;flex-basis:115px}","enterprise":".text_Date__guid__241ddf[data-inline]{width:90px;-webkit-flex-basis:90px;flex-basis:90px}.text_Date__guid__241ddf[data-inline][data-size=large]{width:115px;-webkit-flex-basis:115px;flex-basis:115px}"};
var themeLocals = {"lite":{"text":"text_Date__guid__241ddf"},"enterprise":{"text":"text_Date__guid__241ddf"}};
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

/***/ 403:
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

var _moment = __webpack_require__(28);

var _moment2 = _interopRequireDefault(_moment);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _keyboard = __webpack_require__(12);

var _testSupport = __webpack_require__(1);

var _Calendar = __webpack_require__(261);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Popover = __webpack_require__(20);

var _Popover2 = _interopRequireDefault(_Popover);

var _Text = __webpack_require__(19);

var _Text2 = _interopRequireDefault(_Text);

var _Date = __webpack_require__(185);

var _Date2 = _interopRequireDefault(_Date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Date = function (_Component) {
    _inherits(Date, _Component);

    function Date(props) {
        var _ref;

        _classCallCheck(this, Date);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Date.__proto__ || Object.getPrototypeOf(Date)).call.apply(_ref, [this, props].concat(rest)));

        _initialiseProps.call(_this);

        _this.controlledExternally = (0, _lodash.has)(props, 'value');
        _moment2.default.locale(props.locale);

        var dateString = _this.isControlled() ? props.value : props.defaultValue || (0, _moment2.default)().format('YYYY-MM-DD');
        var dateObject = (0, _moment2.default)(dateString, 'YYYY-MM-DD');
        _this.state = {
            value: _this.isControlled() ? null : dateString,
            displayDate: dateObject,
            calendarOpen: false,
            tempTextInputDate: null
        };

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValue')) {
            (0, _errorHandling.invariant)('Date\'s defaultValue prop is not compatible with value prop.');
        }
        return _this;
    }

    _createClass(Date, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'value')) {
                (0, _errorHandling.invariant)('Cannot change Date from an uncontrolled component to a controlled\n    one. Prop \'value\' is not valid in subsequent updates if not provided in the initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultValue !== this.props.defaultValue) {
                (0, _errorHandling.invariant)('Cannot change defaultValue after set. Consider using a controlled\n                component instead.');
            }
            var dateObject = (0, _moment2.default)(nextProps.value, 'YYYY-MM-DD');
            if (this.isControlled()) {
                this.setState({
                    displayDate: dateObject
                });
            }
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.isControlled() ? this.props.value : this.state.value;
        }
    }, {
        key: 'getTextInputValue',
        value: function getTextInputValue() {
            _moment2.default.locale(this.props.locale);
            return this.state.tempTextInputDate === null ? (0, _moment2.default)(this.getValue(), 'YYYY-MM-DD').format('l') : this.state.tempTextInputDate;
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.state.anchor.focus();
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Text2.default,
                _extends({
                    className: (0, _toClassName2.default)(_Date2.default.text, this.props.className),
                    onChange: this.handleInputChange,
                    onFocus: this.handleFocus,
                    onKeyDown: this.handleKeyDown,
                    value: this.getTextInputValue(),
                    ref: this.handleMount
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(this.props, 'className', 'defaultValue', 'locale', 'onChange', 'value')),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        anchor: this.state.anchor,
                        open: this.state.calendarOpen,
                        onRequestClose: this.handleRequestClose
                    },
                    _react2.default.createElement(_Calendar2.default, {
                        value: this.getValue(),
                        locale: this.props.locale,
                        onChange: this.handleDateChange
                    })
                )
            );
        }
    }]);

    return Date;
}(_react.Component);

Date.propTypes = {
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** Default date to display. Set this instead of value to make the Date uncontrolled. */
    defaultValue: _propTypes2.default.string,
    /**
    * The id of the description. When placed in a ControlGroup, this automatically set to the
    * ControlGroup's help component.
    */
    describedBy: _propTypes2.default.string,
    /** Add a disabled attribute and prevent clicking. */
    disabled: _propTypes2.default.bool,
    /**
     * Highlight the field as having an error. The border and text will turn red.
     */
    error: _propTypes2.default.bool,
    /**
    * The id of the label. When placed in a ControlGroup, this automatically set to the
    * ControlGroup's label.
    */
    labelledBy: _propTypes2.default.string,
    /** Locale set by language and localization specifiers. */
    locale: _propTypes2.default.string,
    /** When false, display as inline-block with the default width. */
    inline: _propTypes2.default.bool,
    /**
     * Return event and data object with date string (in YYYY-MM-DD format) when a date is
     * selected.
     */
    onChange: _propTypes2.default.func,
    /** The overall size of the input. */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /** Setting this value makes the property controlled. A callback is required. */
    value: _propTypes2.default.string
};
Date.defaultProps = {
    disabled: false,
    error: false,
    inline: true,
    locale: 'en_US',
    onChange: _lodash.noop,
    size: 'medium'
};

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.handleBlur = function (e) {
        _moment2.default.locale(_this2.props.locale);
        var date = (0, _moment2.default)(_this2.state.tempTextInputDate, 'l');
        if (date.isValid()) {
            _this2.handleDateChange(e, { value: date.format('YYYY-MM-DD') });
        } else {
            _this2.setState({
                tempTextInputDate: null,
                calendarOpen: false
            });
        }
    };

    this.handleDateChange = function (e, _ref2) {
        var value = _ref2.value;

        var dateObject = (0, _moment2.default)(value, 'YYYY-MM-DD');
        _this2.setState({
            value: _this2.isControlled() ? null : value,
            displayDate: dateObject,
            tempTextInputDate: null,
            calendarOpen: false
        });
        _this2.focus();
        _this2.props.onChange(e, { value: value });
    };

    this.handleFocus = function () {
        if (!_this2.state.calendarOpen) {
            _this2.setState({
                calendarOpen: true
            });
        }
    };

    this.handleInputChange = function (e, _ref3) {
        var value = _ref3.value;

        _this2.setState({
            tempTextInputDate: value
        });
    };

    this.handleKeyDown = function (e) {
        if ((0, _keyboard.keycode)(e) === 'enter' || (0, _keyboard.keycode)(e) === 'tab') {
            if (_this2.state.calendarOpen) {
                _this2.handleBlur();
            } else {
                _this2.setState({
                    calendarOpen: true
                });
            }
        } else if ((0, _keyboard.keycode)(e) === 'esc') {
            _this2.setState({
                tempTextInputDate: null,
                calendarOpen: false
            });
            _this2.focus();
        }
    };

    this.handleMount = function (comp) {
        _this2.setState({
            anchor: comp
        });
    };

    this.handleRequestClose = function (_ref4) {
        var event = _ref4.event,
            reason = _ref4.reason;

        if ((reason === 'clickAway' || reason === 'escapeKey') && event.target !== _this2.state.anchor.input) {
            _this2.handleBlur();
        }
    };
};

exports.default = Date;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Date/Date.jsx"))

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