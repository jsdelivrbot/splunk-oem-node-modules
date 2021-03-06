import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import css from './WaitSpinner.css';

const propTypes = {
    /** @docs-ignore. */
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
};

const defaultProps = {
    size: 'small',
};

export default function WaitSpinner(props) {
    const { className, size, ...otherProps } = props;
    return (
        <svg
            className={toClassName(css.main, className)}
            data-size={size}
            viewBox="0 0 38 38"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...createTestHook(__filename)}
            {...otherProps}
        >
            <g>
                <rect opacity="1" x="16" y="0" width="6" height="12" rx="3" />
                <rect opacity=".75" x="26" y="16" width="12" height="6" rx="3" />
                <rect opacity=".5" x="16" y="26" width="6" height="12" rx="3" />
                <rect opacity=".25" x="0" y="16" width="12" height="6" rx="3" />
            </g>
            <g transform="translate(19, 19) rotate(45)">
                <rect opacity=".875" x="-3" y="-19" width="6" height="12" rx="3" />
                <rect opacity=".625" x="7" y="-3" width="12" height="6" rx="3" />
                <rect opacity=".375" x="-3" y="7" width="6" height="12" rx="3" />
                <rect opacity=".125" x="-19" y="-3" width="12" height="6" rx="3" />
            </g>
        </svg>
    );
}

WaitSpinner.propTypes = propTypes;
WaitSpinner.defaultProps = defaultProps;
