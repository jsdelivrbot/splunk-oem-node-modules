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
/******/ 	return __webpack_require__(__webpack_require__.s = 397);
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Clickable");

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./CollapsiblePanel.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./CollapsiblePanel.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/ChevronRight");

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".section_CollapsiblePanel__guid__ae8625{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit}.title_CollapsiblePanel__guid__ae8625{width:100%;border-bottom:0;cursor:pointer;position:relative;display:block;padding:6px 15px 6px 20px;line-height:16px;border-top-style:solid;border-bottom-style:solid}.title_CollapsiblePanel__guid__ae8625[data-active=false]{background-image:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#eee));background-image:-webkit-linear-gradient(top,#f7f7f7,#eee);background-image:-o-linear-gradient(top,#f7f7f7,#eee);background-image:linear-gradient(180deg,#f7f7f7,#eee);border-color:#bfbfbf;color:#333;-webkit-box-shadow:inset 0 1px 0 #f2f2f2;box-shadow:inset 0 1px 0 #f2f2f2;text-decoration:none;border-bottom:none;border-radius:0}.title_CollapsiblePanel__guid__ae8625[data-active=true]{color:#333;border-top:1px solid #ccc}.title_CollapsiblePanel__guid__ae8625[data-active=true] .icon_CollapsiblePanel__guid__ae8625{-webkit-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.title_CollapsiblePanel__guid__ae8625[disabled]{cursor:default}.title_CollapsiblePanel__guid__ae8625:focus{outline:0;text-decoration:none;background:rgba(61,171,255,.12);-webkit-box-shadow:none;box-shadow:none}.title_CollapsiblePanel__guid__ae8625:hover:not([disabled]){background-image:none;background-color:#f7f7f7;border-color:#c7c7c7;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.08);box-shadow:0 1px 1px rgba(0,0,0,.08);color:#333;text-decoration:none;-webkit-box-shadow:none;box-shadow:none}:first-child>.title_CollapsiblePanel__guid__ae8625{border-top:none}.icon_CollapsiblePanel__guid__ae8625{position:absolute;left:8px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:-o-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s,-o-transform .3s}.body_CollapsiblePanel__guid__ae8625{background-color:#fff}","lite":".section_CollapsiblePanel__guid__ae8625{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit}.title_CollapsiblePanel__guid__ae8625{width:100%;border-bottom:0;cursor:pointer;position:relative;display:block;padding:6px 15px 6px 20px;line-height:16px;border-top-style:solid;border-bottom-style:solid}.title_CollapsiblePanel__guid__ae8625[data-active=false]{background:#fff;border-color:#333;color:#333;text-decoration:none;border-bottom:none;border-radius:0}.title_CollapsiblePanel__guid__ae8625[data-active=true]{color:#333;border-top:1px solid #ccc;border-top-color:#333}.title_CollapsiblePanel__guid__ae8625[data-active=true] .icon_CollapsiblePanel__guid__ae8625{-webkit-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.title_CollapsiblePanel__guid__ae8625[disabled]{cursor:default}.title_CollapsiblePanel__guid__ae8625:focus{outline:0;text-decoration:none;background:rgba(61,171,255,.12);-webkit-box-shadow:none;box-shadow:none}.title_CollapsiblePanel__guid__ae8625:hover:not([disabled]){background:#efefef;border-color:#3b3b3b;text-decoration:none;-webkit-box-shadow:none;box-shadow:none}:first-child>.title_CollapsiblePanel__guid__ae8625{border-top:none}.icon_CollapsiblePanel__guid__ae8625{position:absolute;left:8px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:-o-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s,-o-transform .3s}.body_CollapsiblePanel__guid__ae8625{background-color:#fff}"};
var themeLocals = {"enterprise":{"section":"section_CollapsiblePanel__guid__ae8625","title":"title_CollapsiblePanel__guid__ae8625","icon":"icon_CollapsiblePanel__guid__ae8625","body":"body_CollapsiblePanel__guid__ae8625"},"lite":{"section":"section_CollapsiblePanel__guid__ae8625","title":"title_CollapsiblePanel__guid__ae8625","icon":"icon_CollapsiblePanel__guid__ae8625","body":"body_CollapsiblePanel__guid__ae8625"}};
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

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/TransitionOpen");

/***/ }),

/***/ 397:
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

var _i18n = __webpack_require__(2);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Clickable = __webpack_require__(13);

var _Clickable2 = _interopRequireDefault(_Clickable);

var _TransitionOpen = __webpack_require__(36);

var _TransitionOpen2 = _interopRequireDefault(_TransitionOpen);

var _ChevronRight = __webpack_require__(22);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _CollapsiblePanel = __webpack_require__(180);

