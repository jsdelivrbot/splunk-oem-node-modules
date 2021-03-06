import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, noop, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import moment from 'splunk-ui/util/moment';
import toClassName from 'splunk-ui/util/toClassName';
import { keycode } from 'splunk-ui/util/keyboard';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Calendar from 'splunk-ui/components/Calendar';
import Popover from 'splunk-ui/components/Popover';
import Text from 'splunk-ui/components/Text';
import css from './Date.css';

class Date extends Component {
    static propTypes = {
        /** @docs-ignore */
        className: PropTypes.string,
        /** Default date to display. Set this instead of value to make the Date uncontrolled. */
        defaultValue: PropTypes.string,
        /**
        * The id of the description. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's help component.
        */
        describedBy: PropTypes.string,
        /** Add a disabled attribute and prevent clicking. */
        disabled: PropTypes.bool,
       /**
        * Highlight the field as having an error. The border and text will turn red.
        */
        error: PropTypes.bool,
        /**
        * The id of the label. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's label.
        */
        labelledBy: PropTypes.string,
        /** Locale set by language and localization specifiers. */
        locale: PropTypes.string,
        /** When false, display as inline-block with the default width. */
        inline: PropTypes.bool,
        /**
         * Return event and data object with date string (in YYYY-MM-DD format) when a date is
         * selected.
         */
        onChange: PropTypes.func,
        /** The overall size of the input. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /** Setting this value makes the property controlled. A callback is required. */
        value: PropTypes.string,
    };

    static defaultProps = {
        disabled: false,
        error: false,
        inline: true,
        locale: 'en_US',
        onChange: noop,
        size: 'medium',
    };

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');
        moment.locale(props.locale);

        const dateString = this.isControlled() ?
            props.value : props.defaultValue || moment().format('YYYY-MM-DD');
        const dateObject = moment(dateString, 'YYYY-MM-DD');
        this.state = {
            value: this.isControlled() ? null : dateString,
            displayDate: dateObject,
            calendarOpen: false,
            tempTextInputDate: null,
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            invariant('Date\'s defaultValue prop is not compatible with value prop.');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            invariant(`Cannot change Date from an uncontrolled component to a controlled
    one. Prop 'value' is not valid in subsequent updates if not provided in the initial props.`);
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            invariant(`Cannot change defaultValue after set. Consider using a controlled
                component instead.`);
        }
        const dateObject = moment(nextProps.value, 'YYYY-MM-DD');
        if (this.isControlled()) {
            this.setState({
                displayDate: dateObject,
            });
        }
    }

    getValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    getTextInputValue() {
        moment.locale(this.props.locale);
        return this.state.tempTextInputDate === null ?
            moment(this.getValue(), 'YYYY-MM-DD').format('l') :
            this.state.tempTextInputDate;
    }

    focus() {
        this.state.anchor.focus();
    }

    handleBlur = (e) => {
        moment.locale(this.props.locale);
        const date = moment(this.state.tempTextInputDate, 'l');
        if (date.isValid()) {
            this.handleDateChange(e, { value: date.format('YYYY-MM-DD') });
        } else {
            this.setState({
                tempTextInputDate: null,
                calendarOpen: false,
            });
        }
    }

    handleDateChange = (e, { value }) => {
        const dateObject = moment(value, 'YYYY-MM-DD');
        this.setState({
            value: this.isControlled() ? null : value,
            displayDate: dateObject,
            tempTextInputDate: null,
            calendarOpen: false,
        });
        this.focus();
        this.props.onChange(e, { value });
    }

    handleFocus = () => {
        if (!this.state.calendarOpen) {
            this.setState({
                calendarOpen: true,
            });
        }
    }

    handleInputChange = (e, { value }) => {
        this.setState({
            tempTextInputDate: value,
        });
    }

    handleKeyDown = (e) => {
        if (keycode(e) === 'enter' || keycode(e) === 'tab') {
            if (this.state.calendarOpen) {
                this.handleBlur();
            } else {
                this.setState({
                    calendarOpen: true,
                });
            }
        } else if (keycode(e) === 'esc') {
            this.setState({
                tempTextInputDate: null,
                calendarOpen: false,
            });
            this.focus();
        }
    }

    handleMount = (comp) => {
        this.setState({
            anchor: comp,
        });
    }

    handleRequestClose = ({ event, reason }) => {
        if ((reason === 'clickAway' || reason === 'escapeKey')
            && event.target !== this.state.anchor.input) {
            this.handleBlur();
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    render() {
        return (
            <Text
                className={toClassName(css.text, this.props.className)}
                onChange={this.handleInputChange}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyDown}
                value={this.getTextInputValue()}
                ref={this.handleMount}
                {...createTestHook(__filename)}
                {...omit(this.props, 'className', 'defaultValue', 'locale', 'onChange', 'value')}
            >
                <Popover
                    anchor={this.state.anchor}
                    open={this.state.calendarOpen}
                    onRequestClose={this.handleRequestClose}
                >
                    <Calendar
                        value={this.getValue()}
                        locale={this.props.locale}
                        onChange={this.handleDateChange}
                    />
                </Popover>
            </Text>
        );
    }
}

export default Date;
