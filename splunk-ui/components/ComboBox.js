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
/******/ 	return __webpack_require__(__webpack_require__.s = 400);
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

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/guid");

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./ComboBox.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./ComboBox.css");
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Popover");

/***/ }),

/***/ 225:
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

var _Menu = __webpack_require__(25);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_Component) {
    _inherits(Option, _Component);

    function Option() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Option);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Option.__proto__ || Object.getPrototypeOf(Option)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onClick = _this$props.onClick,
                value = _this$props.value;

            if (!disabled) {
                onClick(e, { value: value });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Option, [{
        key: 'scrollIntoViewIfNeeded',
        value: function scrollIntoViewIfNeeded() {
            this.c.scrollIntoViewIfNeeded();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Menu2.default.Item, _extends({
                ref: function ref(c) {
                    return _this2.c = c;
                }
            }, (0, _testSupport.createTestHook)(__filename), this.props, {
                label: this.props.value,
                onClick: this.handleClick
            }));
        }
    }]);

    return Option;
}(_react.Component);

Option.propTypes = {
    /** @docs-ignore */
    active: _propTypes2.default.bool,
    /**
    * Additional information to explain the option, such as "Recommended".
    */
    description: _propTypes2.default.string,
    /**
    * The description text may appear to the right of the label or under the label.
    */
    descriptionPosition: _propTypes2.default.oneOf(['right', 'bottom']),
    /**
    * If disabled=true, the option is grayed out and cannot be clicked.
    */
    disabled: _propTypes2.default.bool,
    /**
    * The icon to show before the label. See the Icon component for more information.
    */
    icon: _propTypes2.default.node,
    /** @docs-ignore */
    onClick: _propTypes2.default.func,
    /**
    * If truncate=false, wrapping will be disabled and any additional text will be ellipsised.
    */
    truncate: _propTypes2.default.bool,
    /**
     * The value of this option and the label shown for it.
     */
    value: _propTypes2.default.string.isRequired
};
Option.defaultProps = {
    active: false,
    descriptionPosition: 'bottom',
    disabled: false,
    onClick: _lodash.noop,
    truncate: false
};
exports.default = Option;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/ComboBox/Option.jsx"))

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Menu");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/ResultsMenu");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/filter");

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"enterprise":".menu_ComboBox__guid__6f667f{overflow:auto}.activeOption_ComboBox__guid__6f667f{background-color:rgba(61,171,255,.12)}","lite":".menu_ComboBox__guid__6f667f{overflow:auto}.activeOption_ComboBox__guid__6f667f{background-color:rgba(61,171,255,.12)}"};
var themeLocals = {"enterprise":{"menu":"menu_ComboBox__guid__6f667f","activeOption":"activeOption_ComboBox__guid__6f667f"},"lite":{"menu":"menu_ComboBox__guid__6f667f","activeOption":"activeOption_ComboBox__guid__6f667f"}};
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

/***/ 400:
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

var _filter = __webpack_require__(27);

var _filter2 = _interopRequireDefault(_filter);

var _guid = __webpack_require__(16);

var _guid2 = _interopRequireDefault(_guid);

var _i18n = __webpack_require__(2);

var _keyboard = __webpack_require__(12);

var _testSupport = __webpack_require__(1);

var _ResultsMenu = __webpack_require__(26);

var _ResultsMenu2 = _interopRequireDefault(_ResultsMenu);

var _Popover = __webpack_require__(20);

var _Popover2 = _interopRequireDefault(_Popover);

var _Text = __webpack_require__(19);

var _Text2 = _interopRequireDefault(_Text);

var _Option = __webpack_require__(225);

var _Option2 = _interopRequireDefault(_Option);

var _ComboBox = __webpack_require__(183);

