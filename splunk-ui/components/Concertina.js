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
/******/ 	return __webpack_require__(__webpack_require__.s = 401);
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Box");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Clickable");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-event-listener");

/***/ }),

/***/ 226:
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

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Heading = __webpack_require__(52);

var _Heading2 = _interopRequireDefault(_Heading);

var _Concertina = __webpack_require__(40);

var _Concertina2 = _interopRequireDefault(_Concertina);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var Panel = function (_Component) {
    _inherits(Panel, _Component);

    function Panel(props) {
        var _ref;

        _classCallCheck(this, Panel);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this, props].concat(rest)));

        _this.measureHeight = function (e) {
            _this.delayUpdate();

            if (!_this.state.containerEl) {
                return;
            }

            var newHeight = _this.state.containerEl.clientHeight;

            if (newHeight === _this.lastHeight) {
                return;
            }

            var data = {
                id: _this.props.panelId,
                height: _this.state.containerEl.offsetHeight,
                headingHeight: _this.state.containerEl.offsetHeight - _this.state.bodyEl.offsetHeight
            };

            _this.lastHeight = newHeight;

            _this.props.onChange(e, data);
        };

        _this.handleMount = function (containerEl) {
            _this.setState({ containerEl: containerEl });
        };

        _this.handleHeadingMount = function (heading) {
            _this.setState({ heading: heading });
        };

        _this.handleBodyMount = function (bodyEl) {
            _this.setState({ bodyEl: bodyEl });
        };

        _this.state = {};
        return _this;
    }

    _createClass(Panel, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (this.props.children !== prevProps.children || !prevState.containerEl) {
                this.measureHeight();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
        }
    }, {
        key: 'delayUpdate',
        value: function delayUpdate() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = (0, _lodash.delay)(this.measureHeight, 300);
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.state.heading.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                description = _props.description,
                onHeadingClick = _props.onHeadingClick,
                onChange = _props.onChange,
                panelId = _props.panelId,
                status = _props.status,
                style = _props.style,
                title = _props.title,
                otherProps = _objectWithoutProperties(_props, ['children', 'className', 'description', 'onHeadingClick', 'onChange', 'panelId', 'status', 'style', 'title']);

            return _react2.default.createElement(
                'div',
                _extends({
                    className: (0, _toClassName2.default)(_Concertina2.default.panel, className),
                    ref: this.handleMount,
                    'data-status': status
                }, (0, _testSupport.createTestHook)(__filename), otherProps),
                _react2.default.createElement(
                    _Heading2.default,
                    {
                        onClick: onHeadingClick,
                        ref: this.handleHeadingMount,
                        description: description,
                        panelId: panelId,
                        position: 'inner',
                        'data-status': status === 'normal' ? null : status
                    },
                    title
                ),
                _react2.default.createElement(_reactEventListener2.default, {
                    target: window,
                    onResize: this.measureHeight
                }),
                _react2.default.createElement(
                    'div',
                    { className: _Concertina2.default.bodyEl, style: style, ref: this.handleBodyMount },
                    children
                )
            );
        }
    }]);

    return Panel;
}(_react.Component);

