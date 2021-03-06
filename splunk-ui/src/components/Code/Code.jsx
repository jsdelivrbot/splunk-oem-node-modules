import React from 'react';
import PropTypes from 'prop-types';
import { repeat, times, flatten } from 'lodash';
import { tokenize } from 'splunk-ui/util/syntax';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Code.css';

const supportedLanguages = [
    'markup',
    'xml',
    'html',
    'mathml',
    'svg',
    'css',
    'clike',
    'javascript',
    'js',
];

const propTypes = {
    /** @docs-ignore */
    className: PropTypes.string,
    /**
     * The length of indents, this only matters when `showIndentGuide` is `true`
     */
    indentChars: PropTypes.number,
    /**
     * The language of the code
     */
    language: PropTypes.oneOf(supportedLanguages),
    /**
     * Show the indent guideline or not
     */
    showIndentGuide: PropTypes.bool,
    /**
     * Code contents
     */
    value: PropTypes.string,
};

const defaultProps = {
    indentChars: 4,
    language: 'javascript',
    showIndentGuide: true,
    value: '',
};

/**
 * The `Code` is a code block component which supports syntax highlight.
 */
export default function Code(props) {
    const {
        className,
        value,
        indentChars,
        language,
        showIndentGuide,
        ...otherProps
    } = props;

    const indentBlock = repeat(' ', indentChars);
    const makeIndentGuide = (spaces) => {
        const level = Math.floor(spaces / indentChars);
        const rest = spaces % indentChars;
        const spans = times(level, idx =>
            <span className={css.indent} key={idx.toString()}>{indentBlock}</span>,
        );
        if (rest) {
            spans.push(repeat(' ', rest));
        }
        return spans;
    };

    const tokens = tokenize(value, language);

    const render = tks => tks.map((part, idx) => {
        if (typeof part === 'string') {
            if (!showIndentGuide) {
                return part;
            }

            const lines = part.split('\n');
            if (lines.length === 1) {
                return part;
            }

            return flatten(lines.map((line, lineNo) => {
                const res = lineNo === 0 ? [] : ['\n'];

                const indentMatch = line.match(/^(\s+)(.*)/);
                if (!indentMatch) {
                    res.push(line);
                } else {
                    res.push(
                        (<span key={`${idx.toString()}:${lineNo.toString()}`}>
                            {makeIndentGuide(indentMatch[1].length)}
                        </span>),
                        indentMatch[2],
                    );
                }

                return res;
            }));
        }

        const content = typeof part.content === 'string'
            ? part.content
            : render(part.content);

        return (
            <span
                className={toClassName(css[part.type])}
                key={idx.toString()}
            >
                {content}
            </span>
        );
    });

    const codeContent = render(tokens);

    return (
        <pre
            className={toClassName(css.pre, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            <code className={toClassName(css.code, `language-${language}`)}>
                {codeContent}
            </code>
        </pre>
    );
}

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;
