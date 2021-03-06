import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Heading.css';

const propTypes = {
    /** @docs-ignore */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4, 5]),
};

const defaultProps = {
    level: 2,
};

export default function Heading(props) {
    const { level, className, children, ...otherProps } = props;
    const Comp = `h${level}`;

    return (
        <Comp
            className={toClassName(css[Comp], className)}
            {...createTestHook(__filename)}
            {...otherProps}
        >
            {children}
        </Comp>
    );
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;
