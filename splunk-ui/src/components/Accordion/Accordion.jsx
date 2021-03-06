import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has, keys, noop, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import Panel from './Panel';
import css from './Accordion.css';

/**
 * The `Accordion` is a group of managed `CollapsiblePanel`s. Only one panel can be open at a time.
 * See [`CollapsiblePanel`](./CollapsiblePanel) for more granular control, including support for
 * multiple open panels.
 *
 * Accordion supports both the controlled and uncontrolled patterns.
 */
class Accordion extends Component {
    static propTypes = {
        /**
         * Whether or not to animate the opening and closing of panels.
         */
        animate: PropTypes.bool,
        /**
         * `children` should be `Accordion.Panel`.
         */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /**
         * Sets the open panel on the initial render. It should match the `panelId` of one of the
         * child `Accordion.Panel`s. Only use `defaultOpenPanelId` when using `Accordion` as an
         * uncontrolled component.
         */
        defaultOpenPanelId: PropTypes.any,
        /**
         * A callback invoked when a panel is requested to open. It will be invoked with data
         * including the `panelId` of `Accordion.Panel` originating the request.
         */
        onChange: PropTypes.func,
        /**
         * The `panelId` of the currently open `Accordion.Panel`. Only use when using `Accordion`
         * as a controlled component.
         */
        openPanelId: PropTypes.any,
    };

    static defaultProps = {
        onChange: noop,
    };

    static Panel = Panel;

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'openPanelId');
        if (!this.isControlled()) {
            this.state = {
                openPanelId: props.defaultOpenPanelId,
            };
        }
        if (__DEV__ && this.isControlled() && has(props, 'defaultOpenPanelId')) {
            invariant(`The defaultOpenPanelId prop is not compatible with openPanelId prop in
                Accordion.`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'openPanelId')) {
            invariant(`Cannot change Accordion from an uncontrolled component to a controlled
                one. Prop 'openPanelId' is not valid in subsequent updates if not provided in the
                initial props.`);
        }

        if (__DEV__ && nextProps.defaultOpenPanelId !== this.props.defaultOpenPanelId) {
            invariant(`Cannot change defaultOpenPanelId after set. Consider using a controlled
                component instead.`);
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleRequestOpen = (data) => {
        if (!this.isControlled()) {
            this.setState({ openPanelId: data.panelId });
        }
        this.props.onChange(data.event, data);
    }

    render() {
        const { children, className } = this.props;
        const openPanelId = this.isControlled() ? this.props.openPanelId : this.state.openPanelId;

        // remove false, null, 0, etc
        const childrenCleaned = Children.toArray(children)
            .filter(isValidElement)
            .map(child => cloneElement(child, {
                disabled: openPanelId === child.props.panelId,
                onRequestOpen: this.handleRequestOpen,
                open: openPanelId === child.props.panelId,
            }));

        return (
            <Box
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...omit(this.props, keys(Accordion.propTypes))}
            >
                {childrenCleaned}
            </Box>
        );
    }
}

export default Accordion;
