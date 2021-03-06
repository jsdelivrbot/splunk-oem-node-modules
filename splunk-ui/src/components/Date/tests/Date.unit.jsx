/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import moment from 'splunk-ui/util/moment';
import Date from 'splunk-ui/components/Date';

describe('Date', () => {
    it('renders', () => {
        const wrapper = mount(<Date />);
        assert.ok(wrapper);
    });

    it('renders with props', () => {
        const wrapper = mount(
            <Date
                defaultValue={'1776-07-04'}
            />,
        );
        assert.ok(wrapper);
    });

    it('calendar opens on click', () => {
        const wrapper = mount(
            <Date
                defaultValue={'1776-07-04'}
            />,
        );
        wrapper.simulate('click');
        assert.ok(wrapper.find('Calendar'));
    });

    it('updates when valid text string is entered', () => {
        const newString = '1776/07/04';
        const wrapper = mount(
            <Date
                defaultValue={'1776/07/04'}
            />,
        );
        wrapper.find('input').get(0).value = newString;
        wrapper.find('Text').simulate('change');
        assert.equal(wrapper.find('input').get(0).value, newString);
    });

    it('does not update on invalid text string', () => {
        const dateString = '1776-07-01';
        const formatString = moment(dateString, 'YYYY-MM-DD').format('l');
        const invalidDate = 'garbageString!!!@';
        const wrapper = mount(<Date defaultValue={dateString} />);
        wrapper.find('Text').get(0).value = invalidDate;
        wrapper.find('Text').simulate('blur');
        assert.equal(wrapper.find('input').get(0).value, formatString);
    });
});