var _ComboBox2 = _interopRequireDefault(_ComboBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * `ComboBox` allows the user to select a predefined string or enter a new value. Unlike `Select`
 * and `Multiselect`, `Option` value must always be a string and `Option` does not have a label
 * property.
 */
var ComboBox = function (_Component) {
    _inherits(ComboBox, _Component);

    function ComboBox(props) {
        var _ref;

        _classCallCheck(this, ComboBox);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ComboBox.__proto__ || Object.getPrototypeOf(ComboBox)).call.apply(_ref, [this, props].concat(rest)));

        _this.handleMount = function (c) {
            _this.textInput = c;
            _this.setState({ anchor: c });
        };

        _this.handleActiveOptionMount = function (c) {
            if (c) {
                c.scrollIntoViewIfNeeded();
            }
        };

        _this.handleInputFocus = function () {
            var _this$props;

            _this.open();
            (_this$props = _this.props).onFocus.apply(_this$props, arguments);
        };

        _this.handleChange = function (e, _ref2) {
            var value = _ref2.value;

            if (!_this.isControlled()) {
                _this.setState({
                    value: value,
                    activeIndex: 0
                });
            } else {
                _this.setState({
                    activeIndex: 0
                });
            }
            _this.props.onChange(e, { value: value });
        };

        _this.handleSelectOption = function () {
            _this.handleChange.apply(_this, arguments);
            _this.focus();
            _this.close();
        };

        _this.handleInputKeyDown = function (e) {
            var activeIndex = _this.state.activeIndex;

            var numOptions = _this.availableOptionCount;
            var activeOption = _this.activeValue;

            if (_this.state.open) {
                switch ((0, _keyboard.keycode)(e)) {
                    case 'enter':
                        {
                            if (activeOption) {
                                _this.handleSelectOption(e, { value: activeOption });
                            }
                            break;
                        }
                    case 'tab':
                        _this.close();
                        break;
                    case 'down':
                        _this.setState({
                            activeIndex: Math.min(activeIndex + 1, numOptions - 1)
                        });
                        break;
                    case 'up':
                        _this.setState({
                            activeIndex: Math.max(activeIndex - 1, 0)
                        });
                        break;
                    default:
                    // do nothing
                }
            } else if ((0, _keyboard.addsCharacter)(e) || (0, _keyboard.keycode)(e) === 'enter' || (0, _keyboard.keycode)(e) === 'backspace' || (0, _keyboard.keycode)(e) === 'down' || (0, _keyboard.keycode)(e) === 'up') {
                _this.open();
            }
            _this.props.onKeyDown(e);
        };

        _this.handleInputClick = function () {
            if (!_this.state.open) {
                _this.open();
            }
        };

        _this.handleRequestClose = function (_ref3) {
            var event = _ref3.event,
                reason = _ref3.reason;

            var shouldClose = reason === 'offScreen' || reason === 'escapeKey' || reason === 'clickAway' && !_this.textInput.getEl().contains(event.target);
            if (shouldClose) {
                _this.close();
            }
        };

        _this.renderMenu = function (_ref4) {
            var anchorWidth = _ref4.anchorWidth,
                maxHeight = _ref4.maxHeight;
            var _this$props2 = _this.props,
                children = _this$props2.children,
                controlledFilter = _this$props2.controlledFilter,
                isLoadingOptions = _this$props2.isLoadingOptions,
                menuStyle = _this$props2.menuStyle;
            var _this$state = _this.state,
                activeIndex = _this$state.activeIndex,
                menuId = _this$state.menuId;

            var value = _this.getValue();

            var initialOptions = _react.Children.toArray(children);
            var hasExactMatch = (0, _lodash.some)(initialOptions, function (option) {
                return option.props.value === value;
            });
            if (!hasExactMatch && value) {
                initialOptions.unshift(_react2.default.createElement(_Option2.default, { key: 'currentInput', value: value }));
            }

            // Hightlight Active
            _this.availableOptionCount = 0;
            _this.activeValue = undefined;

            _this.options = (controlledFilter ? initialOptions : _filter2.default.filterByKeywords(initialOptions, value, function (option) {
                return option.props.value;
            })).map(function (option) {
                if (!(0, _lodash.has)(option.props, 'active')) {
                    // ignore Headings and Dividers
                    return option;
                }

                var active = _this.availableOptionCount === activeIndex;
                _this.availableOptionCount += 1;

                if (active) {
                    _this.activeValue = option.props.value;

                    return (0, _react.cloneElement)(option, {
                        ref: _this.handleActiveOptionMount,
                        className: _ComboBox2.default.activeOption,
                        id: menuId + '-active',
                        onClick: _this.handleSelectOption
                    });
                }

                return (0, _react.cloneElement)(option, {
                    onClick: _this.handleSelectOption
                });
            });

            return _react2.default.createElement(
                _ResultsMenu2.default,
                _extends({
                    className: _ComboBox2.default.menu,
                    style: (0, _lodash.extend)({ width: Math.max(anchorWidth, 200) }, menuStyle),
                    maxHeight: maxHeight,
                    isLoading: isLoadingOptions
                }, (0, _lodash.pick)(_this.props, 'noOptionsMessage', 'footerMessage', 'animateLoading', 'loadingMessage')),
                _this.options
            );
        };

        _this.state = {
            activeIndex: null,
            anchor: null,
            open: false,
            menuId: (0, _guid2.default)(),
            value: props.defaultValue || ''
        };
        _this.controlledExternally = (0, _lodash.has)(props, 'value');

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && (0, _lodash.has)(props, 'defaultValue')) {
            (0, _errorHandling.invariant)('ComboBox defaultValue prop is not compatible with value prop.');
        }

        if (process.env.NODE_ENV !== "production" && _this.isControlled() && props.onChange === _lodash.noop) {
            (0, _errorHandling.invariant)('ComboBox onChange prop is required when the value prop is provided. Use the\n                onChange callback to update the value prop.');
        }
        return _this;
    }

    _createClass(ComboBox, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (process.env.NODE_ENV !== "production" && !this.isControlled() && (0, _lodash.has)(nextProps, 'value')) {
                (0, _errorHandling.invariant)('Cannot change ComboBox from an uncontrolled component to a\n                controlled one. Prop \'value\' is not valid in subsequent updates if not provided in\n                the initial props.');
            }
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.isControlled() ? this.props.value : this.state.value;
        }

        /**
         * Focus the `ComboBox`.
         */

    }, {
        key: 'focus',
        value: function focus() {
            this.textInput.focus();
        }
    }, {
        key: 'isControlled',
        value: function isControlled() {
            return this.controlledExternally;
        }
    }, {
        key: 'open',
        value: function open() {
            this.setState({
                open: true,
                activeIndex: 0
            });
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                anchor = _state.anchor,
                menuId = _state.menuId,
                open = _state.open;

            return _react2.default.createElement(
                _Text2.default,
                _extends({}, (0, _testSupport.createTestHook)(__filename), {
                    canClear: true
                }, (0, _lodash.omit)(this.props, 'animateLoading', 'controlledFilter', 'isLoadingOptions', 'loadingMessage', 'menuStyle', 'noOptionsMessage', 'onFilterChange', 'footerMessage'), {
                    onFocus: this.handleInputFocus,
                    onClick: this.handleInputClick,
                    onChange: this.handleChange,
                    onKeyDown: this.handleInputKeyDown,
                    ref: this.handleMount,
                    role: 'combobox',
                    value: this.getValue(),
                    'aria-activedescendant': menuId + '-active',
                    'aria-expanded': open,
                    'aria-haspopup': true,
                    'aria-owns': menuId
                }),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        anchor: anchor,
                        appearance: 'light',
                        autoCloseWhenOffScreen: true,
                        canCoverAnchor: false,
                        defaultPlacement: 'vertical',
                        id: menuId,
                        onRequestClose: this.handleRequestClose,
                        open: open && !!anchor,
                        repositionMode: 'flip'
                    },
                    this.renderMenu
                )
            );
        }
    }]);

    return ComboBox;
}(_react.Component);

