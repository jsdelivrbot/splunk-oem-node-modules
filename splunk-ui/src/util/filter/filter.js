import { includes, some, map, each, flatten, sortBy, without } from 'lodash';

function splitToWords(string) {
    const regex = /[a-zA-Z0-9]+/g;
    const words = [];
    let match = regex.exec(string);
    while (match != null) {
        words.push(match[0]);
        match = regex.exec(string);
    }
    return words;
}

function splitWordToAdjacentCharset(word) {
    const result = [];
    for (let i = 0; i < word.length - 1; i += 1) {
        result.push(word.charAt(i) + word.charAt(i + 1));
    }
    return result;
}

function splitToAdjacentCharset(string) {
    let words = string;
    if (typeof words === 'string') {
        words = splitToWords(words);
    }
    const array = map(words, word => (splitWordToAdjacentCharset(word)));
    return flatten(array);
}

function commonElementsOf(inputSet, targetSet) {
    const result = [];
    const input = inputSet;

    targetSet.every((targetElem) => {
        input.every((inputElem, inputIdx) => {
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

export default {
    /**
     *  a simple filter implementation that support multi keywords
     * @param {Object[]} items - items to be filtered
     * @param {string} keywords - filter keywords
     * @param {function} valueGetter - a function that returns value from item,
     * return undefined or null will keep the item in the result
     * @returns {*}
     */
    filterByKeywords: (items, keywords = '', valueGetter = item => (item.value)) => {
        // Split by spaces not in quotes, trim quote.
        const words = (keywords.match(/(?:[^\s"]+|"[^"]*")+/g) || []).map(word => (
            word.replace(/^"(.*)"$/, '$1').toLowerCase()
        ));

        // If there are no words, just show everything.
        if (words.length === 0) {
            return items;
        }
        return items.filter((item) => {
            const text = valueGetter(item);
            let matchCount = 0;
            if (text == null) {
                return true;
            }

            some(words, (word, index) => {
                if (matchCount < index) {
                    return true;
                }

                if (includes(text.toLowerCase(), word)) {
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
    match(inputStr, stringsToMatch, options) {
        const results = [];
        each(stringsToMatch, (str) => {
            let string = str;
            let input = inputStr;
            if (!options || !options.caseSensitive) {
                string = str.toUpperCase();
                input = inputStr.toUpperCase();
            }
            const rankResult = this.rank(input, str, options);
            if (rankResult.value > 1) {
                rankResult.highlightIndexes = [];
                each(rankResult.commonWords, (word) => {
                    const regex = new RegExp(`\\b${word}\\b`);
                    const index = string.search(regex);
                    rankResult.highlightIndexes.push({
                        start: index,
                        length: word.length,
                    });
                    const emptyStr = (new Array(word.length + 1)).join(' ');
                    string = string.replace(regex, emptyStr);
                });
                // get highlighted indexes of the non-common part.
                const wordsRemain = without(splitToWords(input), ...rankResult.commonWords);
                each(wordsRemain, (word) => {
                    const index = string.indexOf(word);
                    if (index >= 0) {
                        rankResult.highlightIndexes.push({
                            start: index,
                            length: word.length,
                        });
                    }
                });
            } else if (string.indexOf(input) >= 0) {
                rankResult.highlightIndexes = [{
                    start: string.indexOf(input),
                    length: input.length,
                }];
            }
            rankResult.originString = str;
            if (rankResult.value > 0.4 || rankResult.highlightIndexes != null) {
                // Here's the threshold, if no word matches, we only return if similarity above 40%.
                // reference: http://www.catalysoft.com/articles/StrikeAMatch.html
                results.push(rankResult);
            }
        });
        return sortBy(results, result => (-result.value));
    },

    rank(inputStr, targetStr, options) {
        let input = inputStr;
        let target = targetStr;
        if (!options || !options.caseSensitive) {
            input = input.toUpperCase();
            target = target.toUpperCase();
        }
        const similiarity = this.getSimilarityOfStrings(input, target);

        const inputWords = splitToWords(input);
        const targetWords = splitToWords(target);

        const commonWords = commonElementsOf(inputWords, targetWords);
        const lccwCount = this.getLongestContinuousCommonWords(targetWords,
            commonWords);
        let rank = commonWords.length + similiarity;
        if (lccwCount > 1) {
            rank += lccwCount;
        }
        return {
            value: rank,
            commonWords,
        };
    },

    getLongestContinuousCommonWords(targetWords, commonWords) {
        let continuous = 0;
        let maxWordCount = 0;
        each(commonWords, (word, idx) => {
            const idxInTarget = targetWords.indexOf(word);
            continuous += 1;
            if (idxInTarget + 1 >= targetWords.length
                || commonWords[idx + 1] !== targetWords[idxInTarget + 1]) {
                maxWordCount = Math.max(maxWordCount, continuous);
                continuous = 0;
            }
        });
        return maxWordCount;
    },

    getSimilarityOfStrings(input, target) {
        const inputCharset = splitToAdjacentCharset(input);
        const targetCharset = splitToAdjacentCharset(target);

        const commonCharset = commonElementsOf(inputCharset, targetCharset);
        return 2.0 * (commonCharset.length / (inputCharset.length
            + targetCharset.length));
    },

};
