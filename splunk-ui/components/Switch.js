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
/******/ 	return __webpack_require__(__webpack_require__.s = 437);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/keyboard");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/Clickable");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/guid");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/components/ScreenReaderContent");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/i18n");

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(373);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../splunk-postcss-loader/lib/index.js!./Switch.css", function() {
			var newContent = require("!!./../../../../splunk-postcss-loader/lib/index.js!./Switch.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var styles = {"lite":".main_Switch__guid__b4d5b0{position:relative;padding:5px 0}.main_Switch__guid__b4d5b0[data-size=small]{font-size:11px;padding:3px 0}.switch_Switch__guid__b4d5b0{display:inline-block;position:relative;width:16px;height:16px}.switch_Switch__guid__b4d5b0:not([disabled]){background:#fff;border-color:#333;color:#333;border-style:solid}.switch_Switch__guid__b4d5b0:focus{border-color:rgba(82,168,236,.8);outline:0;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6)}.switch_Switch__guid__b4d5b0[disabled]{color:#ccc;background-color:#f5f5f5;border:1px solid #d6d6d6;cursor:not-allowed}.radio_Switch__guid__b4d5b0,.radio_Switch__guid__b4d5b0:not([disabled]){border-radius:50%}.radio_Switch__guid__b4d5b0[aria-checked=true]:after{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;content:\"\";position:absolute;left:3px;top:3px;width:8px;height:8px;border-radius:50%;background-color:currentColor}.radio_Switch__guid__b4d5b0[disabled]:after{background-color:#ccc}.checkbox_Switch__guid__b4d5b0{border-radius:2px;padding:2px;line-height:16px;margin-bottom:0;font-size:10px;text-align:center;vertical-align:middle}.toggle_Switch__guid__b4d5b0{position:relative;width:32px;height:16px;background-color:#f5f5f5;border-radius:8px;-webkit-transition:background-color .2s;-o-transition:background-color .2s;transition:background-color .2s}.toggle_Switch__guid__b4d5b0:not([disabled]){border:1px solid #ccc;-webkit-box-shadow:inset 0 2px 2px rgba(0,0,0,.12);box-shadow:inset 0 2px 2px rgba(0,0,0,.12)}.toggle_Switch__guid__b4d5b0:not([disabled]) .indicator_Switch__guid__b4d5b0{background:#fff;border:1px solid #333;color:#333;border-radius:50%}.toggle_Switch__guid__b4d5b0:not([disabled]):hover .indicator_Switch__guid__b4d5b0{background:#efefef;border-color:#3b3b3b;text-decoration:none}.toggle_Switch__guid__b4d5b0[disabled]{border:1px solid #d6d6d6;-webkit-box-shadow:inset 0 2px 2px rgba(0,0,0,.06);box-shadow:inset 0 2px 2px rgba(0,0,0,.06);background-color:#f5f5f5}.toggle_Switch__guid__b4d5b0[disabled] .indicator_Switch__guid__b4d5b0{border:1px solid hsla(0,0%,84%,.8)}.toggle_Switch__guid__b4d5b0[aria-checked=true]{background-color:#f58220;border-color:#f58220}.toggle_Switch__guid__b4d5b0[aria-checked=true][disabled]{background-color:#fac190;border-color:transparent}.toggle_Switch__guid__b4d5b0:focus{outline:0;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6)}.toggle_Switch__guid__b4d5b0:focus .toggleFocus_Switch__guid__b4d5b0{border-color:rgba(82,168,236,.8)}.toggleFocus_Switch__guid__b4d5b0{position:absolute;border:1px solid transparent;-webkit-transition:border-color .2s;-o-transition:border-color .2s;transition:border-color .2s;border-radius:8px;top:-1px;right:-1px;bottom:-1px;left:-1px;z-index:1}.indicator_Switch__guid__b4d5b0{background:#fff;border-color:#333;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;height:16px;width:16px;border-radius:8px;position:absolute;left:-1px;top:-1px;-webkit-transition:left .2s;-o-transition:left .2s;transition:left .2s}[aria-checked=true] .indicator_Switch__guid__b4d5b0{left:calc(100% - 16px + 1px)}.label_Switch__guid__b4d5b0{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;border-width:1px;visibility:inherit;-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;margin-left:5px}.label_Switch__guid__b4d5b0[data-size=small]{font-size:11px;margin-top:1px}","enterprise":".main_Switch__guid__b4d5b0{position:relative;padding:5px 0}.main_Switch__guid__b4d5b0[data-size=small]{font-size:11px;padding:3px 0}.switch_Switch__guid__b4d5b0{display:inline-block;position:relative;width:16px;height:16px}.switch_Switch__guid__b4d5b0:not([disabled]){background-image:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#eee));background-image:-webkit-linear-gradient(top,#f7f7f7,#eee);background-image:-o-linear-gradient(top,#f7f7f7,#eee);background-image:linear-gradient(180deg,#f7f7f7,#eee);border-color:#bfbfbf;color:#333;-webkit-box-shadow:inset 0 1px 0 #f2f2f2;box-shadow:inset 0 1px 0 #f2f2f2;border-style:solid}.switch_Switch__guid__b4d5b0:focus{border-color:rgba(82,168,236,.8);outline:0;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6)}.switch_Switch__guid__b4d5b0[disabled]{color:#ccc;background-color:#f5f5f5;border:1px solid #d6d6d6;cursor:not-allowed}.radio_Switch__guid__b4d5b0,.radio_Switch__guid__b4d5b0:not([disabled]){border-radius:50%}.radio_Switch__guid__b4d5b0[aria-checked=true]:after{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-width:1px;visibility:inherit;content:\"\";position:absolute;left:3px;top:3px;width:8px;height:8px;border-radius:50%;background-color:currentColor}.radio_Switch__guid__b4d5b0[disabled]:after{background-color:#ccc}.checkbox_Switch__guid__b4d5b0{border-radius:4px;padding:2px;line-height:16px;margin-bottom:0;font-size:10px;text-align:center;vertical-align:middle}.toggle_Switch__guid__b4d5b0{position:relative;width:32px;height:16px;background-color:#f5f5f5;border-radius:8px;-webkit-transition:background-color .2s;-o-transition:background-color .2s;transition:background-color .2s}.toggle_Switch__guid__b4d5b0:not([disabled]){border:1px solid #ccc;-webkit-box-shadow:inset 0 2px 2px rgba(0,0,0,.12);box-shadow:inset 0 2px 2px rgba(0,0,0,.12)}.toggle_Switch__guid__b4d5b0:not([disabled]) .indicator_Switch__guid__b4d5b0{background-image:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#eee));background-image:-webkit-linear-gradient(top,#f7f7f7,#eee);background-image:-o-linear-gradient(top,#f7f7f7,#eee);background-image:linear-gradient(180deg,#f7f7f7,#eee);border:1px solid #bfbfbf;color:#333;-webkit-box-shadow:inset 0 1px 0 #f2f2f2;box-shadow:inset 0 1px 0 #f2f2f2;border-radius:50%}.toggle_Switch__guid__b4d5b0:not([disabled]):hover .indicator_Switch__guid__b4d5b0{background-image:none;background-color:#f7f7f7;border-color:#c7c7c7;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.08);box-shadow:0 1px 1px rgba(0,0,0,.08);color:#333;text-decoration:none}.toggle_Switch__guid__b4d5b0[disabled]{border:1px solid #d6d6d6;-webkit-box-shadow:inset 0 2px 2px rgba(0,0,0,.06);box-shadow:inset 0 2px 2px rgba(0,0,0,.06);background-color:#f5f5f5}.toggle_Switch__guid__b4d5b0[disabled] .indicator_Switch__guid__b4d5b0{border:1px solid hsla(0,0%,84%,.8)}.toggle_Switch__guid__b4d5b0[aria-checked=true]{background-color:#65a637;border-color:#65a637}.toggle_Switch__guid__b4d5b0[aria-checked=true][disabled]{background-color:#b2d39b;border-color:transparent}.toggle_Switch__guid__b4d5b0:focus{outline:0;-webkit-box-shadow:0 0 8px rgba(82,168,236,.6);box-shadow:0 0 8px rgba(82,168,236,.6)}.toggle_Switch__guid__b4d5b0:focus .toggleFocus_Switch__guid__b4d5b0{border-color:rgba(82,168,236,.8)}.toggleFocus_Switch__guid__b4d5b0{position:absolute;border:1px solid transparent;-webkit-transition:border-color .2s;-o-transition:border-color .2s;transition:border-color .2s;border-radius:8px;top:-1px;right:-1px;bottom:-1px;left:-1px;z-index:1}.indicator_Switch__guid__b4d5b0{background-image:-webkit-gradient(linear,left top,left bottom,from(#f7f7f7),to(#eee));background-image:-webkit-linear-gradient(top,#f7f7f7,#eee);background-image:-o-linear-gradient(top,#f7f7f7,#eee);background-image:linear-gradient(180deg,#f7f7f7,#eee);border-color:#bfbfbf;color:#333;-webkit-box-shadow:inset 0 1px 0 #f2f2f2;box-shadow:inset 0 1px 0 #f2f2f2;-webkit-box-sizing:border-box;box-sizing:border-box;height:16px;width:16px;border-radius:8px;position:absolute;left:-1px;top:-1px;-webkit-transition:left .2s;-o-transition:left .2s;transition:left .2s}[aria-checked=true] .indicator_Switch__guid__b4d5b0{left:calc(100% - 16px + 1px)}.label_Switch__guid__b4d5b0{-webkit-animation:none 0s ease 0s 1 normal none running;-o-animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;-webkit-border-image:none;-o-border-image:none;-webkit-box-shadow:none;-webkit-box-sizing:content-box;-webkit-columns:auto;-moz-columns:auto;-webkit-column-count:auto;-moz-column-count:auto;-webkit-column-fill:balance;-moz-column-fill:balance;-webkit-column-gap:normal;-moz-column-gap:normal;-webkit-column-rule:medium none currentColor;-moz-column-rule:medium none currentColor;-webkit-column-span:1;-moz-column-span:1;-webkit-column-width:auto;-moz-column-width:auto;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-perspective:none;-webkit-perspective-origin:50% 50%;-moz-tab-size:8;-o-tab-size:8;-moz-text-align-last:auto;-webkit-transform:none;-o-transform:none;-webkit-transform-origin:50% 50% 0;-o-transform-origin:50% 50% 0;-webkit-transform-style:flat;-webkit-transition:none 0s ease 0s;-o-transition:none 0s ease 0s;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;font-family:Splunk Platform Sans,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;border-width:1px;visibility:inherit;-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;margin-left:5px}.label_Switch__guid__b4d5b0[data-size=small]{font-size:11px;margin-top:1px}"};
var themeLocals = {"lite":{"main":"main_Switch__guid__b4d5b0","switch":"switch_Switch__guid__b4d5b0","radio":"radio_Switch__guid__b4d5b0 switch_Switch__guid__b4d5b0","checkbox":"checkbox_Switch__guid__b4d5b0 switch_Switch__guid__b4d5b0","toggle":"toggle_Switch__guid__b4d5b0","indicator":"indicator_Switch__guid__b4d5b0","toggleFocus":"toggleFocus_Switch__guid__b4d5b0","label":"label_Switch__guid__b4d5b0"},"enterprise":{"main":"main_Switch__guid__b4d5b0","switch":"switch_Switch__guid__b4d5b0","radio":"radio_Switch__guid__b4d5b0 switch_Switch__guid__b4d5b0","checkbox":"checkbox_Switch__guid__b4d5b0 switch_Switch__guid__b4d5b0","toggle":"toggle_Switch__guid__b4d5b0","indicator":"indicator_Switch__guid__b4d5b0","toggleFocus":"toggleFocus_Switch__guid__b4d5b0","label":"label_Switch__guid__b4d5b0"}};
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

/***/ 42:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/icons/Check");

/***/ }),

