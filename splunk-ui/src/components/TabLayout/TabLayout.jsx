import React, { Children, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { has, noop, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import TabBar from 'splunk-ui/components/TabBar';
import Panel from './Panel';
import css from './TabLayout.css';

/**
 * The `TabLayout` is a group of managed `Panels`. Only one panel can be open at a time.
 * TabLayout supports both the controlled and uncontrolled patterns.
 */
class TabLayout extends Component {
    static propTypes = {
        /**
         * `children` should be `TabLayout.Panel`.
         **/
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /**
         * Sets the active panel on the initial render. It should match the `panelId` of one of
         * the child `TabLayout.Panel`s. Only use `defaultActivePanelId` when using `TabLayout`
         * as an uncontrolled component.
         */
        defaultActivePanelId: PropTypes.any,
        /** A callback that receives the event and data (selectedPanelId). */
        onChange: PropTypes.func,
        /** The `panelId` of the `TabLayout.Panel` to activate. */
        activePanelId: PropTypes.any,
    };

    static defaultProps = {
        onChange: noop,
    };

    static Panel = Panel;

    constructor(props, ...rest) {
        super(props, ...rest);
        this.controlledExternally = has(props, 'activePanelId');
        if (!this.isControlled()) {
            this.state = {
                activePanelId: props.defaultActivePanelId,
            };
        }
        if (__DEV__ && this.isControlled() && has(props, 'defaultActivePanelId')) {
            invariant(`The defaultActivePanelId prop is not compatible with activePanelId prop in
                TabLayout.`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'activePanelId')) {
            invariant(`Cannot change TabLayout from an uncontrolled component to a controlled
                one. Prop 'activePanelId' is not valid in subsequent updates if not provided in the
                initial props.`);
        }

        if (__DEV__ && nextProps.defaultActivePanelId !== this.props.defaultActivePanelId) {
            invariant(`Cannot change defaultActivePanelId after set. Consider using a controlled
                component instead.`);
        }
    }

    handleChange = (e, data) => {
        const activePanelId = data.selectedTabId;
        if (!this.isControlled()) {
            this.setState({ activePanelId });
        }
        this.props.onChange(e, { activePanelId });
    }

    isControlled() {
        return this.controlledExternally;
    }

    render() {
        let panel;
        const activePanelId = this.isControlled() ?
            this.props.activePanelId : this.state.activePanelId;
        const { className, children } = this.props;
        const tabs = Children.toArray(children)
            .filter(isValidElement)
            .map((child) => {
                const props = child.props;
                if (props.panelId === activePanelId) {
                    panel = child;
                }
                return (
                    <TabBar.Tab
                        icon={props.icon}
                        key={props.panelId}
                        label={props.label}
                        tabId={props.panelId}
                    />
                );
            });
        if (__DEV__ && !panel) {
            invariant(`Invalid \`activePanelId\` in \`TabLayout\`. \`activePanelId\` must match
                a \`Panel\`.`);
        }
        return (
            <div
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...omit(this.props, Object.keys(TabLayout.propTypes))}
            >
                <TabBar activeTabId={activePanelId} onChange={this.handleChange}>
                    {tabs}
                </TabBar>
                {panel}
            </div>
        );
    }
}

export default TabLayout;
