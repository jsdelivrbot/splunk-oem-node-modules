import React from 'react';
import PropTypes from 'prop-types';
import Button from 'splunk-ui/components/Button';

const propTypes = {
    /** Add a disabled attribute and prevent clicking. */
    disabled: PropTypes.bool,
    /** See Icon documention for allowed keys. */
    icon: PropTypes.string,
    /** The text shown on the button. */
    label: PropTypes.string,
    /** @docs-ignore Set by Radio */
    selected: PropTypes.bool,
    /** The value to populate the Radio. */
    value: PropTypes.any.isRequired,
};

function Option(props) {
    const { selected } = props;
    return (
        <Button {...props} role="radio" aria-checked={selected} tabIndex={selected ? -1 : null} />
    );
}

Option.propTypes = propTypes;
export default Option;
