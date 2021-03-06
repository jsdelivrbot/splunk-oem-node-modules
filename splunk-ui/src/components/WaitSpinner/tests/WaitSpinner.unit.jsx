/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import WaitSpinner from 'splunk-ui/components/WaitSpinner';

describe('WaitSpinner', () => {
    it('renders correctly', () => {
        const wrapper = mount(<WaitSpinner />);
        assert.ok(wrapper);
    });
});