Panel.propTypes = {
    /** @docs-ignore */
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string,
    /** Content to place to the right of the title */
    description: _propTypes2.default.node,
    /** @docs-ignore */
    onHeadingClick: _propTypes2.default.func,
    /** @docs-ignore */
    onChange: _propTypes2.default.func,
    /** @docs-ignore */
    panelId: _propTypes2.default.number,
    /** @docs-ignore */
    style: _propTypes2.default.object,
    /** The panel can be in an warning or error state. */
    status: _propTypes2.default.oneOf(['normal', 'warning', 'error']),
    /**
     * The content of this Panel's title bar.
     */
    title: _propTypes2.default.node.isRequired
};
Panel.defaultProps = {
    onHeadingClick: noop,
    onChange: noop,
    status: 'normal'
};
exports.default = Panel;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Concertina/Panel.jsx"))

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".main_Concertina__guid__4cb156{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden}.top_Concertina__guid__4cb156{position:absolute;left:0;top:0;right:0;z-index:1;background-color:#fff;pointer-events:none}.top_Concertina__guid__4cb156:after{content:\"\";position:absolute;bottom:-6px;height:6px;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.15)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.15),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.15),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.15),transparent)}.scroll_Concertina__guid__4cb156{overflow:auto}.bottom_Concertina__guid__4cb156{position:absolute;left:0;bottom:0;right:0;background-color:#fff;pointer-events:none}.bottom_Concertina__guid__4cb156:before{content:\"\";position:absolute;top:-6px;height:6px;left:0;right:0;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.15)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.15),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.15),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.15),transparent)}.panel_Concertina__guid__4cb156:not([data-status]){background-color:#fff}.panel_Concertina__guid__4cb156[data-status=error]{background-color:#fbf0ee}.panel_Concertina__guid__4cb156[data-status=warning]{background-color:#fef9ec}.heading_Concertina__guid__4cb156{width:100%;cursor:pointer;position:relative;padding:6px 15px 6px 20px;line-height:16px;border-radius:0;border-top-style:solid;border-bottom-style:solid}.heading_Concertina__guid__4cb156:not([data-status]){background-image:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#eee));background-image:-webkit-linear-gradient(top,#f7f7f7,#eee);background-image:-o-linear-gradient(top,#f7f7f7,#eee);background-image:linear-gradient(180deg,#f7f7f7,#eee);border-color:#bfbfbf;color:#333;-webkit-box-shadow:inset 0 1px 0 #f2f2f2;box-shadow:inset 0 1px 0 #f2f2f2}.heading_Concertina__guid__4cb156:not([data-status]):hover:not([disabled]){background-image:none;background-color:#f7f7f7;border-color:#c7c7c7;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.08);box-shadow:0 1px 1px rgba(0,0,0,.08);color:#333;text-decoration:none;-webkit-box-shadow:none;box-shadow:none}.heading_Concertina__guid__4cb156:not([data-status]):focus:not([disabled]){outline:0;text-decoration:none;background:#e5f4ff;-webkit-box-shadow:none;box-shadow:none}.heading_Concertina__guid__4cb156[data-status]{border-width:1px;border-bottom-style:solid;border-top-style:solid}.heading_Concertina__guid__4cb156[data-status=error]{background-image:-webkit-gradient(linear,left top,left bottom,from(#f3cbc3),to(#f0bcb2));background-image:-webkit-linear-gradient(#f3cbc3,#f0bcb2);background-image:-o-linear-gradient(#f3cbc3,#f0bcb2);background-image:linear-gradient(#f3cbc3,#f0bcb2);border-color:#c2857a;color:#d6563c}.heading_Concertina__guid__4cb156[data-status=error]:hover:not([disabled]){background-image:-webkit-gradient(linear,left top,left bottom,from(#f7dad4),to(#f3cbc3));background-image:-webkit-linear-gradient(#f7dad4,#f3cbc3);background-image:-o-linear-gradient(#f7dad4,#f3cbc3);background-image:linear-gradient(#f7dad4,#f3cbc3);border-color:#c58b81;color:#d6563c;text-decoration:none;-webkit-box-shadow:none;box-shadow:none}.heading_Concertina__guid__4cb156[data-status=warning]{background-image:-webkit-gradient(linear,left top,left bottom,from(#fbe8b7),to(#f9dd95));background-image:-webkit-linear-gradient(#fbe8b7,#f9dd95);background-image:-o-linear-gradient(#fbe8b7,#f9dd95);background-image:linear-gradient(#fbe8b7,#f9dd95);border-color:#f4c348;color:#d99f0d}.heading_Concertina__guid__4cb156[data-status=warning]:hover:not([disabled]){background-image:-webkit-gradient(linear,left top,left bottom,from(#fceeca),to(#fae3a8));background-image:-webkit-linear-gradient(#fceeca,#fae3a8);background-image:-o-linear-gradient(#fceeca,#fae3a8);background-image:linear-gradient(#fceeca,#fae3a8);border-color:#f5c856;color:#d99f0d;text-decoration:none;-webkit-box-shadow:none;box-shadow:none}.bottom_Concertina__guid__4cb156>.heading_Concertina__guid__4cb156{border-bottom:none}.panel_Concertina__guid__4cb156:first-child>.heading_Concertina__guid__4cb156,.top_Concertina__guid__4cb156>.heading_Concertina__guid__4cb156{border-top:none}.headingContent_Concertina__guid__4cb156{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.description_Concertina__guid__4cb156{font-size:11px}.heading_Concertina__guid__4cb156:not([data-status])>.description_Concertina__guid__4cb156{color:#999}","lite":".main_Concertina__guid__4cb156{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden}.top_Concertina__guid__4cb156{position:absolute;left:0;top:0;right:0;z-index:1;background-color:#fff;pointer-events:none}.top_Concertina__guid__4cb156:after{content:\"\";position:absolute;bottom:-6px;height:6px;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.15)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.15),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.15),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.15),transparent)}.scroll_Concertina__guid__4cb156{overflow:auto}.bottom_Concertina__guid__4cb156{position:absolute;left:0;bottom:0;right:0;background-color:#fff;pointer-events:none}.bottom_Concertina__guid__4cb156:before{content:\"\";position:absolute;top:-6px;height:6px;left:0;right:0;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.15)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.15),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.15),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.15),transparent)}.panel_Concertina__guid__4cb156:not([data-status]){background-color:#fff}.panel_Concertina__guid__4cb156[data-status=error]{background-color:#fbf0ee}.panel_Concertina__guid__4cb156[data-status=warning]{background-color:#fef9ec}.heading_Concertina__guid__4cb156{width:100%;cursor:pointer;position:relative;padding:6px 15px 6px 20px;line-height:16px;border-radius:0;border-top-style:solid;border-bottom-style:solid}.heading_Concertina__guid__4cb156:not([data-status]){background:#fff;border-color:#333;color:#333}.heading_Concertina__guid__4cb156:not([data-status]):hover:not([disabled]){background:#efefef;border-color:#3b3b3b;text-decoration:none;-webkit-box-shadow:none;box-shadow:none}.heading_Concertina__guid__4cb156:not([data-status]):focus:not([disabled]){outline:0;text-decoration:none;background:#e5f4ff;-webkit-box-shadow:none;box-shadow:none}.heading_Concertina__guid__4cb156[data-status]{border-width:1px;border-bottom-style:solid;border-top-style:solid}.heading_Concertina__guid__4cb156[data-status=error]{border-color:#dd745f;background:#fff;color:#d6563c}.heading_Concertina__guid__4cb156[data-status=error]:hover:not([disabled]){border-color:#dd745f;background:#efefef;color:#d6563c;text-decoration:none;-webkit-box-shadow:none;box-shadow:none}.heading_Concertina__guid__4cb156[data-status=warning]{border-color:#d7b765;background:#fff;color:#f2b827}.heading_Concertina__guid__4cb156[data-status=warning]:hover:not([disabled]){border-color:#d7b765;background:#efefef;color:#f2b827;text-decoration:none;-webkit-box-shadow:none;box-shadow:none}.bottom_Concertina__guid__4cb156>.heading_Concertina__guid__4cb156{border-bottom:none}.panel_Concertina__guid__4cb156:first-child>.heading_Concertina__guid__4cb156,.top_Concertina__guid__4cb156>.heading_Concertina__guid__4cb156{border-top:none}.headingContent_Concertina__guid__4cb156{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.description_Concertina__guid__4cb156{font-size:11px}.heading_Concertina__guid__4cb156:not([data-status])>.description_Concertina__guid__4cb156{color:#999}"};
var themeLocals = {"enterprise":{"main":"main_Concertina__guid__4cb156","top":"top_Concertina__guid__4cb156","scroll":"scroll_Concertina__guid__4cb156 main_Concertina__guid__4cb156","bottom":"bottom_Concertina__guid__4cb156","panel":"panel_Concertina__guid__4cb156","heading":"heading_Concertina__guid__4cb156","headingContent":"headingContent_Concertina__guid__4cb156","description":"description_Concertina__guid__4cb156"},"lite":{"main":"main_Concertina__guid__4cb156","top":"top_Concertina__guid__4cb156","scroll":"scroll_Concertina__guid__4cb156 main_Concertina__guid__4cb156","bottom":"bottom_Concertina__guid__4cb156","panel":"panel_Concertina__guid__4cb156","heading":"heading_Concertina__guid__4cb156","headingContent":"headingContent_Concertina__guid__4cb156","description":"description_Concertina__guid__4cb156"}};
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

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Scroll");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Concertina.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Concertina.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 401:
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

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _reactEventListener = __webpack_require__(14);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Scroll = __webpack_require__(35);

