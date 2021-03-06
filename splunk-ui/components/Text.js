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
/******/ 	return __webpack_require__(__webpack_require__.s = 441);
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

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-event-listener");

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(383);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Text.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Text.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/Clear");

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".main_Text__guid__ae864f{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:1;flex-shrink:1;position:relative}.main_Text__guid__ae864f[data-inline]{width:230px;-webkit-flex-basis:230px;flex-basis:230px}[data-inline]+.main_Text__guid__ae864f[data-inline]{margin-left:10px}.main_Text__guid__ae864f[data-size=small]{font-size:11px}.main_Text__guid__ae864f[data-size=large]{font-size:16px;line-height:20px}.input_Text__guid__ae864f,.input_Text__guid__ae864f[type]{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;line-height:inherit;color:#333;border-radius:2px;background-color:#fff;border:1px solid #ccc;font-size:inherit;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border .2s linear,-webkit-box-shadow .2s linear;transition:border .2s linear,-webkit-box-shadow .2s linear;-o-transition:border linear .2s,box-shadow linear .2s;transition:border .2s linear,box-shadow .2s linear;transition:border .2s linear,box-shadow .2s linear,-webkit-box-shadow .2s linear;width:100%;padding:4px 6px;min-height:26px;position:relative;border-color:#333}[data-size=small]>.input_Text__guid__ae864f,[data-size=small]>.input_Text__guid__ae864f[type]{padding:2px 4px;min-height:22px}[data-size=large]>.input_Text__guid__ae864f,[data-size=large]>.input_Text__guid__ae864f[type]{padding:9px 11px;min-height:40px}.input_Text__guid__ae864f[data-append],.input_Text__guid__ae864f[type][data-append]{margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input_Text__guid__ae864f[data-append]:focus,.input_Text__guid__ae864f[type][data-append]:focus{background-image:-webkit-linear-gradient(right,#52a8ec 1px,transparent 0);background-image:-o-linear-gradient(right,#52a8ec 1px,transparent 1px);background-image:linear-gradient(-90deg,#52a8ec 1px,transparent 0)}.input_Text__guid__ae864f[data-prepend],.input_Text__guid__ae864f[type][data-prepend]{border-top-left-radius:0;border-bottom-left-radius:0}.input_Text__guid__ae864f:focus,.input_Text__guid__ae864f[type]:focus{border-color:rgba(82,168,236,.8);color:#333;outline:0;border-collapse:separate;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6);z-index:1}.input_Text__guid__ae864f:focus[data-can-clear],.input_Text__guid__ae864f[type]:focus[data-can-clear]{padding-right:22px}[data-size=large]>.input_Text__guid__ae864f:focus[data-can-clear],[data-size=large]>.input_Text__guid__ae864f[type]:focus[data-can-clear]{padding-right:32px}.input_Text__guid__ae864f[aria-invalid],.input_Text__guid__ae864f[type][aria-invalid]{border-color:#d6563c;color:#d6563c}.input_Text__guid__ae864f[aria-invalid]:focus,.input_Text__guid__ae864f[type][aria-invalid]:focus{-webkit-box-shadow:0 0 8px rgba(214,86,60,.6);box-shadow:0 0 8px rgba(214,86,60,.6)}.input_Text__guid__ae864f::-ms-clear,.input_Text__guid__ae864f[type]::-ms-clear{display:none;width:0;height:0}.input_Text__guid__ae864f::-webkit-input-placeholder,.input_Text__guid__ae864f[type]::-webkit-input-placeholder{color:#999;opacity:1}.input_Text__guid__ae864f::-moz-placeholder,.input_Text__guid__ae864f[type]::-moz-placeholder{color:#999;opacity:1}.input_Text__guid__ae864f:-ms-input-placeholder,.input_Text__guid__ae864f[type]:-ms-input-placeholder{color:#999;opacity:1}&::-webkit-input-placeholder{color:#999;opacity:1}&::-moz-placeholder{color:#999;opacity:1}&:-ms-input-placeholder{color:#999;opacity:1}.input_Text__guid__ae864f::placeholder,.input_Text__guid__ae864f[type]::placeholder{color:#999;opacity:1}textarea.input_Text__guid__ae864f{resize:none}.inputSearch_Text__guid__ae864f[type]{border-radius:100px;padding-left:10px}[data-size=small]>.inputSearch_Text__guid__ae864f[type]{padding-left:8px}[data-size=large]>.inputSearch_Text__guid__ae864f[type]{padding-left:15px}.uneditableInput_Text__guid__ae864f{color:#ccc;background-color:#f5f5f5;border-color:#ccc;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.025);box-shadow:inset 0 1px 2px rgba(0,0,0,.025);cursor:not-allowed;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.uneditableInput_Text__guid__ae864f[data-multiline]{white-space:pre-wrap;word-wrap:break-word;overflow-y:auto;height:auto;min-height:43px;max-height:140px;text-overflow:clip}.clear_Text__guid__ae864f{position:absolute;right:1px;top:1px;font-size:.83333em;color:#999;cursor:pointer;z-index:1}[data-size=small]>.clear_Text__guid__ae864f{padding:6px}[data-size=medium]>.clear_Text__guid__ae864f{padding:7px}[data-size=large]>.clear_Text__guid__ae864f{padding:13px}.placeholder_Text__guid__ae864f{color:#999;position:absolute;max-width:100%;font-size:inherit;line-height:inherit;z-index:1}[data-size=small]>.placeholder_Text__guid__ae864f{top:4px;left:5px}[data-size=medium]>.placeholder_Text__guid__ae864f{top:5px;left:7px}[data-size=large]>.placeholder_Text__guid__ae864f{top:10px;left:12px}.inputSearch_Text__guid__ae864f+.placeholder_Text__guid__ae864f{margin-left:5px}","enterprise":".main_Text__guid__ae864f{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:1;flex-shrink:1;position:relative}.main_Text__guid__ae864f[data-inline]{width:230px;-webkit-flex-basis:230px;flex-basis:230px}[data-inline]+.main_Text__guid__ae864f[data-inline]{margin-left:10px}.main_Text__guid__ae864f[data-size=small]{font-size:11px}.main_Text__guid__ae864f[data-size=large]{font-size:16px;line-height:20px}.input_Text__guid__ae864f,.input_Text__guid__ae864f[type]{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;line-height:inherit;color:#333;border-radius:4px;background-color:#fff;border:1px solid #ccc;font-size:inherit;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border .2s linear,-webkit-box-shadow .2s linear;transition:border .2s linear,-webkit-box-shadow .2s linear;-o-transition:border linear .2s,box-shadow linear .2s;transition:border .2s linear,box-shadow .2s linear;transition:border .2s linear,box-shadow .2s linear,-webkit-box-shadow .2s linear;width:100%;padding:4px 6px;min-height:26px;position:relative}[data-size=small]>.input_Text__guid__ae864f,[data-size=small]>.input_Text__guid__ae864f[type]{padding:2px 4px;min-height:22px}[data-size=large]>.input_Text__guid__ae864f,[data-size=large]>.input_Text__guid__ae864f[type]{padding:9px 11px;min-height:40px}.input_Text__guid__ae864f[data-append],.input_Text__guid__ae864f[type][data-append]{margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}.input_Text__guid__ae864f[data-append]:focus,.input_Text__guid__ae864f[type][data-append]:focus{background-image:-webkit-linear-gradient(right,#52a8ec 1px,transparent 0);background-image:-o-linear-gradient(right,#52a8ec 1px,transparent 1px);background-image:linear-gradient(-90deg,#52a8ec 1px,transparent 0)}.input_Text__guid__ae864f[data-prepend],.input_Text__guid__ae864f[type][data-prepend]{border-top-left-radius:0;border-bottom-left-radius:0}.input_Text__guid__ae864f:focus,.input_Text__guid__ae864f[type]:focus{border-color:rgba(82,168,236,.8);color:#333;outline:0;border-collapse:separate;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6);z-index:1}.input_Text__guid__ae864f:focus[data-can-clear],.input_Text__guid__ae864f[type]:focus[data-can-clear]{padding-right:22px}[data-size=large]>.input_Text__guid__ae864f:focus[data-can-clear],[data-size=large]>.input_Text__guid__ae864f[type]:focus[data-can-clear]{padding-right:32px}.input_Text__guid__ae864f[aria-invalid],.input_Text__guid__ae864f[type][aria-invalid]{border-color:#d6563c;color:#d6563c}.input_Text__guid__ae864f[aria-invalid]:focus,.input_Text__guid__ae864f[type][aria-invalid]:focus{-webkit-box-shadow:0 0 8px rgba(214,86,60,.6);box-shadow:0 0 8px rgba(214,86,60,.6)}.input_Text__guid__ae864f::-ms-clear,.input_Text__guid__ae864f[type]::-ms-clear{display:none;width:0;height:0}.input_Text__guid__ae864f::-webkit-input-placeholder,.input_Text__guid__ae864f[type]::-webkit-input-placeholder{color:#999;opacity:1}.input_Text__guid__ae864f::-moz-placeholder,.input_Text__guid__ae864f[type]::-moz-placeholder{color:#999;opacity:1}.input_Text__guid__ae864f:-ms-input-placeholder,.input_Text__guid__ae864f[type]:-ms-input-placeholder{color:#999;opacity:1}&::-webkit-input-placeholder{color:#999;opacity:1}&::-moz-placeholder{color:#999;opacity:1}&:-ms-input-placeholder{color:#999;opacity:1}.input_Text__guid__ae864f::placeholder,.input_Text__guid__ae864f[type]::placeholder{color:#999;opacity:1}textarea.input_Text__guid__ae864f{resize:none}.inputSearch_Text__guid__ae864f[type]{border-radius:100px;padding-left:10px}[data-size=small]>.inputSearch_Text__guid__ae864f[type]{padding-left:8px}[data-size=large]>.inputSearch_Text__guid__ae864f[type]{padding-left:15px}.uneditableInput_Text__guid__ae864f{color:#ccc;background-color:#f5f5f5;border-color:#ccc;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.025);box-shadow:inset 0 1px 2px rgba(0,0,0,.025);cursor:not-allowed;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.uneditableInput_Text__guid__ae864f[data-multiline]{white-space:pre-wrap;word-wrap:break-word;overflow-y:auto;height:auto;min-height:43px;max-height:140px;text-overflow:clip}.clear_Text__guid__ae864f{position:absolute;right:1px;top:1px;font-size:.83333em;color:#999;cursor:pointer;z-index:1}[data-size=small]>.clear_Text__guid__ae864f{padding:6px}[data-size=medium]>.clear_Text__guid__ae864f{padding:7px}[data-size=large]>.clear_Text__guid__ae864f{padding:13px}.placeholder_Text__guid__ae864f{color:#999;position:absolute;max-width:100%;font-size:inherit;line-height:inherit;z-index:1}[data-size=small]>.placeholder_Text__guid__ae864f{top:4px;left:5px}[data-size=medium]>.placeholder_Text__guid__ae864f{top:5px;left:7px}[data-size=large]>.placeholder_Text__guid__ae864f{top:10px;left:12px}.inputSearch_Text__guid__ae864f+.placeholder_Text__guid__ae864f{margin-left:5px}"};
var themeLocals = {"lite":{"main":"main_Text__guid__ae864f","input":"input_Text__guid__ae864f","inputSearch":"inputSearch_Text__guid__ae864f input_Text__guid__ae864f","uneditableInput":"uneditableInput_Text__guid__ae864f input_Text__guid__ae864f","clear":"clear_Text__guid__ae864f","placeholder":"placeholder_Text__guid__ae864f"},"enterprise":{"main":"main_Text__guid__ae864f","input":"input_Text__guid__ae864f","inputSearch":"inputSearch_Text__guid__ae864f input_Text__guid__ae864f","uneditableInput":"uneditableInput_Text__guid__ae864f input_Text__guid__ae864f","clear":"clear_Text__guid__ae864f","placeholder":"placeholder_Text__guid__ae864f"}};
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