var _CollapsiblePanel2 = _interopRequireDefault(_CollapsiblePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

/**
 * A `CollapsiblePanel` is a styled component that contains a head and a body. When the head is
 * clicked, the body is opened or closed.
 *
 * `CollapsiblePanel` supports both the controlled and uncontrolled patterns.
 *
 * `CollapsiblePanel`s are most commonly used in [`Accordion`](./Accordion)s. Only use the base
 * `CollapsiblePanel` if you need functionality not provided by `Accordion`.
 */

var CollapsiblePanel = function (_Component) {
    _inherits(CollapsiblePanel, _Component);

    function CollapsiblePanel(props) {
        var _ref;

        _classCallCheck(this, CollapsiblePanel);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = CollapsiblePanel.__proto__ || Object.getPrototypeOf(CollapsiblePanel)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleRequestClose = function (event) {
            var _this$props = _this.props,
                panelId = _this$props.panelId,
                onRequestClose = _this$props.onRequestClose;

            onRequestClose({ event: event, panelId: panelId, reason: 'toggleClick' });
            if (!_this.isControlled()) {
                _this.setState({ open: false });
            }
        };

        _this.handleRequestOpen = function (event) {
            var _this$props2 = _this.props,
                panelId = _this$props2.panelId,
                onRequestOpen = _this$props2.onRequestOpen;

            onRequestOpen({ event: event, panelId: panelId, reason: 'toggleClick' });
            if (!_this.isControlled()) {
                _this.setState({ open: true });
            }
        };

        _this.controlledExternally = (0, _lodash.has)(props, 'open');

        if (!_this.isControlled()) {
            _this.state = {
                open: props.defaultOpen || false
            };
        }

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultOpen')) {
            (0, _errorHandling.invariant)('The defaultOpen prop is not compatible with open prop in\n                CollapsiblePanel.');
        }
        return _this;
    }

    _createClass(CollapsiblePanel, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'open')) {
                (0, _errorHandling.invariant)('Cannot change CollapsiblePanel from an uncontrolled component to a\n                controlled one. Prop \'open\' is not valid in subsequent updates if not provided in\n                the initial props.');
            }

            if (process.env.NODE_ENV !== "production" && nextProps.defaultOpen !== this.props.defaultOpen) {
                (0, _errorHandling.invariant)('Cannot change defaultOpen after initial render in CollapsiblePanel.\n                Consider using a controlled component instead.');
            }
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                disabled = _props.disabled,
                title = _props.title;

            var open = this.isControlled() ? this.props.open : this.state.open;
            return _react2.default.createElement(
                _Box2.default,
                _extends({
                    className: (0, _toClassName2.default)(_CollapsiblePanel2.default.main, className)
                }, (0, _testSupport.createTestHook)(__filename), (0, _lodash.omit)(this.props, (0, _lodash.keys)(CollapsiblePanel.propTypes))),
                _react2.default.createElement(
                    _Clickable2.default,
                    {
                        className: _CollapsiblePanel2.default.title,
                        disabled: disabled,
                        onClick: open ? this.handleRequestClose : this.handleRequestOpen,
                        'data-active': open
                    },
                    _react2.default.createElement(
                        'span',
                        { className: _CollapsiblePanel2.default.icon },
                        _react2.default.createElement(_ChevronRight2.default, {
                            screenReaderText: open ? (0, _i18n._)('Panel is open') : (0, _i18n._)('Panel is closed')
                        })
                    ),
                    title
                ),
                _react2.default.createElement(
                    _TransitionOpen2.default,
                    { innerClassName: _CollapsiblePanel2.default.body, open: open },
                    children
                )
            );
        }
    }]);

    return CollapsiblePanel;
}(_react.Component);

CollapsiblePanel.propTypes = {
    /** @docs-ignore */
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /**
     * Sets the initial open state of the panel. Not compatible with `open`.
     */
    defaultOpen: _propTypes2.default.bool,
    /**
     * Prevents the panel from opening or closing.
     */
    disabled: _propTypes2.default.bool,
    /**
     * The `panelId` will be passed to callbacks and can be used to manage open/closed state.
     */
    panelId: _propTypes2.default.any,
    /**
     * A callback invoked when the panel is requested to close. It will be passed an object
     * containing the `panelId`.
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * A callback invoked when the panel is requested to open. It will be passed an object
     * containing the `panelId`.
     */
    onRequestOpen: _propTypes2.default.func,
    /**
     * Controls whether the panel is open or not. Not compatible with `defaultOpen`.
     */
    open: _propTypes2.default.bool,
    /**
     * The content of this Panel's title.
     */
    title: _propTypes2.default.node.isRequired
};
CollapsiblePanel.defaultProps = {
    disabled: false,
    onRequestClose: noop,
    onRequestOpen: noop
};
exports.default = CollapsiblePanel;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/CollapsiblePanel/CollapsiblePanel.jsx"))

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

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