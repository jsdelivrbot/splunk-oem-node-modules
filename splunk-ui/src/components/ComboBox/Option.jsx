import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Menu from 'splunk-ui/components/Menu';

class Option extends Component {
    static propTypes = {
        /** @docs-ignore */
        active: PropTypes.bool,
        /**
        * Additional information to explain the option, such as "Recommended".
        */
        description: PropTypes.string,
        /**
        * The description text may appear to the right of the label or under the label.
        */
        descriptionPosition: PropTypes.oneOf(['right', 'bottom']),
        /**
        * If disabled=true, the option is grayed out and cannot be clicked.
        */
        disabled: PropTypes.bool,
        /**
        * The icon to show before the label. See the Icon component for more information.
        */
        icon: PropTypes.node,
        /** @docs-ignore */
        onClick: PropTypes.func,
        /**
        * If truncate=false, wrapping will be disabled and any additional text will be ellipsised.
        */
        truncate: PropTypes.bool,
        /**
         * The value of this option and the label shown for it.
         */
        value: PropTypes.string.isRequired,
    };

    static defaultProps = {
        active: false,
        descriptionPosition: 'bottom',
        disabled: false,
        onClick: noop,
        truncate: false,
    };

    scrollIntoViewIfNeeded() {
        this.c.scrollIntoViewIfNeeded();
    }

    handleClick = (e) => {
        const { disabled, onClick, value } = this.props;
        if (!disabled) {
            onClick(e, { value });
        }
    }

    render() {
        return (
            <Menu.Item
                ref={c => this.c = c}
                {...createTestHook(__filename)}
                {...this.props}
                label={this.props.value}
                onClick={this.handleClick}
            />
        );
    }
}
export default Option;
