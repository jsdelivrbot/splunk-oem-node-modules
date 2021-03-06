'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-param-reassign */
/**
 * Changes the initial `define` call of an amd module to a `require` call in the output.
 *
 * Splunk expects dashboard extensions to be self executing, so the initial module
 * should be executed rather than just defined. This is a very naive plugin that
 * simply changes the amd output of the module to a require statement from define.
 *
 * @param {String[]} [whitelist] - A list of entry modules to apply this plugin to.
 * If not provided, plugin is applied to all entries.
 */

var DashboardExtensionOutputPlugin = function () {
    function DashboardExtensionOutputPlugin(whitelist) {
        _classCallCheck(this, DashboardExtensionOutputPlugin);

        // TODO: Implement support for a RegEx whitelist
        this.whitelist = whitelist;
    }

    _createClass(DashboardExtensionOutputPlugin, [{
        key: 'apply',
        value: function apply(compiler) {
            var processChunk = this.processChunk.bind(this);
            compiler.plugin('compilation', function (compilation) {
                compilation.templatesPlugin('render-with-entry', processChunk);
            });
        }
    }, {
        key: 'processChunk',
        value: function processChunk(source, chunk) {
            if (!this.whitelist || this.whitelist.indexOf(chunk.name) > -1) {
                /* TODO: handle
                 * `define(function() { ... })`, convert to `require([], function() { ... })`
                 */
                source.children[0] = source.children[0].replace(/^define/, 'require');
            }
            return source;
        }
    }]);

    return DashboardExtensionOutputPlugin;
}();

exports.default = DashboardExtensionOutputPlugin;


module.exports = DashboardExtensionOutputPlugin;