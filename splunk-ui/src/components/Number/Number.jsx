import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, isFinite, isString, omit } from 'lodash';
import { invariant } from 'splunk-ui/util/errorHandling';
import * as keyboardUtil from 'splunk-ui/util/keyboard';
import { _ } from 'splunk-ui/util/i18n';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import Button from 'splunk-ui/components/Button';
import Text from 'splunk-ui/components/Text';
import IncrementIcon from './IncrementIcon';
import css from './Number.css';

function noop() {}

class Number extends Component {
    static propTypes = {
       /** Append removes rounded borders and border from the right side and moves the
        * increment and decrement buttons to the left. */
        append: PropTypes.bool,
        /** @docs-ignore */
        children: PropTypes.node,
       /** @docs-ignore. */
        className: PropTypes.string,
       /**
        * Set this property instead of value to make value uncontrolled. */
        defaultValue: PropTypes.number,
       /**
        * The id of the description. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's help component.
        */
        describedBy: PropTypes.string,
       /** Whether or not the input is editable. */
        disabled: PropTypes.bool,
       /**
        * Highlight the field as having an error. The border and text will turn red.
        */
        error: PropTypes.bool,
       /**
        * An id for the input, which may be necessary for accessibility, such as for aria
        * attributes.
        */
        inputId: PropTypes.string,
       /** When false, display as inline-block with the default width. */
        inline: PropTypes.bool,
       /**
        * The number of decimal places for rounding. Set to zero to limit input to integers.
        * Negative numbers are supported. For instance, -2 will round to the nearest hundred.
        */
        roundTo: PropTypes.number,
       /**
        * The id of the label. When placed in a ControlGroup, this automatically set to the
        * ControlGroup's label.
        */
        labelledBy: PropTypes.string,
       /** The smallest allowable value. */
        min: PropTypes.number,
       /** The largest allowable value. */
        max: PropTypes.number,
       /** The name property for the input, which can be useful for accessibility and form data. */
        name: PropTypes.string,
       /** A callback for when the input loses focus. */
        onBlur: PropTypes.func,
       /**
        * This is equivalent to onInput which is called on keydown, paste, etc.
        * If value is set, this callback is required. This must set the value prop to retain the
        * change.
        */
        onChange: PropTypes.func,
       /** A callback for when the input takes focus. */
        onFocus: PropTypes.func,
       /** A keydown callback can be used to prevent certain input by returning false. */
        onKeyDown: PropTypes.func,
       /** A keyup callback. */
        onKeyUp: PropTypes.func,
       /** A callback for when the users selects text. */
        onSelect: PropTypes.func,
       /** The gray text shown when the input is empty. */
        placeholder: PropTypes.string,
       /** Prepend removes rounded borders from the left side. This cannot be used in combination
        * with append. */
        prepend: PropTypes.bool,
        /** The overall size of the input. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
       /** The amount of increment and decrement applied by the buttons and arrow keys. */
        step: PropTypes.number,
       /** Some browsers remove placeholder text on focus. The synthetic placeholder never does. */
        useSyntheticPlaceholder: PropTypes.bool,
       /**
        * The contents of the input. Setting this value makes the property controlled. A callback
        * is required. */
        value: PropTypes.number,
    };

    static defaultProps = {
        append: false,
        disabled: false,
        error: false,
        inline: false,
        onChange: noop,
        onKeyDown: noop,
        onKeyUp: noop,
        onSelect: noop,
        onBlur: noop,
        onFocus: noop,
        placeholder: '',
        prepend: false,
        roundTo: 5,
        size: 'medium',
        step: 1,
        useSyntheticPlaceholder: false,
    };

    static validatePrependAppend(append, prepend) {
        if (__DEV__ && append && prepend) {
            invariant('Number does not support simultaneous prepend and append.');
        }
    }

    constructor(props, ...rest) {
        super(props, ...rest);

        this.controlledExternally = has(props, 'value');

        const value = this.isControlled() ? props.value : props.defaultValue;

        this.state = {
            value: this.isControlled() ? null : value,
            stringValue: isFinite(value) ? value.toString() : '',
        };

        if (__DEV__ && this.isControlled() && has(props, 'defaultValue')) {
            invariant('Number\'s defaultValue prop is not compatible with value prop.');
        }

        Number.validatePrependAppend(this.props.append, this.props.prepend);
    }

    componentWillReceiveProps(nextProps) {
        if (__DEV__ && !this.isControlled() && has(nextProps, 'value')) {
            invariant(`Cannot change Number from an uncontrolled component to a controlled
    one. Prop 'value' is not valid in subsequent updates if not provided in the initial props.`);
        }

        if (__DEV__ && nextProps.defaultValue !== this.props.defaultValue) {
            invariant(`Cannot change defaultValue after set. Consider using a controlled
                component instead.`);
        }

        const valNumeric = this.stringToNumber(this.state.stringValue);
        if (this.isControlled() && nextProps.value !== valNumeric) {
            this.setState({
                stringValue: isFinite(nextProps.value) ? nextProps.value.toString() : '',
            });
        }

        Number.validatePrependAppend(nextProps.append, nextProps.prepend);
    }

    getValue() {
        return this.isControlled() ? this.props.value : this.state.value;
    }

    setValueFromString(e, str) {
        const value = this.stringToNumber(str);

        this.setState({
            value: this.isControlled() ? null : value,
            stringValue: str,
        }, () => {
            if (this.getValue() !== value) {
                this.props.onChange(e, { value });
            }
        });
    }

    setValue(e, value) {
        this.setState({
            value: this.isControlled() ? null : value,
            stringValue: value.toString(),
        }, () => {
            if (this.getValue() !== value) {
                this.props.onChange(e, { value });
            }
        });
    }

