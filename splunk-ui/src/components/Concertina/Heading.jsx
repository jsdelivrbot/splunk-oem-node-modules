import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Clickable from 'splunk-ui/components/Clickable';
import css from './Concertina.css';


class Heading extends Component {
    static propTypes = {
        /** @docs-ignore */
        children: PropTypes.string.isRequired,
        /** Text to place to the right of the title */
        description: PropTypes.string,
        /** @docs-ignore */
        onClick: PropTypes.func.isRequired,
        /** @docs-ignore */
        panelId: PropTypes.any.isRequired,
        /** @docs-ignore */
        position: PropTypes.string.isRequired,
        /** The panel can be in an warning or error state. */
        status: PropTypes.oneOf(['normal', 'warning', 'error']),
    };

    static defaultProps = {
        position: 'inner',
    };

    handleClick = (e) => {
        this.props.onClick(e, { panelId: this.props.panelId, position: this.props.position });
    }

    handleMount = (container) => {
        this.container = container;
    }

    focus() {
        this.container.focus();
    }

    render() {
        const {
            children,
            description,
            onClick, // eslint-disable-line no-unused-vars
            panelId, // eslint-disable-line no-unused-vars
            position, // eslint-disable-line no-unused-vars
            status,
            ...otherProps
        } = this.props;


        return (
            <Clickable
                className={css.heading}
                contentWrapperClassName={css.headingContent}
                data-status={status === 'normal' ? null : status}
                onClick={this.handleClick}
                ref={this.handleMount}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                <span data-concertina-role="title">{children}</span>
                {description && (
                    <span className={css.description} data-concertina-role="description">
                        {description}
                    </span>
                )}
            </Clickable>
        );
    }
}

export default Heading;