/***/ 437:
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

var _guid = __webpack_require__(16);

var _guid2 = _interopRequireDefault(_guid);

var _i18n = __webpack_require__(2);

var _keyboard = __webpack_require__(12);

var _testSupport = __webpack_require__(1);

var _toClassName = __webpack_require__(5);

var _toClassName2 = _interopRequireDefault(_toClassName);

var _Box = __webpack_require__(11);

var _Box2 = _interopRequireDefault(_Box);

var _Clickable = __webpack_require__(13);

var _Clickable2 = _interopRequireDefault(_Clickable);

var _Check = __webpack_require__(42);

var _Check2 = _interopRequireDefault(_Check);

var _ScreenReaderContent = __webpack_require__(18);

var _ScreenReaderContent2 = _interopRequireDefault(_ScreenReaderContent);

var _Switch = __webpack_require__(212);

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

/**
 * `Switch` is a basic form control with an on/off state. For a group of radio switches,
 * the `RadioList` component would typically be used instead of `Switch`.
 */

var Switch = function (_Component) {
    _inherits(Switch, _Component);

    function Switch() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Switch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.handleContainerClick = function (e) {
            _this.props.onClick(e, { value: _this.props.value });
        }, _this.handleKeyPress = function (e) {
            if ((0, _keyboard.keycode)(e) === 'space') {
                e.preventDefault();
                _this.handleContainerClick(e);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Switch, [{
        key: 'focus',


        /**
        * Place focus on the toggle.
        */
        value: function focus() {
            this.toggle.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                appearance = _props.appearance,
                children = _props.children,
                className = _props.className,
                disabled = _props.disabled,
                id = _props.id,
                inline = _props.inline,
                labelledBy = _props.labelledBy,
                onClick = _props.onClick,
                selected = _props.selected,
                selectedLabel = _props.selectedLabel,
                size = _props.size,
                unselectedLabel = _props.unselectedLabel,
                value = _props.value,
                otherProps = _objectWithoutProperties(_props, ['appearance', 'children', 'className', 'disabled', 'id', 'inline', 'labelledBy', 'onClick', 'selected', 'selectedLabel', 'size', 'unselectedLabel', 'value']);

            var labelId = void 0;
            if (children) {
                labelId = (0, _guid2.default)();
            } else if (labelledBy) {
                labelId = labelledBy;
            }

            var controlId = void 0;
            if (children) {
                controlId = (0, _guid2.default)();
            } else if (id) {
                controlId = id;
            }

            return _react2.default.createElement(
                _Box2.default,
                _extends({
                    flex: true,
                    inline: inline,
                    className: (0, _toClassName2.default)(_Switch2.default.main, className),
                    onClick: !disabled && this.handleContainerClick,
                    'data-size': size
                }, (0, _testSupport.createTestHook)(__filename), otherProps),
                _react2.default.createElement(
                    _Clickable2.default,
                    {
                        className: _Switch2.default[appearance],
                        disabled: disabled,
                        role: appearance === 'toggle' ? 'switch' : appearance,
                        'aria-labelledby': labelId,
                        'aria-checked': selected,
                        id: id,
                        ref: function ref(c) {
                            return _this2.toggle = c;
                        },
                        title: selected ? selectedLabel : unselectedLabel
                    },
                    selected && appearance === 'checkbox' && _react2.default.createElement(_Check2.default, { inline: false, size: 1 }),
                    appearance === 'toggle' && _react2.default.createElement('div', { className: _Switch2.default.indicator }),
                    appearance === 'toggle' && _react2.default.createElement('div', { className: _Switch2.default.toggleFocus })
                ),
                selected ? _react2.default.createElement(
                    _ScreenReaderContent2.default,
                    null,
                    selectedLabel
                ) : _react2.default.createElement(
                    _ScreenReaderContent2.default,
                    null,
                    unselectedLabel
                ),
                children && _react2.default.createElement(
                    'label',
                    {
                        className: _Switch2.default.label,
                        id: labelId,
                        htmlFor: controlId,
                        'data-size': size
                    },
                    children
                )
            );
        }
    }]);

    return Switch;
}(_react.Component);

Switch.propTypes = {
    /**
    * The `radio` appearance is used to create `RadioList` and is not intended for use in an
    * individual switch.
    */
    appearance: _propTypes2.default.oneOf(['radio', 'checkbox', 'toggle']),
    /** @docs-ignore. */
    children: _propTypes2.default.node,
    /** @docs-ignore. */
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    /**
    * If `Switch` is not provided children as the label, an id can be provided for the control.
    * Set a label's for attribute to this id to link the two elements.
    */
    id: _propTypes2.default.string,
    /** Make the control an inline block with variable width. */
    inline: _propTypes2.default.bool,
    /**
    * If `Switch` is not provided children as the label, an id can be provided to
    * another element.
    */
    labelledBy: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    selected: _propTypes2.default.bool,
    /**
    * The selected label is shown in a tooltip and to Screen Readers.
    */
    selectedLabel: _propTypes2.default.string,
    /** The size of the text label. */
    size: _propTypes2.default.oneOf(['small', 'medium']),
    /**
    * The unselected label is shown in a tooltip and to Screen Readers.
    */
    unselectedLabel: _propTypes2.default.string,
    value: _propTypes2.default.any.isRequired
};
Switch.defaultProps = {
    appearance: 'checkbox',
    disabled: false,
    inline: false,
    onClick: noop,
    selected: false,
    selectedLabel: (0, _i18n._)('Selected'),
    size: 'medium',
    unselectedLabel: (0, _i18n._)('Not selected')
};
exports.default = Switch;
/* WEBPACK VAR INJECTION */}.call(exports, "src/components/Switch/Switch.jsx"))

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("splunk-ui/util/toClassName");

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