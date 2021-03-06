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
/******/ 	return __webpack_require__(__webpack_require__.s = 571);
/******/ })
/************************************************************************/
/******/ ({

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(6);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function splitToWords(string) {
    var regex = /[a-zA-Z0-9]+/g;
    var words = [];
    var match = regex.exec(string);
    while (match != null) {
        words.push(match[0]);
        match = regex.exec(string);
    }
    return words;
}

function splitWordToAdjacentCharset(word) {
    var result = [];
    for (var i = 0; i < word.length - 1; i += 1) {
        result.push(word.charAt(i) + word.charAt(i + 1));
    }
    return result;
}

function splitToAdjacentCharset(string) {
    var words = string;
    if (typeof words === 'string') {
        words = splitToWords(words);
    }
    var array = (0, _lodash.map)(words, function (word) {
        return splitWordToAdjacentCharset(word);
    });
    return (0, _lodash.flatten)(array);
}

function commonElementsOf(inputSet, targetSet) {
    var result = [];
    var input = inputSet;

    targetSet.every(function (targetElem) {
        input.every(function (inputElem, inputIdx) {
            if (targetElem === inputElem) {
                result.push(targetElem);
                input[inputIdx] = undefined;
            }
            return targetElem !== inputElem;
        });
        return true;
    });

    return result;
}

exports.default = {
    /**
     *  a simple filter implementation that support multi keywords
     * @param {Object[]} items - items to be filtered
     * @param {string} keywords - filter keywords
     * @param {function} valueGetter - a function that returns value from item,
     * return undefined or null will keep the item in the result
     * @returns {*}
     */
    filterByKeywords: function filterByKeywords(items) {
        var keywords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var valueGetter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (item) {
            return item.value;
        };

        // Split by spaces not in quotes, trim quote.
        var words = (keywords.match(/(?:[^\s"]+|"[^"]*")+/g) || []).map(function (word) {
            return word.replace(/^"(.*)"$/, '$1').toLowerCase();
        });

        // If there are no words, just show everything.
        if (words.length === 0) {
            return items;
        }
        return items.filter(function (item) {
            var text = valueGetter(item);
            var matchCount = 0;
            if (text == null) {
                return true;
            }

            (0, _lodash.some)(words, function (word, index) {
                if (matchCount < index) {
                    return true;
                }

                if ((0, _lodash.includes)(text.toLowerCase(), word)) {
                    matchCount += 1;
                }
                return false;
            });
            return matchCount === words.length;
        });
    },

    /**
     * Main entry point for ranking a group of strings.
     * @param {string} input:
     * @param {string[]} stringsToMatch
     *
     * return an sorted array inluding ranking and highlighted text for each string.
     * @returns {Object[]}
     *
     **/
    match: function match(inputStr, stringsToMatch, options) {
        var _this = this;

        var results = [];
        (0, _lodash.each)(stringsToMatch, function (str) {
            var string = str;
            var input = inputStr;
            if (!options || !options.caseSensitive) {
                string = str.toUpperCase();
                input = inputStr.toUpperCase();
            }
            var rankResult = _this.rank(input, str, options);
            if (rankResult.value > 1) {
                rankResult.highlightIndexes = [];
                (0, _lodash.each)(rankResult.commonWords, function (word) {
                    var regex = new RegExp('\\b' + word + '\\b');
                    var index = string.search(regex);
                    rankResult.highlightIndexes.push({
                        start: index,
                        length: word.length
                    });
                    var emptyStr = new Array(word.length + 1).join(' ');
                    string = string.replace(regex, emptyStr);
                });
                // get highlighted indexes of the non-common part.
                var wordsRemain = _lodash.without.apply(undefined, [splitToWords(input)].concat(_toConsumableArray(rankResult.commonWords)));
                (0, _lodash.each)(wordsRemain, function (word) {
                    var index = string.indexOf(word);
                    if (index >= 0) {
                        rankResult.highlightIndexes.push({
                            start: index,
                            length: word.length
                        });
                    }
                });
            } else if (string.indexOf(input) >= 0) {
                rankResult.highlightIndexes = [{
                    start: string.indexOf(input),
                    length: input.length
                }];
            }
            rankResult.originString = str;
            if (rankResult.value > 0.4 || rankResult.highlightIndexes != null) {
                // Here's the threshold, if no word matches, we only return if similarity above 40%.
                // reference: http://www.catalysoft.com/articles/StrikeAMatch.html
                results.push(rankResult);
            }
        });
        return (0, _lodash.sortBy)(results, function (result) {
            return -result.value;
        });
    },
    rank: function rank(inputStr, targetStr, options) {
        var input = inputStr;
        var target = targetStr;
        if (!options || !options.caseSensitive) {
            input = input.toUpperCase();
            target = target.toUpperCase();
        }
        var similiarity = this.getSimilarityOfStrings(input, target);

        var inputWords = splitToWords(input);
        var targetWords = splitToWords(target);

        var commonWords = commonElementsOf(inputWords, targetWords);
        var lccwCount = this.getLongestContinuousCommonWords(targetWords, commonWords);
        var rank = commonWords.length + similiarity;
        if (lccwCount > 1) {
            rank += lccwCount;
        }
        return {
            value: rank,
            commonWords: commonWords
        };
    },
    getLongestContinuousCommonWords: function getLongestContinuousCommonWords(targetWords, commonWords) {
        var continuous = 0;
        var maxWordCount = 0;
        (0, _lodash.each)(commonWords, function (word, idx) {
            var idxInTarget = targetWords.indexOf(word);
            continuous += 1;
            if (idxInTarget + 1 >= targetWords.length || commonWords[idx + 1] !== targetWords[idxInTarget + 1]) {
                maxWordCount = Math.max(maxWordCount, continuous);
                continuous = 0;
            }
        });
        return maxWordCount;
    },
    getSimilarityOfStrings: function getSimilarityOfStrings(input, target) {
        var inputCharset = splitToAdjacentCharset(input);
        var targetCharset = splitToAdjacentCharset(target);

        var commonCharset = commonElementsOf(inputCharset, targetCharset);
        return 2.0 * (commonCharset.length / (inputCharset.length + targetCharset.length));
    }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });