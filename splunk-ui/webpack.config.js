/* This file is written in es5, and disables many eslint features */
/* eslint-disable max-len, no-var, object-shorthand, prefer-arrow-callback, func-names, space-before-function-paren, no-param-reassign, comma-dangle */

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var baseConfig = require('splunk-webpack-tools/lib/base.config').default;

var DEBUG = process.env.NODE_ENV !== 'production';
var componentsDir = path.resolve(__dirname, 'src/components');
var entries = fs.readdirSync(componentsDir)
    .filter(function(fileName) {
        return !/^\./.test(fileName);
    })
    .reduce(function(accum, file) {
        accum[path.join('components', file)] = path.join(__dirname, 'src/components', file);
        return accum;
    }, {});

var iconsDir = path.resolve(__dirname, 'src/icons');
entries = fs.readdirSync(iconsDir)
    .filter(function(fileName) {
        return /\.jsx$/.test(fileName) && !/\.test\.jsx$/.test(fileName);
    })
    .reduce(function(accum, file) {
        var name = path.join('icons', file.replace(/\.jsx$/, ''));
        accum[name] = path.join(iconsDir, file);
        return accum;
    }, entries);

var utilDir = path.resolve(__dirname, 'src/util');
entries = fs.readdirSync(utilDir)
    .filter(function(fileName) {
        return !/^\./.test(fileName);
    })
    .reduce(function(accum, file) {
        var name = path.join('util', file.replace(/\.js$/, ''));
        accum[name] = path.join(__dirname, 'src/util', file);
        return accum;
    }, entries);

module.exports = webpackMerge(baseConfig, {
    entry: entries,
    externals: [
        {
            'moment': false,
        },
        /^[a-z\-0-9]+$/,
        /^splunk-ui/,
    ],
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
    },
    plugins: [
        // Define free variables
        // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        new webpack.DefinePlugin({
            __DEV__: 'process.env.NODE_ENV !== "production"',
        }),
    ],
});
