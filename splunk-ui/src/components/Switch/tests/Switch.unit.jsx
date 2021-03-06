/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Switch from 'splunk-ui/components/Switch';

describe('Switch', () => {
    it('renders', () => {
        const wrapper = mount(<Switch value={1}>One</Switch>);
        assert.ok(wrapper);
    });
});
