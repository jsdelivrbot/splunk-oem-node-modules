/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import RadioBar from 'splunk-ui/components/RadioBar';

describe('RadioBar', () => {
    let wrapper;
    const handleChange = spy();

    afterEach(() => {
        handleChange.reset();
        wrapper.unmount();
        wrapper = null;
    });

    describe('Uncontrolled', () => {
        beforeEach(() => {
            wrapper = mount(
                <RadioBar onChange={handleChange} defaultValue={2}>
                    <RadioBar.Option value={1} label="one" />
                    <RadioBar.Option value={2} label="two" />
                </RadioBar>,
            );
            assert.ok(wrapper);
        });

        it('honors the defaultValue', () => {
            assert.equal(wrapper.state('value'), 2, 'The value is set to the default');
            assert.isFalse(wrapper.find('Option').get(0).props.selected,
                'The first option is not selected');
            assert.isTrue(wrapper.find('Option').get(1).props.selected,
                'The second option is selected');
        });

        it('handles state changes internally', () => {
            wrapper.find('Option').first().simulate('click');
            assert.equal(wrapper.state('value'), 1, 'The value has been updated');
            assert.isTrue(wrapper.find('Option').get(0).props.selected,
                'The first option is now selected');
            assert.isFalse(wrapper.find('Option').get(1).props.selected,
                'The second option is no longer selected');
        });

        it('invokes the onChange handler with correct data', () => {
            wrapper.find('Option').first().simulate('click');
            assert.isTrue(handleChange.calledOnce);
            assert.equal(handleChange.args[0][1].value, 1);
            assert.equal(handleChange.args[0][1].label, 'one');
        });

        it('throws when trying to set value', () => {
            assert.throws(() => wrapper.setProps({ value: 1 }));
        });

        it('throws when trying to change the defaultValue', () => {
            assert.throws(() => wrapper.setProps({ defaultValue: 1 }));
        });
    });

    describe('Controlled', () => {
        beforeEach(() => {
            wrapper = mount(
                <RadioBar onChange={handleChange} value={2}>
                    <RadioBar.Option value={1} label="one" />
                    <RadioBar.Option value={2} label="two" />
                </RadioBar>,
            );
            assert.ok(wrapper);
        });

        it('honors the value', () => {
            assert.equal(wrapper.prop('value'), 2, 'The value is set');
            assert.isFalse(wrapper.find('Option').get(0).props.selected,
                'The first option is not selected');
            assert.isTrue(wrapper.find('Option').get(1).props.selected,
                'The second option is selected');
        });

        it('invokes the onChange handler with correct data', () => {
            wrapper.find('Option').first().simulate('click');
            assert.isTrue(handleChange.calledOnce);
            assert.equal(handleChange.args[0][1].value, 1);
            assert.equal(handleChange.args[0][1].label, 'one');
        });

        it('only updates when prop changes', () => {
            // The initial setup is correct.
            assert.equal(wrapper.prop('value'), 2, 'The value is set');
            assert.isFalse(wrapper.find('Option').get(0).props.selected,
                'The first option is not selected');
            assert.isTrue(wrapper.find('Option').get(1).props.selected,
                'The second option is selected');

            // Click.
            wrapper.find('Option').first().simulate('click');

            // The initial setup is not changed.
            assert.equal(wrapper.prop('value'), 2, 'The value is set');
            assert.isFalse(wrapper.find('Option').get(0).props.selected,
                'The first option is not selected');
            assert.isTrue(wrapper.find('Option').get(1).props.selected,
                'The second option is selected');

            // Update the component with props.
            wrapper.setProps({ value: 1 });

            // The component has updated.
            assert.equal(wrapper.prop('value'), 1, 'The value has been updated');
            assert.isTrue(wrapper.find('Option').get(0).props.selected,
                'The first option is now selected');
            assert.isFalse(wrapper.find('Option').get(1).props.selected,
                'The second option is no longer selected');
        });

        it('does not accept a defaultValue', () => {
            assert.throws(() => wrapper = mount(<RadioBar defaultValue={2} value={2} />));
        });
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <RadioBar onChange={handleChange} value={2}>
                {false}
                <RadioBar.Option value={1} label="one" />
                {undefined}
                <RadioBar.Option value={2} label="two" />
                {null}
                {' '}
                word
            </RadioBar>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
