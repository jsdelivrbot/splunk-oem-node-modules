/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Button from 'splunk-ui/components/Button';
import Dropdown from 'splunk-ui/components/Dropdown';

const buttonId = 'splunk-ui:/components/Button/Button';

describe('Dropdown', () => {
    let container;
    let wrapper;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        const toggle = <Button>Toggle</Button>;
        wrapper = mount((
            <Dropdown toggle={toggle}>
                <div>Hello World!</div>
            </Dropdown>
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

    it('opens when toggle is clicked', () => {
        assert.isFalse(wrapper.state('open'));
        wrapper.find('Button').simulate('click');
        assert.isTrue(wrapper.state('open'));
    });

    it('closes and shifts focus to toggle when closed by click on toggle', () => {
        wrapper.setState({ open: true });
        assert.isTrue(wrapper.state('open'));
        wrapper.find('Button').simulate('click');
        assert.isFalse(wrapper.state('open'));
        assert.equal(document.activeElement.dataset.component, buttonId);
    });

    it('closes and shifts focus to toggle when closed by escapeKey', () => {
        wrapper.setState({ open: true });
        assert.isTrue(wrapper.state('open'));
        wrapper.instance().handleRequestClose({ reason: 'escapeKey' });
        assert.isFalse(wrapper.state('open'));
        assert.equal(document.activeElement.dataset.component, buttonId);
    });

    it('closes with reason contentClick when content is clicked', (done) => {
        const toggle = <Button>Toggle</Button>;
        wrapper = mount((
            <Dropdown
                toggle={toggle}
                onRequestClose={({ reason }) => {
                    assert.equal(reason, 'contentClick');
                    done();
                }}
            >
                <div id="content">Hello World!</div>
            </Dropdown>
        ), {
            attachTo: container,
        });

        wrapper.find('Button').simulate('click');
        assert.isTrue(wrapper.state('open'));

        document.querySelector('#content').click();
        assert.isFalse(wrapper.state('open'));
    });

    it('throws when setting open with a prop after initial render (in dev mode)', () => {
        assert.throws(() => wrapper.setProps({ open: true }));
    });

    it('can be opened with a prop on initial render', () => {
        const toggle = <Button>Toggle</Button>;
        wrapper = mount((
            <Dropdown open toggle={toggle}>
                <div id="should-be-found">Hello World!</div>
            </Dropdown>
        ), {
            attachTo: container,
        });
        assert.ok(document.querySelector('#should-be-found'));
    });

    it('can be be toggled open and closed with props', () => {
        const toggle = <Button>Toggle</Button>;
        wrapper = mount((
            <Dropdown open={false} toggle={toggle}>
                <div id="might-be-found">Hello World!</div>
            </Dropdown>
        ), {
            attachTo: container,
        });
        assert.isFalse(wrapper.find('Popover').props().open);
        wrapper.setProps({ open: true });
        assert.isTrue(wrapper.find('Popover').props().open);
        wrapper.setProps({ open: false });
        assert.isFalse(wrapper.find('Popover').props().open);
    });
});
