'use strict';

/* eslint-env commonjs */

var loaderUtils = require('loader-utils');

module.exports = function reactRenderLoader(source, map) {
    var options = loaderUtils.getOptions(this);
    var newSource = 'import thing from \'' + options.file + '\';' + source;

    // TODO: verify if source map needs adjustment
    this.callback(null, newSource, map);
};