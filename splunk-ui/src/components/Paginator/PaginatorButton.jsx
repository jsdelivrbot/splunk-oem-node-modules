import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Button from 'splunk-ui/components/Button';

function noop() {}


class PaginatorButton extends Component {
    static propTypes = {
        /** Callback for button click event */
        onClick: PropTypes.func,
        /** Index of page */
        page: PropTypes.number,
    };

    static defaultProps = {
        onClick: noop,
    };

    handleClick = (e) => {
        const page = this.props.page;
        this.props.onClick(e, { page });
    }

    render() {
        return (
            <Button
                appearance="pill"
                onClick={this.handleClick}
                inline={false}
                style={{ width: 'auto' }}
                {...omit(this.props, ['page', 'onClick'])}
                {...createTestHook(__filename)}
            />
        );
    }
}

export default PaginatorButton;