var _Scroll2 = _interopRequireDefault(_Scroll);

var _Heading = __webpack_require__(52);

var _Heading2 = _interopRequireDefault(_Heading);

var _Panel = __webpack_require__(226);

var _Panel2 = _interopRequireDefault(_Panel);

var _Concertina = __webpack_require__(40);

var _Concertina2 = _interopRequireDefault(_Concertina);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Concertina provides scrolling set of panels with headings that dock at the top and bottom of a
 * scrolling container. This is useful for a sidebar of configuration options. Concertina will
 * fill it's offset parent by default.
 */

var Concertina = function (_Component) {
    _inherits(Concertina, _Component);

    function Concertina(props) {
        var _ref;

        _classCallCheck(this, Concertina);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Concertina.__proto__ || Object.getPrototypeOf(Concertina)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleUpdate = function (e, data) {
            _this.panelPositions[data.id] = data;

            var total = 0;
            _this.panelPositions.forEach(function (panel) {
                panel.offsetTop = total; // eslint-disable-line no-param-reassign
                total += panel.height || 0;
            });

            _this.updateHeadings();
        };

        _this.handleMount = function (scroll) {
            _this.setState({
                scrollComp: scroll
            });

            /* The scrollEl gets unmounted during the animation, it's necessary to cache the
            * recorded height until it is remounted. */
            if (scroll) {
                _this.setState({
                    innerWidth: scroll.getEl().clientWidth
                });
            }
        };

        _this.handleResize = function () {
            _this.setState({
                innerWidth: _this.state.scrollComp.getEl().clientWidth
            });
        };

        _this.handleScroll = function () {
            _this.updateHeadings();
        };

        _this.handleClick = function (e, _ref2) {
            var panelId = _ref2.panelId,
                position = _ref2.position;

            var scrollEl = _this.state.scrollComp.getEl();

            var headingsBeforeHeight = (0, _lodash.take)(_this.panelPositions, panelId).map(function (item) {
                return item.headingHeight;
            }).reduce(function (a, b) {
                return a + b;
            }, 0); // sum the heights

            var headingsAfterHeight = (0, _lodash.takeRight)(_this.panelPositions, _this.panelPositions.length - panelId - 1).map(function (item) {
                return item.headingHeight;
            }).reduce(function (a, b) {
                return a + b;
            }, 0); // sum the heights

            var availableHeight = scrollEl.clientHeight - headingsBeforeHeight - headingsAfterHeight;
            var panelHeight = _this.panelPositions[panelId].height;

            var topPosition = _this.panelPositions[panelId].offsetTop - headingsBeforeHeight;
            var bottomPosition = topPosition - (availableHeight - panelHeight);

            var shouldPartlyPopUp = availableHeight > panelHeight && (position === 'bottom' || position === 'inner');

            // if the entire panel is in view, do nothing
            if (shouldPartlyPopUp && bottomPosition < scrollEl.scrollTop) {
                return;
            }

            var targetTop = shouldPartlyPopUp ? bottomPosition : topPosition;

            // handleRest will shift focus;
            if (position !== 'inner') {
                e.currentTarget.blur();
            }

            _this.state.scrollComp.scrollTo({ top: targetTop });
        };

        _this.updateHeadings = function () {
            if (!_this.state.scrollComp) {
                return;
            }

            var scrollEl = _this.state.scrollComp.getEl();

            var top = scrollEl.scrollTop;

            function reduceTop(show, panel) {
                if (panel.offsetTop < top) {
                    top += panel.headingHeight;
                    return show + 1;
                }
                return show;
            }

            var bottom = top + scrollEl.clientHeight;
            function reduceBottom(show, panel) {
                if (panel.offsetTop + panel.headingHeight > bottom) {
                    bottom -= panel.headingHeight;
                    return show + 1;
                }
                return show;
            }

            _this.setState({
                panelsTopCount: _this.panelPositions.reduce(reduceTop, 0),
                panelsBottomCount: _this.panelPositions.reduceRight(reduceBottom, 0)
            });
        };

        _this.state = {
            panelsTopCount: 0,
            panelsBottomCount: 0,
            scrollTop: 0,
            innerWidth: '100%'
        };

        _this.panelPositions = [];
        _this.updateHeadings = (0, _lodash.debounce)(_this.updateHeadings, 0);
        return _this;
    }

    _createClass(Concertina, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.updateHeadings.cancel();
        }
    }, {
        key: 'renderHeadings',
        value: function renderHeadings(items, position) {
            var _this2 = this;

            var headings = items.map(function (item) {
                return _react2.default.createElement(
                    _Heading2.default,
                    {
                        onClick: _this2.handleClick,
                        description: item.props.description,
                        panelId: item.props.panelId,
                        position: position,
                        status: item.props.status,
                        key: item.props.panelId
                    },
                    item.props.title
                );
            });

            return headings;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                children = _props.children,
                className = _props.className,
                otherProps = _objectWithoutProperties(_props, ['children', 'className']);

            var childrenCleaned = _react.Children.toArray(children).filter(_react.isValidElement).map(function (item, i) {
                return (0, _react.cloneElement)(item, {
                    panelId: item.panelId || i,
                    onHeadingClick: _this3.handleClick,
                    onChange: _this3.handleUpdate
                });
            });

            var topPanels = (0, _lodash.take)(childrenCleaned, this.state.panelsTopCount);
            var bottomPanels = (0, _lodash.takeRight)(childrenCleaned, this.state.panelsBottomCount);

            return _react2.default.createElement(
                _Box2.default,
                _extends({
                    className: (0, _toClassName2.default)(_Concertina2.default.main, className)
                }, (0, _testSupport.createTestHook)(__filename), otherProps),
                _react2.default.createElement(_reactEventListener2.default, {
                    target: 'window',
                    onResize: this.handleResize
                }),
                this.state.panelsTopCount > 0 && _react2.default.createElement(
                    'div',
                    { className: _Concertina2.default.top, style: { width: this.state.innerWidth } },
                    this.renderHeadings(topPanels, 'top')
                ),
                _react2.default.createElement(
                    _Scroll2.default,
                    {
                        className: _Concertina2.default.scroll,
                        onScroll: this.handleScroll,
                        stopScrollPropagation: true,
                        key: 'scroll-container',
                        ref: this.handleMount,
                        'data-concertina-role': 'scroll'
                    },
                    childrenCleaned
                ),
                this.state.panelsBottomCount > 0 && _react2.default.createElement(
                    'div',
                    { className: _Concertina2.default.bottom, style: { width: this.state.innerWidth } },
                    this.renderHeadings(bottomPanels, 'bottom')
                )
            );
        }
    }]);

    return Concertina;
}(_react.Component);

