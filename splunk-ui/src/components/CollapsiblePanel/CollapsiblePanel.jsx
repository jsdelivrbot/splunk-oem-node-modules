import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, keys, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { _ } from 'splunk-ui/util/i18n';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import Clickable from 'splunk-ui/components/Clickable';
import TransitionOpen from 'splunk-ui/components/TransitionOpen';
import ChevronRight from 'splunk-ui/icons/ChevronRight';
import css from './CollapsiblePanel.css';

function noop() {}

/**
 * A `CollapsiblePanel` is a styled component that contains a head and a body. When the head is
 * clicked, the body is opened or closed.
 *
 * `CollapsiblePanel` supports both the controlled and uncontrolled patterns.
 *
 * `CollapsiblePanel`s are most commonly used in [`Accordion`](./Accordion)s. Only use the base
 * `CollapsiblePanel` if you need functionality not provided by `Accordion`.
 */
class CollapsiblePanel extends Component {
    static propTypes = {
        /** @docs-ignore */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /**
         * Sets the initial open state of the panel. Not compatible with `open`.
         */
        defaultOpen: PropTypes.bool,
        /**
         * Prevents the panel from opening or closing.
         */
        disabled: PropTypes.bool,
        /**
         * The `panelId` will be passed to callbacks and can be used to manage open/closed state.
         */
        panelId: PropTypes.any,
        /**
         * A callback invoked when the panel is requested to close. It will be passed an object
         * containing the `panelId`.
         */
        onRequestClose: PropTypes.func,
        /**
         * A callback invoked when the panel is requested to open. It will be passed an object
         * containing the `panelId`.
         */
        onRequestOpen: PropTypes.func,
        /**
         * Controls whether the panel is open or not. Not compatible with `defaultOpen`.
         */
        open: PropTypes.bool,
        /**
         * The content of this Panel's title.
         */
        title: PropTypes.node.isRequired,
    };

    static defaultProps = {
        disabled: false,
        onRequestClose: noop,
        onRequestOpen: noop,
    };

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'open');

        if (!this.isControlled()) {
            this.state = {
                open: props.defaultOpen || false,
            };
        }

        if (__DEV__ && this.isControlled() && has(props, 'defaultOpen')) {
            invariant(`The defaultOpen prop is not compatible with open prop in
                CollapsiblePanel.`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'open')) {
            invariant(`Cannot change CollapsiblePanel from an uncontrolled component to a
                controlled one. Prop 'open' is not valid in subsequent updates if not provided in
                the initial props.`);
        }

        if (__DEV__ && nextProps.defaultOpen !== this.props.defaultOpen) {
            invariant(`Cannot change defaultOpen after initial render in CollapsiblePanel.
                Consider using a controlled component instead.`);
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleRequestClose = (event) => {
        const { panelId, onRequestClose } = this.props;
        onRequestClose({ event, panelId, reason: 'toggleClick' });
        if (!this.isControlled()) {
            this.setState({ open: false });
        }
    }

    handleRequestOpen = (event) => {
        const { panelId, onRequestOpen } = this.props;
        onRequestOpen({ event, panelId, reason: 'toggleClick' });
        if (!this.isControlled()) {
            this.setState({ open: true });
        }
    }

    render() {
        const {
            children,
            className,
            disabled,
            title,
        } = this.props;
        const open = this.isControlled() ? this.props.open : this.state.open;
        return (
            <Box
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...omit(this.props, keys(CollapsiblePanel.propTypes))}
            >
                <Clickable
                    className={css.title}
                    disabled={disabled}
                    onClick={open ? this.handleRequestClose : this.handleRequestOpen}
                    data-active={open}
                >
                    <span className={css.icon}>
                        <ChevronRight
                            screenReaderText={open ? _('Panel is open') : _('Panel is closed')}
                        />
                    </span>
                    {title}
                </Clickable>
                <TransitionOpen innerClassName={css.body} open={open}>
                    {children}
                </TransitionOpen>
            </Box>
        );
    }
}

export default CollapsiblePanel;