    /**
     * Place focus on the input.
     */
    focus() {
        if (this.text) {
            this.text.focus();
        }
    }

    isControlled() {
        return this.controlledExternally;
    }

    updateString() {
        const value = this.getValue();
        this.setState({
            stringValue: isFinite(value) ? value.toString() : '',
        });
    }

    increment(e, amount) {
        const valNumeric = this.stringToNumber(this.state.stringValue);

        let targetValNumeric;

        // increment appropriate number
        if (isFinite(valNumeric)) {  // increment the entered value
            targetValNumeric = valNumeric + amount;
        } else if (isFinite(this.props.defaultValue)) { // increment the defaultValue
            targetValNumeric = this.props.defaultValue + amount;
        } else if (amount > 0) { // increment up to max or step value
            targetValNumeric = this.props.max || this.props.step;
        } else { // increment down to min or 0
            targetValNumeric = this.props.min || 0; // set to min or 0
        }

        this.setValue(e, this.limitValue(targetValNumeric));
    }

    preventNegativeNumbers() {
        return isFinite(this.props.min) && this.props.min >= 0;
    }

    stringToNumber(str) {
        let val = str;

        if (!isString(val) || val === '') {
            return undefined;
        }

        // remove leading non-numeric characters.
        val = val.replace(/^[^\d.-]/, '');

        const valNumeric = this.limitValue(parseFloat(val, 10));

        if (isFinite(valNumeric)) {
            return valNumeric;
        }

        return undefined;
    }

    limitValue(val) {
        let newVal = val;

        if (!isFinite(val)) {
            return newVal;
        }

        if (isFinite(this.props.min)) {
            newVal = Math.max(this.props.min, newVal);
        }
        if (isFinite(this.props.max)) {
            newVal = Math.min(this.props.max, newVal);
        }

        // eslint-disable-next-line no-restricted-properties
        const pow = Math.pow(10, this.props.roundTo);
        return Math.round(newVal * pow) / pow;
    }

    handleInputBlur = (e) => {
        this.updateString(e);
        this.props.onBlur(e);
    }

    handleInputChange = (e, { value }) => {
        this.setValueFromString(e, value);
    }

    handleKeyDown = (e) => {
        if (!e.metaKey && !e.ctrlKey && !e.altKey && keyboardUtil.addsCharacter(e)) {
            // only allow numbers, negative and decimals
            if (!keyboardUtil.isNumeric(e)) {
                e.preventDefault();
            }

            // if minus is not allowed or there is already one, prevent input
            if (keyboardUtil.isMinus(e) &&
                (this.preventNegativeNumbers() || this.state.stringValue.indexOf('-') >= 0)
                ) {
                e.preventDefault();
            }

            // if decimal is not allowed or there is already one, prevent input
            if (keyboardUtil.isDecimal(e) && (this.props.roundTo <= 0 ||
                this.state.stringValue.indexOf('.') >= 0)) {
                e.preventDefault();
            }
        }

        // Arrow up and down will increment
        if (keyboardUtil.keycode(e) === 'up') {
            this.increment(e, this.props.step);
            e.preventDefault();
        } else if (keyboardUtil.keycode(e) === 'down') {
            this.increment(e, -this.props.step);
            e.preventDefault();
        }

        this.props.onKeyDown(e);
    }

    handleKeyUp = (e) => {
        if (keyboardUtil.keycode(e) === 'enter') {
            this.updateString(e);
        }
        this.props.onKeyUp(e);
    }

    handleIncrement = (e) => {
        this.increment(e, this.props.step);
    }

    handleDecrement = (e) => {
        this.increment(e, -this.props.step);
    }

    render() {
        const {
            append,
            className,
            describedBy,
            disabled,
            error,
            value = this.state.value,
            max,
            min,
            prepend,
            size,
        } = this.props;

        const textProps = omit(this.props, ['defaultValue', 'min', 'max', 'roundTo', 'step']);

        const disableIncrement = isFinite(value) && isFinite(max) && value >= max;
        const disableDecrement = isFinite(value) && isFinite(min) && value <= min;

        const iconSizes = {
            small: { height: '4px', width: '6px' },
            medium: { height: '4px', width: '6px' },
            large: { height: '6px', width: '8px' },
        };

        return (
            <Text
                autoComplete={false}
                ref={c => this.text = c}
                {...createTestHook(__filename)}
                {...textProps}
                className={toClassName(css.main, className)}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                onKeyDown={this.handleKeyDown}
                onKeyUp={this.handleKeyUp}
                value={this.state.stringValue}
                aria-describedby={describedBy}
                append
                prepend={prepend || append}
                size={size}
                error={error}
                data-position={append && !prepend ? 'last' : 'first'}
            >
                {!disabled && (
                    <div
                        className={css.controls}
                        data-position={append && !prepend ? 'first' : 'last'}
                        data-size={size}
                    >
                        <Button
                            className={css.plus}
                            onClick={this.handleIncrement}
                            disabled={disableIncrement}
                            error={error}
                            append={append}
                            prepend={!append}
                            inline={false}
                            tabIndex="-1"
                        >
                            <IncrementIcon
                                width={iconSizes[size].width}
                                height={iconSizes[size].height}
                                screenReaderText={_('Increment')}
                            />
                        </Button>
                        <Button
                            className={css.minus}
                            onClick={this.handleDecrement}
                            disabled={disableDecrement}
                            error={error}
                            append={append}
                            prepend={!append}
                            inline={false}
                            tabIndex="-1"
                        >
                            <IncrementIcon
                                width={iconSizes[size].width}
                                height={iconSizes[size].height}
                                screenReaderText={_('Decrement')}
                                style={{ transform: 'rotateX(180deg)' }}
                            />
                        </Button>
                    </div>
                )}
            </Text>
        );
    }
}

export default Number;
