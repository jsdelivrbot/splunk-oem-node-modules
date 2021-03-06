import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { extend, has, noop, omit, pick, some } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import filterUtil from 'splunk-ui/util/filter';
import guid from 'splunk-ui/util/guid';
import { _ } from 'splunk-ui/util/i18n';
import { addsCharacter, keycode } from 'splunk-ui/util/keyboard';
import { createTestHook } from 'splunk-ui/util/testSupport';
import ResultsMenu from 'splunk-ui/components/ResultsMenu';
import Popover from 'splunk-ui/components/Popover';
import Text from 'splunk-ui/components/Text';

import Option from './Option';
import css from './ComboBox.css';

/**
 * `ComboBox` allows the user to select a predefined string or enter a new value. Unlike `Select`
 * and `Multiselect`, `Option` value must always be a string and `Option` does not have a label
 * property.
 */
class ComboBox extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        /** Append removes rounded borders and border from the right side. */
        append: PropTypes.bool,
        /** All children must be instances of `ComboBox.Option`. */
        children: PropTypes.node,
        /** If true, this component will not handle filtering. The parent must update the
         * Options based on the onChange value. */
        controlledFilter: PropTypes.bool,
        /** The initial value of the input. Only applicable in uncontrolled mode. */
        defaultValue: PropTypes.string,
        /**
         * The id of the description. When placed in a ControlGroup, this automatically set to the
         * ControlGroup's help component.
         */
        describedBy: PropTypes.string,
        disabled: PropTypes.bool,
        /**
         * Highlight the field as having an error. The border and text will turn red.
         */
        error: PropTypes.bool,
        /**
         * The footer message can show additional information, such as a truncation message.
         */
        footerMessage: PropTypes.node,
        /** Make the control an inline block with variable width. */
        inline: PropTypes.bool,
        /*
         * Whether or not to show the loading message and/or wait spinner. It's recommended to
         * remove the old children while loading new children to ensure the loading message is
         * not hidden.
         */
        isLoadingOptions: PropTypes.bool,
        /**
        * The id of the label. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's label.
        */
        labelledBy: PropTypes.string,
        /**
         * The loading message to show when isLoadingOptions. */
        loadingMessage: PropTypes.node,
        menuStyle: PropTypes.object,
        /**
         * The noOptionsMessage is shown when there are no children and not loading, such as when
         * there are no Options matching the filter. This can be customized to the type of content,
         * such as "No matching dashboards"; insert other content, such as an error message; or
         * communicate a minimum number of chararters to enter to see results. */
        noOptionsMessage: PropTypes.node,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onKeyDown: PropTypes.func,
        placeholder: PropTypes.string,
        /** Prepend removes rounded borders from the left side. */
        prepend: PropTypes.bool,
        /** The size of the text input. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /** The value of the input. Only applicable in controlled mode. */
        value: PropTypes.string,
    };

    static defaultProps = {
        animateLoading: false,
        controlledFilter: false,
        disabled: false,
        error: false,
        inline: false,
        isLoadingOptions: false,
        menuStyle: {},
        onChange: noop,
        onFocus: noop,
        onKeyDown: noop,
        placeholder: _('Select...'),
        size: 'medium',
    };

    static Option = Option;
    static Divider = ResultsMenu.Divider;
    static Heading = ResultsMenu.Heading;

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            activeIndex: null,
            anchor: null,
            open: false,
            menuId: guid(),
            value: props.defaultValue || '',
        };
        this.controlledExternally = has(props, 'value');

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            invariant('ComboBox defaultValue prop is not compatible with value prop.');
        }

        if (__DEV__ && this.isControlled() && props.onChange === noop) {
            invariant(`ComboBox onChange prop is required when the value prop is provided. Use the
                onChange callback to update the value prop.`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            invariant(`Cannot change ComboBox from an uncontrolled component to a
                controlled one. Prop 'value' is not valid in subsequent updates if not provided in
                the initial props.`);
        }
    }

    getValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    /**
     * Focus the `ComboBox`.
     */
    focus() {
        this.textInput.focus();
    }

    isControlled() {
        return this.controlledExternally;
    }

    handleMount = (c) => {
        this.textInput = c;
        this.setState({ anchor: c });
    }

    handleActiveOptionMount = (c) => {
        if (c) {
            c.scrollIntoViewIfNeeded();
        }
    }

    handleInputFocus = (...args) => {
        this.open();
        this.props.onFocus(...args);
    }

    open() {
        this.setState({
            open: true,
            activeIndex: 0,
        });
    }

    close() {
        this.setState({
            open: false,
        });
    }

    handleChange = (e, { value }) => {
        if (!this.isControlled()) {
            this.setState({
                value,
                activeIndex: 0,
            });
        } else {
            this.setState({
                activeIndex: 0,
            });
        }
        this.props.onChange(e, { value });
    }

    handleSelectOption = (...args) => {
        this.handleChange(...args);
        this.focus();
        this.close();
    }

    handleInputKeyDown = (e) => {
        const { activeIndex } = this.state;
        const numOptions = this.availableOptionCount;
        const activeOption = this.activeValue;

        if (this.state.open) {
            switch (keycode(e)) {
                case 'enter': {
                    if (activeOption) {
                        this.handleSelectOption(e, { value: activeOption });
                    }
                    break;
                }
                case 'tab':
                    this.close();
                    break;
                case 'down':
                    this.setState({
                        activeIndex: Math.min(activeIndex + 1, numOptions - 1),
                    });
                    break;
                case 'up':
                    this.setState({
                        activeIndex: Math.max(activeIndex - 1, 0),
                    });
                    break;
                default:
                    // do nothing
            }
        } else if (addsCharacter(e) || keycode(e) === 'enter' || keycode(e) === 'backspace' ||
            keycode(e) === 'down' || keycode(e) === 'up') {
            this.open();
        }
        this.props.onKeyDown(e);
    }

    handleInputClick = () => {
        if (!this.state.open) {
            this.open();
        }
    }

    handleRequestClose = ({ event, reason }) => {
        const shouldClose = reason === 'offScreen' ||
            reason === 'escapeKey' ||
            (reason === 'clickAway' && !this.textInput.getEl().contains(event.target));
        if (shouldClose) {
            this.close();
        }
    }

    renderMenu = ({ anchorWidth, maxHeight }) => {
        const {
            children,
            controlledFilter,
            isLoadingOptions,
            menuStyle,
        } = this.props;

        const { activeIndex, menuId } = this.state;
        const value = this.getValue();

        const initialOptions = Children.toArray(children);
        const hasExactMatch = some(initialOptions, option => option.props.value === value);
        if (!hasExactMatch && value) {
            initialOptions.unshift(<Option key="currentInput" value={value} />);
        }

        // Hightlight Active
        this.availableOptionCount = 0;
        this.activeValue = undefined;

        this.options = (controlledFilter ? initialOptions :
            filterUtil.filterByKeywords(initialOptions, value, option => option.props.value)
        )
        .map((option) => {
            if (!has(option.props, 'active')) { // ignore Headings and Dividers
                return option;
            }

            const active = this.availableOptionCount === activeIndex;
            this.availableOptionCount += 1;

            if (active) {
                this.activeValue = option.props.value;

                return cloneElement(option, {
                    ref: this.handleActiveOptionMount,
                    className: css.activeOption,
                    id: `${menuId}-active`,
                    onClick: this.handleSelectOption,
                });
            }

            return cloneElement(option, {
                onClick: this.handleSelectOption,
            });
        });


        return (
            <ResultsMenu
                className={css.menu}
                style={extend({ width: Math.max(anchorWidth, 200) }, menuStyle)}
                maxHeight={maxHeight}
                isLoading={isLoadingOptions}
                {...pick(this.props, 'noOptionsMessage', 'footerMessage', 'animateLoading',
                    'loadingMessage')}
            >
                {this.options}
            </ResultsMenu>
        );
    }

    render() {
        const { anchor, menuId, open } = this.state;
        return (
            <Text
                {...createTestHook(__filename)}
                canClear
                {...omit(
                    this.props,
                    'animateLoading',
                    'controlledFilter',
                    'isLoadingOptions',
                    'loadingMessage',
                    'menuStyle',
                    'noOptionsMessage',
                    'onFilterChange',
                    'footerMessage',
                )}
                onFocus={this.handleInputFocus}
                onClick={this.handleInputClick}
                onChange={this.handleChange}
                onKeyDown={this.handleInputKeyDown}
                ref={this.handleMount}
                role="combobox"
                value={this.getValue()}
                aria-activedescendant={`${menuId}-active`}
                aria-expanded={open}
                aria-haspopup
                aria-owns={menuId}
            >
                <Popover
                    anchor={anchor}
                    appearance="light"
                    autoCloseWhenOffScreen
                    canCoverAnchor={false}
                    defaultPlacement="vertical"
                    id={menuId}
                    onRequestClose={this.handleRequestClose}
                    open={open && !!anchor}
                    repositionMode="flip"
                >
                    {this.renderMenu}
                </Popover>
            </Text>

        );
    }
}

export default ComboBox;
