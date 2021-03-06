/** Syntax parsing/tokenizing util */

import { isEmpty, indexOf } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';

// import Prism in a pollution-free way
//   Prism will grab all <pre><code> on the page and infect them once
//   it finds itself in a browser, so here we set window to undefined in
//   his scope to trick him.
// eslint-disable-next-line import/no-unresolved
import Prism from 'imports-loader?window=>undefined,global=>undefined!prismjs';

// Prism language extensions require Prism.languages exists in the context
const langExtensions = require.context( // eslint-disable-line no-undef
    'exports-loader?Prism.languages!imports-loader?Prism=>{languages:{}}!prismjs/components',
    false,
    /\.js/,
);

export const supportedLanguages = [
    'markup',
    'xml',
    'html',
    'mathml',
    'svg',
    'css',
    'clike',
    'javascript',
    'js',
    'json',
    'python',
    'java',
];

export function getRules(language) {
    let rules = Prism.languages[language];
    if (isEmpty(rules)) {
        if (__DEV__ && indexOf(supportedLanguages, language) < 0) {
            invariant(`unsupported language ${language}, list of supported languages
            can be found at syntax.supportedLanguages`);
        }
        rules = langExtensions(`./prism-${language}.js`)[language];
    }

    return rules;
}

export function tokenize(text, language) {
    const rules = getRules(language);
    return Prism.tokenize(text, rules);
}

export default { tokenize, getRules, supportedLanguages };
