/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Tooltip from 'splunk-ui/components/Tooltip';

describe('Tooltip', () => {
    describe('uncontrolled', () => {
        let container;
        let wrapper;
        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
            wrapper = mount((
                <Tooltip content="I'm a little tooltip." />
            ), {
                attachTo: container,
            });
            assert.ok(wrapper);
        });

        afterEach(() => {
            container.remove();
            wrapper.unmount();
            container = null;
            wrapper = null;
        });

        it('opens and closes on mouse events', () => {
            const toggle = wrapper.find('[data-tooltip-role="toggle"]');

            assert.isFalse(wrapper.state('open'));
            toggle.simulate('mouseEnter');
            assert.isTrue(wrapper.state('open'));
            toggle.simulate('mouseLeave');
            assert.isFalse(wrapper.state('open'));
        });

        it('opens and closes correctly on focus events', () => {
            assert.isFalse(wrapper.state('open'));
            wrapper.find('Link').simulate('focus');
            assert.isTrue(wrapper.state('open'));
            wrapper.find('Link').simulate('blur');
            assert.isFalse(wrapper.state('open'));
        });

        it('throws if set open prop', () => {
            assert.throws(() => wrapper.setProps({ open: true }));
        });
    });

    describe('controlled', () => {
        let container;
        let wrapper;
        const handleRequestClose = sinon.spy();
        const handleRequestOpen = sinon.spy();

        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);

            wrapper = mount((
                <Tooltip
                    content="I'm a little tooltip."
                    onRequestClose={handleRequestClose}
                    onRequestOpen={handleRequestOpen}
                    open={false}
                />
            ), {
                attachTo: container,
            });
            assert.ok(wrapper);
        });

        afterEach(() => {
            container.remove();
            wrapper.unmount();
            container = null;
            wrapper = null;

            handleRequestClose.reset();
            handleRequestOpen.reset();
        });

        it('mouse events trigger callbacks', () => {
            const toggle = wrapper.find('[data-tooltip-role="toggle"]');

            toggle.simulate('mouseEnter');
            assert(handleRequestOpen.calledOnce,
                'The onRequestOpen handler is called exactly once');
            toggle.simulate('mouseLeave');
            assert(handleRequestClose.calledOnce,
                'The onRequestClose handler is called exactly once');
        });

        it('focus events trigger callbacks', () => {
            wrapper.find('Link').simulate('focus');
            assert(handleRequestOpen.calledOnce,
                'The onRequestOpen handler is called exactly once');
            wrapper.find('Link').simulate('blur');
            assert(handleRequestClose.calledOnce,
                'The onRequestClose handler is called exactly once');
        });

        it('can be opened and closed', () => {
            const toggle = wrapper.find('[data-tooltip-role="toggle"]');
            const popover = wrapper.find('Popover');

            toggle.simulate('mouseEnter'); // required to set anchor

            assert.isFalse(popover.prop('open'));
            wrapper.setProps({ open: true });
            assert.isTrue(popover.prop('open'));
            wrapper.setProps({ open: false });
            assert.isFalse(popover.prop('open'));
        });
    });
});