ComboBox.propTypes = {
    /*
     * Whether or not to show the wait spinner when loading. It's recommended to set this to
     * `true` when loading may take more than one second.
     */
    animateLoading: _propTypes2.default.bool,
    /** Append removes rounded borders and border from the right side. */
    append: _propTypes2.default.bool,
    /** All children must be instances of `ComboBox.Option`. */
    children: _propTypes2.default.node,
    /** If true, this component will not handle filtering. The parent must update the
     * Options based on the onChange value. */
    controlledFilter: _propTypes2.default.bool,
    /** The initial value of the input. Only applicable in uncontrolled mode. */
    defaultValue: _propTypes2.default.string,
    /**
     * The id of the description. When placed in a ControlGroup, this automatically set to the
     * ControlGroup's help component.
     */
    describedBy: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    /**
     * Highlight the field as having an error. The border and text will turn red.
     */
    error: _propTypes2.default.bool,
    /**
     * The footer message can show additional information, such as a truncation message.
     */
    footerMessage: _propTypes2.default.node,
    /** Make the control an inline block with variable width. */
    inline: _propTypes2.default.bool,
    /*
     * Whether or not to show the loading message and/or wait spinner. It's recommended to
     * remove the old children while loading new children to ensure the loading message is
     * not hidden.
     */
    isLoadingOptions: _propTypes2.default.bool,
    /**
    * The id of the label. When placed in a ControlGroup, this automatically set to the
    * ControlGroup's label.
    */
    labelledBy: _propTypes2.default.string,
    /**
     * The loading message to show when isLoadingOptions. */
    loadingMessage: _propTypes2.default.node,
    menuStyle: _propTypes2.default.object,
    /**
     * The noOptionsMessage is shown when there are no children and not loading, such as when
     * there are no Options matching the filter. This can be customized to the type of content,
     * such as "No matching dashboards"; insert other content, such as an error message; or
     * communicate a minimum number of chararters to enter to see results. */
    noOptionsMessage: _propTypes2.default.node,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    /** Prepend removes rounded borders from the left side. */
    prepend: _propTypes2.default.bool,
    /** The size of the text input. */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /** The value of the input. Only applicable in controlled mode. */
    value: _propTypes2.default.string
};
ComboBox.defaultProps = {
    animateLoading: false,
    controlledFilter: false,
    disabled: false,
    error: false,
    inline: false,
    isLoadingOptions: false,
    menuStyle: {},
    onChange: _lodash.noop,
    onFocus: _lodash.noop,
    onKeyDown: _lodash.noop,
    placeholder: (0, _i18n._)('Select...'),
    size: 'medium'
};
ComboBox.Option = _Option2.default;
ComboBox.Divider = _ResultsMenu2.default.Divider;
ComboBox.Heading = _ResultsMenu2.default.Heading;
exports.default = ComboBox;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/ComboBox/ComboBox.jsx"))

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