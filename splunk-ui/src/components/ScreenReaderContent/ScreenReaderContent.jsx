import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './ScreenReaderContent.css';

const propTypes = {
    children: PropTypes.node.isRequired,
    /** @docs-ignore. */
    className: PropTypes.string,
};

/**
* The screen reader text is used to wrap content that
* is only accessible via screen readers.
*/
export default function ScreenReaderContent(props) {
    const { children, className, ...otherProps } = props;
    return (
        <span
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {children}
        </span>
    );
}

ScreenReaderContent.propTypes = propTypes;