Concertina.propTypes = {
    /**
     * `children` should be `Concertina.Panel`.
     **/
    children: _propTypes2.default.node,
    /** @docs-ignore */
    className: _propTypes2.default.string
};
Concertina.Panel = _Panel2.default;
exports.default = Concertina;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Concertina/Concertina.jsx"))

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/toClassName");

/***/ }),

/***/ 52:
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

var _testSupport = __webpack_require__(1);

var _Clickable = __webpack_require__(13);

var _Clickable2 = _interopRequireDefault(_Clickable);

var _Concertina = __webpack_require__(40);

var _Concertina2 = _interopRequireDefault(_Concertina);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading = function (_Component) {
    _inherits(Heading, _Component);

    function Heading() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Heading);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Heading.__proto__ || Object.getPrototypeOf(Heading)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
            _this.props.onClick(e, { panelId: _this.props.panelId, position: _this.props.position });
        }, _this.handleMount = function (container) {
            _this.container = container;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Heading, [{
        key: 'focus',
        value: function focus() {
            this.container.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                description = _props.description,
                onClick = _props.onClick,
                panelId = _props.panelId,
                position = _props.position,
                status = _props.status,
                otherProps = _objectWithoutProperties(_props, ['children', 'description', 'onClick', 'panelId', 'position', 'status']);

            return _react2.default.createElement(
                _Clickable2.default,
                _extends({
                    className: _Concertina2.default.heading,
                    contentWrapperClassName: _Concertina2.default.headingContent,
                    'data-status': status === 'normal' ? null : status,
                    onClick: this.handleClick,
                    ref: this.handleMount
                }, (0, _testSupport.createTestHook)(__filename), otherProps),
                _react2.default.createElement(
                    'span',
                    { 'data-concertina-role': 'title' },
                    children
                ),
                description && _react2.default.createElement(
                    'span',
                    { className: _Concertina2.default.description, 'data-concertina-role': 'description' },
                    description
                )
            );
        }
    }]);

    return Heading;
}(_react.Component);

Heading.propTypes = {
    /** @docs-ignore */
    children: _propTypes2.default.string.isRequired,
    /** Text to place to the right of the title */
    description: _propTypes2.default.string,
    /** @docs-ignore */
    onClick: _propTypes2.default.func.isRequired,
    /** @docs-ignore */
    panelId: _propTypes2.default.any.isRequired,
    /** @docs-ignore */
    position: _propTypes2.default.string.isRequired,
    /** The panel can be in an warning or error state. */
    status: _propTypes2.default.oneOf(['normal', 'warning', 'error'])
};
Heading.defaultProps = {
    position: 'inner'
};
exports.default = Heading;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Concertina/Heading.jsx"))

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