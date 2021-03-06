import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { extend, has, isUndefined, last, defer, noop, omit, pick, without } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import filterUtil from 'splunk-ui/util/filter';
import guid from 'splunk-ui/util/guid';
import { _ } from 'splunk-ui/util/i18n';
import { keycode } from 'splunk-ui/util/keyboard';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Box from 'splunk-ui/components/Box';
import ResultsMenu from 'splunk-ui/components/ResultsMenu';
import Popover from 'splunk-ui/components/Popover';
import Item from './Item';
import Option from './Option';
import css from './MultiselectNormal.css';

class Normal extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        /**
        * Allow the user to add arbitrary values.
        */
        allowNewValues: PropTypes.bool,
        /**
         * `children` should be `Multiselect.Option`, `Multiselect.Heading`, or
         * `Multiselect.Divider`.
         **/
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /** If true, this component will not handle filtering. The parent must update the
         * Options based on the onFilterChange value. */
        controlledFilter: PropTypes.bool,
        /**
        * Set this property instead of value to keep the value uncontrolled.
        */
        defaultValues: PropTypes.array,
       /**
        * The id of the description. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's help component.
        */
        describedBy: PropTypes.string,
        /** Disable adding and removing. */
        disabled: PropTypes.bool,
        /** Display as in an error. */
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
        /**
        * A callback to receive the change events.  If values is set, this callback is required.
        * This must set the values prop to retain the change.
        */
        onChange: PropTypes.func,
        /**
        * A callback with the change event and value of the filter box. Providing this callback and
        * setting controlledFilter to true enables you to filter and update the children by other
        * criteria.
        */
        onFilterChange: PropTypes.func,
        /**
        * If 'value' is undefined or don't match an item, the Button will display this text.
        */
        placeholder: PropTypes.string,
        /**
         * The container with which the popover must scroll to stay aligned with the anchor.
         */
        scrollContainer: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
        ]),
        /** The overall size of the control. */
        size: PropTypes.oneOf(['small', 'medium']),
        /**
         * Value will be matched to one of the children to deduce the label and/or icon for the
         * toggle.
         */
        values: PropTypes.array,
    };

    static defaultProps = {
        animateLoading: false,
        allowNewValues: false,
        disabled: false,
        inline: false,
        isLoadingOptions: false,
        menuStyle: {},
        noOptionsMessage: _('No matches'),
        onChange: noop,
        onFilterChange: noop,
        placeholder: _('Select...'),
        scrollContainer: 'window',
        size: 'medium',
    };

    static Option = Option;

    static Divider = ResultsMenu.Divider;
    static Heading = ResultsMenu.Heading;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'values');

        this.state = {
            hasFocus: false,
            open: false,
            menuId: guid(),
            values: props.defaultValues || [],
            activeIndex: 0,
            filterKeyword: '',
            el: null,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValues')) {
            invariant('Multiselect defaultValues prop is not compatible with value prop.');
        }

        if (__DEV__ && this.isControlled() && props.onChange === noop) {
            invariant(`Multiselect onChange prop is required. This must update the value prop
                to retain user input.`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'values')) {
            invariant(`Cannot change Multiselect from an uncontrolled component to a
                controlled one. Prop 'values' is not valid in subsequent updates if not provided in
                the initial props.`);
        }

        if (__DEV__ && nextProps.defaultValues !== this.props.defaultValues) {
            invariant('Cannot change Multiselect defaultValues after set.');
        }

        if (this.isControlled() && nextProps.values !== this.props.values) {
            this.setState({
                filterKeyword: '',
                activeIndex: 0,
            });

            if (this.state.filterKeyword !== '') {
                this.props.onFilterChange(null, { keyword: '' });
            }
        }
    }

    getCurrentValues() {
        return this.isControlled() ? this.props.values : this.state.values;
    }

    isControlled() {
        return this.controlledExternally;
    }

    /**
    * Place focus on the text input.
    */
    focus() {
        if (this.input) {
            this.input.focus();
        }
    }

    addValue(e, value) {
        const values = this.getCurrentValues().concat([value]);

        if (!this.isControlled()) {
            this.setState({
                values,
                activeIndex: 0,
                open: true,
                filterKeyword: '',
            });
        }

        this.props.onChange(e, { values });
    }

    removeValue(e, value) {
        const values = without(this.getCurrentValues(), value);

        if (!this.isControlled()) {
            this.setState({ values });
        }

        this.props.onChange(e, { values });
    }

    handleClick = () => {
        this.input.focus();
    }

    handleRequestRemove = (e, { value }) => {
        defer(() => this.removeValue(e, value)); // allow the event to bubble before removing.
    }

    handleInputFocus = (e) => {
        if (this.state.filterKeyword !== '') {
            this.props.onFilterChange(e, { keyword: '' });
        }
        this.setState({
            filterKeyword: '',
            hasFocus: true,
            open: true,
        });
    }

    handleInputKeyDown = (e) => {
        if (keycode(e) === 'tab' && this.state.open) {
            this.setState({
                open: false,
            });
        }

        if (e.shiftKey || e.metaKey || e.ctrlKey) {
            return;
        }

        if (keycode(e) === 'down') {
            e.preventDefault();

            if (this.state.open) {
                this.setState({
                    activeIndex: Math.min(this.state.activeIndex + 1,
                        this.availableOptionCount - 1),
                });
            } else {
                this.setState({
                    activeIndex: 0,
                    open: true,
                });
            }
        }

        if (keycode(e) === 'up') {
            e.preventDefault();

            if (this.state.open) {
                this.setState({
                    activeIndex: Math.max(this.state.activeIndex - 1, 0),
                });
            } else {
                this.setState({
                    activeIndex: 0,
                    open: true,
                });
            }
        }

        if (keycode(e) === 'enter' && !isUndefined(this.activeValue) && this.state.open) {
            this.addValue(e, this.activeValue);
        }

        if (keycode(e) === 'backspace' && this.input.value === ''
            && this.getCurrentValues().length) {
            this.removeValue(e, last(this.getCurrentValues()));
        }
    }

    handleInputChange = (e) => {
        this.setState({
            filterKeyword: e.target.value,
            open: true,
            activeIndex: 0,
        });

        this.props.onFilterChange(e, { keyword: e.target.value });
    }

    handleMenuOptionClick = (e, { value }) => {
        this.addValue(e, value);
        this.input.focus();
    }

    handleInputBlur = () => {
        this.setState({
            hasFocus: false,
        });
    }

    handleRequestClose = ({ reason, event }) => {
        if (reason === 'escapeKey' ||
            reason === 'offScreen' ||
            !this.state.el.contains(event.target)) {
            this.setState({
                open: false,
            });
        }

        if (reason === 'escapeKey') {
            this.input.focus();
        }
    }

    handleMount = (container) => {
        this.setState({
            el: container && container.getEl(),
        });
    }

    handleActiveOptionMount = (c) => {
        if (c) {
            c.scrollIntoViewIfNeeded();
        }
    }

    renderButtons(selectedItems) {
        // selectedItems may contain items or unmatched values at this point
        return selectedItems.map(item => (
            <Item
                label={item.props ? item.props.label : item}
                icon={item.props ? item.props.icon : null}
                key={item.props ? item.props.value : item}
                size={this.props.size}
                disabled={this.props.disabled}
                onRequestRemove={this.handleRequestRemove}
                value={item.props ? item.props.value : item}
            />
        ));
    }

    renderMenu = ({ anchorWidth, maxHeight, placement }) => (
        <ResultsMenu
            placement={placement}
            maxHeight={maxHeight}
            isLoading={this.props.isLoadingOptions}
            {...pick(this.props, 'noOptionsMessage',
                'footerMessage', 'animateLoading', 'loadingMessage')}
            style={extend({ width: Math.max(anchorWidth, 200) }, this.props.menuStyle)}
        >
            {this.children}
        </ResultsMenu>
    )

    render() {
        const {
            allowNewValues,
            children,
            className,
            controlledFilter,
            describedBy,
            disabled,
            error,
            inline,
            placeholder,
            scrollContainer,
            size,
            ...otherProps
        } = this.props;

        const currentValues = this.getCurrentValues();
        const selectedItems = currentValues.slice(0);
        const menuId = this.state.menuId;
        let foundExactMatch = currentValues.indexOf(this.state.filterKeyword) >= 0;


        // Map Options to selected values
        if (currentValues && currentValues.length) {
            Children.forEach(children, (item) => {
                if (isValidElement(item)) {
                    const selectedIndex = currentValues.indexOf(item.props.value);

                    if (selectedIndex !== -1) {
                        selectedItems[selectedIndex] = item;
                    }
                }
            });
        }

        // Filter the items
        const childrenFiltered = controlledFilter ? children : filterUtil.filterByKeywords(
            Children.toArray(children),
            this.state.filterKeyword,
            (item) => {
                // Return the filtering value
                if (item.type === Option) {
                    return item.props.label;
                }
                return null;
            },
        );

        this.availableOptionCount = 0;
        this.activeValue = undefined;

        this.children = Children.map(childrenFiltered, (item, i) => {
            if (!item.props || !has(item.props, 'value')) { // ignore Headings and Dividers
                return item;
            }

            // find out if the search string exactly matches a value
            if (item.props.value === this.state.filterKeyword) {
                foundExactMatch = true;
            }

            // remove items that are already selected
            const selectedIndex = currentValues.indexOf(item.props.value);
            if (selectedIndex >= 0) {
                return null;
            }

            // find out if the search string exactly matches a value
            const clonedItem = cloneElement(item, {
                key: item.key || i,
                onClick: this.handleMenuOptionClick,
            });

            return clonedItem;
        });

        // Add the option to add the new value
        if (allowNewValues && !foundExactMatch && this.state.filterKeyword) {
            this.children.unshift(
                <Option
                    label={`${this.state.filterKeyword} (new value)`}
                    value={this.state.filterKeyword}
                    key="newValue"
                    onClick={this.handleMenuOptionClick}
                />,
            );
        }
        if (open) {
            // highlight the selected Item
            this.children = Children.map(this.children, (item) => {
                if (!item.props || !has(item.props, 'value')) { // ignore Headings and Dividers
                    return item;
                }

                const active = this.availableOptionCount === this.state.activeIndex;
                this.availableOptionCount += 1;

                if (!active) {
                    return item;
                }

                if (!item.props.disabled) {
                    this.activeValue = item.props.value;
                }

                const clonedItem = cloneElement(item, {
                    active,
                    id: `${menuId}-active`,
                    ref: this.handleActiveOptionMount,
                });

                return clonedItem;
            });
        }

        const inputWidth = `${this.state.filterKeyword.length * 0.8}em`;

        return (
            <Box
                className={toClassName(css.main, className)}
                inline={inline}
                data-hasFocus={this.state.hasFocus || null}
                {...createTestHook(__filename)}
                {...omit(otherProps,
                    'animateLoading',
                    'controlledFilter',
                    'defaultValues',
                    'footerMessage',
                    'isLoadingOptions',
                    'labelledBy',
                    'menuStyle',
                    'noOptionsMessage',
                    'onChange',
                    'onFilterChange',
                    'values',
                )}
                onClick={disabled ? null : this.handleClick}
                data-disabled={disabled || null}
                data-size={size}
                flex
                ref={this.handleMount}
                role="combobox"
                aria-haspopup={!disabled || null}
                aria-disabled={disabled || null}
                aria-expanded={this.state.open}
                aria-invalid={error || null}
                aria-owns={menuId}
                aria-activedescendant={disabled ? null : `${menuId}-active`}
                aria-describedby={describedBy}
            >
                {this.renderButtons(selectedItems)}
                {!disabled &&
                    <input
                        className={css.input}
                        ref={el => this.input = el}
                        onBlur={this.handleInputBlur}
                        onFocus={this.handleInputFocus}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleInputKeyDown}
                        value={this.state.filterKeyword}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        role="textbox"
                        aria-autocomplete="list"
                        style={{ flexBasis: inputWidth, width: inputWidth }}
                        placeholder={currentValues.length ? '' : placeholder}
                        data-size={size}
                    />
                }
                {!disabled &&
                    <Popover
                        open={this.state.open && !!this.state.el}
                        autoCloseWhenOffScreen
                        anchor={this.state.el}
                        appearance="light"
                        onRequestClose={this.handleRequestClose}
                        scrollContainer={scrollContainer}
                        canCoverAnchor={false}
                        defaultPlacement="vertical"
                        repositionMode="flip"
                        id={menuId}
                    >
                        {this.renderMenu}
                    </Popover>
                }
            </Box>
        );
    }
}

export default Normal;
