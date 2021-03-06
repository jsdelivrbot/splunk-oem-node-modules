import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Term.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
};

/**
 * Container component for a `DefinitionList` term.
 */
export default function Term(props) {
    const { children, className, ...otherProps } = props;
    return (
        <dt
            className={toClassName(css.main, className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {children}
        </dt>
    );
}

Term.propTypes = propTypes;
