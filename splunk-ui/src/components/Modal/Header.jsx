import React from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import CloseButton from 'splunk-ui/components/CloseButton';
import css from './Header.css';

const pTypes = {
    /**
     * Children may be passed *instead* of a title. Note that children will not
     * be rendered if a title is provided.
     */
    children: PropTypes.node,
    /** @docs-ignore */
    className: PropTypes.string,
    /**
     * If an `onRequestClose` function is provided, the header will include a close
     * button, which will invoke the `onRequestClose` callback when clicked.
     */
    onRequestClose: PropTypes.func,
    /**
     * Used as the main heading.
     */
    title: PropTypes.string,
};

/**
 * A styled container for modal header content.
 */
function Header(props) {
    const { onRequestClose, title, children, className, ...other } = props;
    const classes = toClassName(css.main, className);
    return (
        <Box
            className={classes}
            data-has-close={!!onRequestClose || null}
            {...createTestHook(__filename)}
            {...other}
        >
            {title ? <h1 className={css.title}>{title}</h1> : children}
            {onRequestClose && (
                <div className={css.closeWrapper}>
                    <CloseButton onClick={onRequestClose} className={css.close} />
                </div>
            )}
        </Box>
    );
}

Header.propTypes = pTypes;
export default Header;