/***/ 441:
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

var _reactEventListener = __webpack_require__(14);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _lodash = __webpack_require__(6);

var _errorHandling = __webpack_require__(10);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Clear = __webpack_require__(23);

var _Clear2 = _interopRequireDefault(_Clear);

var _Text = __webpack_require__(214);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Component) {
    _inherits(Text, _Component);

    _createClass(Text, null, [{
        key: 'validateRows',
        value: function validateRows(_ref) {
            var rowsMin = _ref.rowsMin,
                rowsMax = _ref.rowsMax;

            if (process.env.NODE_ENV !== "production" && rowsMin > rowsMax) {
                (0, _errorHandling.invariant)('Text\'s rowsMin prop must be less than rowsMax prop.');
            }
        }
    }]);

    function Text(props) {
        var _ref2;

        _classCallCheck(this, Text);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref2 = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref2, [this, props].concat(rest)));

        _this.handleResize = function () {
            _this.syncHeightWithShadow();
        };

        _this.handleInputChange = function (e) {
            var value = e.target.value;
            if (!_this.isControlled()) {
                _this.setState({ value: value });
            }
            _this.props.onChange(e, { value: value });
        };

        _this.handleInputKeyDown = function (e) {
            _this.props.onKeyDown(e);
        };

        _this.handleInputSelect = function (e) {
            _this.props.onSelect(e);
        };

        _this.handleInputFocus = function (e) {
            _this.setState({ hasFocus: true });
            _this.props.onFocus(e);
        };

        _this.handleInputBlur = function (e) {
            _this.setState({ hasFocus: false });
            _this.props.onBlur(e);
        };

        _this.handleClear = function (e) {
            // Only respond to left mouse button.
            if (e.button === 0) {
                e.preventDefault();
                var value = '';
                if (!_this.isControlled()) {
                    _this.setState({ value: value });
                }
                _this.props.onChange(e, { value: value });
            }
        };

        _this.handlePlaceholderMouseDown = function () {
            _this.focus();
        };

        _this.controlledExternally = (0, _lodash.has)(props, 'value');

        _this.state = {
            hasFocus: false,
            value: props.defaultValue || ''
        };

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValue')) {
            (0, _errorHandling.invariant)('defaultValue prop is not compatible with value prop.');
        }

        Text.validateRows(props);

        _this.handleResize = (0, _lodash.throttle)(_this.handleResize, 100);
        return _this;
    }

    _createClass(Text, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _lodash.defer)(this.syncHeightWithShadow.bind(this)); // wait for styles to load
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'value')) {
                (0, _errorHandling.invariant)('Cannot change Text from an uncontrolled component to a controlled\n    one. Prop \'value\' is not valid in subsequent updates if not provided in the initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultValue !== this.props.defaultValue) {
                (0, _errorHandling.invariant)('Cannot change defaultValue after set.');
            }

            Text.validateRows(nextProps);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.multiline) {
                this.syncHeightWithShadow();
            }
        }
    }, {
        key: 'getEl',
        value: function getEl() {
            return this.input;
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.input.blur();
        }

        /**
         * Place focus on the input.
         */

    }, {
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'select',
        value: function select() {
            this.input.select();
        }
    }, {
        key: 'syncHeightWithShadow',
        value: function syncHeightWithShadow() {
            /* Heavily inspired by material UI
            * https://github.com/callemall/material-ui/blob/master/src/TextField/EnhancedTextarea.js
            */

            var shadow = this.shadow;
            if (this.props.multiline && shadow) {
                var style = window.getComputedStyle(shadow);
                var lineHeight = parseInt(style.getPropertyValue('line-height'), 10);
                var paddingTop = parseInt(style.getPropertyValue('padding-top'), 10);
                var paddingBottom = parseInt(style.getPropertyValue('padding-bottom'), 10);
                var borderTop = parseInt(style.getPropertyValue('border-top-width'), 10);
                var borderBottom = parseInt(style.getPropertyValue('border-bottom-width'), 10);

                var newHeight = shadow.scrollHeight + borderTop + borderBottom;

                if (newHeight === undefined) return;

                if (this.props.rowsMax >= this.props.rowsMin) {
                    var maxHeight = this.props.rowsMax * lineHeight + paddingTop + paddingBottom + borderTop + borderBottom + 1; // need one extra.
                    newHeight = Math.min(maxHeight, newHeight);
                }

                var minHeight = this.props.rowsMin * lineHeight + paddingTop + paddingBottom + borderTop + borderBottom + 1; // need one extra.
                newHeight = Math.max(minHeight, newHeight);

                if (this.state.height !== newHeight) {
                    this.setState({
                        height: newHeight
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                appearance = _props.appearance,
                append = _props.append,
                autoComplete = _props.autoComplete,
                autoFocus = _props.autoFocus,
                canClear = _props.canClear,
                children = _props.children,
                className = _props.className,
                disabled = _props.disabled,
                describedBy = _props.describedBy,
                inputId = _props.inputId,
                error = _props.error,
                inputClassName = _props.inputClassName,
                labelledBy = _props.labelledBy,
                multiline = _props.multiline,
                name = _props.name,
                placeholder = _props.placeholder,
                prepend = _props.prepend,
                size = _props.size,
                tabIndex = _props.tabIndex,
                type = _props.type,
                useSyntheticPlaceholder = _props.useSyntheticPlaceholder,
                value = _props.value,
                otherProps = _objectWithoutProperties(_props, ['appearance', 'append', 'autoComplete', 'autoFocus', 'canClear', 'children', 'className', 'disabled', 'describedBy', 'inputId', 'error', 'inputClassName', 'labelledBy', 'multiline', 'name', 'placeholder', 'prepend', 'size', 'tabIndex', 'type', 'useSyntheticPlaceholder', 'value']);

            var boxProps = (0, _lodash.omit)(otherProps, ['onChange', 'onKeyDown', 'onSelect', 'onFocus', 'onBlur', 'rowsMax', 'rowsMin']);

            var displayValue = this.isControlled() ? value : this.state.value;
            var InputTag = multiline ? 'textarea' : 'input';
            var canClearOrSearch = canClear || appearance === 'search';

            var inputProps = {
                'aria-describedby': describedBy,
                'aria-labelledby': labelledBy,
                'data-can-clear': canClearOrSearch || null,
                'aria-invalid': error || null,
                'data-prepend': prepend || null,
                'data-append': append || null,
                autoComplete: autoComplete ? 'on' : 'off',
                autoFocus: autoFocus,
                id: inputId,
                name: name,
                placeholder: placeholder && !useSyntheticPlaceholder ? placeholder : null,
                onChange: this.handleInputChange,
                onKeyDown: this.handleInputKeyDown,
                onSelect: this.handleInputSelect,
                onFocus: this.handleInputFocus,
                onBlur: this.handleInputBlur,
                style: { height: this.state.height },
                tabIndex: tabIndex,
                type: multiline ? null : type,
                value: displayValue
            };

            inputProps.className = (0, _toClassName2.default)(appearance === 'search' ? _Text2.default.inputSearch : _Text2.default.input, inputClassName);
            return _react2.default.createElement(
                _Box2.default,
                _extends({
                    className: (0, _toClassName2.default)(_Text2.default.main, className),
                    'data-size': size
                }, (0, _testSupport.createTestHook)(__filename), boxProps),
                disabled ? _react2.default.createElement(
                    'span',
                    {
                        className: (0, _toClassName2.default)(_Text2.default.uneditableInput, className),
                        'data-role': 'uneditable-input',
                        'data-multiline': multiline || null
                    },
                    displayValue
                ) : _react2.default.createElement(InputTag, _extends({}, inputProps, { ref: function ref(el) {
                        return _this2.input = el;
                    } })),
                !disabled && multiline && _react2.default.createElement('textarea', _extends({}, inputProps, {
                    style: {
                        width: '100%',
                        position: 'absolute',
                        overflow: 'hidden',
                        left: '-10000px'
                    },
                    tabIndex: -1,
                    ref: function ref(el) {
                        return _this2.shadow = el;
                    }
                })),
                !disabled && multiline && _react2.default.createElement(_reactEventListener2.default, {
                    target: 'window',
                    onResize: this.handleResize
                }),
                useSyntheticPlaceholder && placeholder && !displayValue && _react2.default.createElement(
                    'span',
                    {
                        className: _Text2.default.placeholder,
                        'data-role': 'placeholder',
                        onMouseDown: this.handlePlaceholderMouseDown
                    },
                    placeholder
                ),
                canClearOrSearch && !!displayValue && (this.state.hasFocus || appearance === 'search') && _react2.default.createElement(
                    'span',
                    {
                        className: _Text2.default.clear,
                        'data-role': 'clear',
                        onMouseDown: this.handleClear
                    },
                    _react2.default.createElement(_Clear2.default, { inline: false, size: 1 })
                ),
                children
            );
        }
    }]);

    return Text;
}(_react.Component);

Text.propTypes = {
    /** Setting the appearance to search will create a rounded input. */
    appearance: _propTypes2.default.oneOf(['default', 'search']),
    /** Append removes rounded borders and border from the right side. */
    append: _propTypes2.default.bool,
    /** Enable or disable the browsers autoComplete functionality. */
    autoComplete: _propTypes2.default.bool,
    /** Specify that the input / textarea should request focus when mounted. */
    autoFocus: _propTypes2.default.bool,
    /** Include an "X" button to clear the value. */
    canClear: _propTypes2.default.bool,
    /** @docs-ignore */
    children: _propTypes2.default.node,
    /** @docs-ignore. */
    className: _propTypes2.default.string,
    /**
     * Set this property instead of value to make value uncontrolled. */
    defaultValue: _propTypes2.default.string,
    /**
     * The id of the description. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's help component.
     */
    describedBy: _propTypes2.default.string,
    /** Whether or not the input is editable. */
    disabled: _propTypes2.default.bool,
    /**
     * Highlight the field as having an error. The border and text will turn red.
     */
    error: _propTypes2.default.bool,
    /** When false, display as inline-block with the default width. */
    inline: _propTypes2.default.bool,
    /** @docs-ignore. */
    inputClassName: _propTypes2.default.string,
    /**
     * An id for the input, which may be necessary for accessibility, such as for aria
     * attributes.
     */
    inputId: _propTypes2.default.string,
    /**
     * The id of the label. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's label.
     */
    labelledBy: _propTypes2.default.string,
    /** When true, allows multiline input and ignores the 'type' property. */
    multiline: _propTypes2.default.bool,
    /** The name property for the input, which can be useful for accessibility and form data. */
    name: _propTypes2.default.string,
    /** A callback for when the input loses focus. */
    onBlur: _propTypes2.default.func,
    /**
     * This is equivalent to onInput which is called on keydown, paste, etc.
     * If value is set, this callback is required. This must set the value prop to retain the
     * change.
     */
    onChange: _propTypes2.default.func,
    /** A callback for when the input takes focus. */
    onFocus: _propTypes2.default.func,
    /** A keydown callback can be used to prevent certain input by returning false. */
    onKeyDown: _propTypes2.default.func,
    /** A callback for when the text selection or cursor position changes. */
    onSelect: _propTypes2.default.func,
    /** The gray text shown when the input is empty. */
    placeholder: _propTypes2.default.string,
    /** Prepend removes rounded borders from the left side. */
    prepend: _propTypes2.default.bool,
    /** Maximum number of rows to display when multiLine option is set to true. */
    rowsMax: _propTypes2.default.number,
    /** Minimum number of rows to display when multiLine option is set to true. */
    rowsMin: _propTypes2.default.number,
    /** The overall size of the input. */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    tabIndex: _propTypes2.default.number,
    type: _propTypes2.default.oneOf(['text', 'password']),
    /** Some browsers remove placeholder text on focus. The synthetic placeholder never does. */
    useSyntheticPlaceholder: _propTypes2.default.bool,
    /**
     * The contents of the input. Setting this value makes the property controlled. A callback
     * is required. */
    value: _propTypes2.default.string
};
Text.defaultProps = {
    appearance: 'default',
    append: false,
    autoComplete: true,
    autoFocus: false,
    canClear: false,
    disabled: false,
    error: false,
    inline: false,
    multiline: false,
    onChange: _lodash.noop,
    onKeyDown: _lodash.noop,
    onSelect: _lodash.noop,
    onBlur: _lodash.noop,
    onFocus: _lodash.noop,
    placeholder: '',
    prepend: false,
    rowsMax: 8,
    rowsMin: 2,
    size: 'medium',
    tabIndex: 0,
    type: 'text',
    useSyntheticPlaceholder: false
};
exports.default = Text;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Text/Text.jsx"))

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