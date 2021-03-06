/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import Concertina from 'splunk-ui/components/Concertina';

describe('Concertina', () => {
    let container;
    let wrapper;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);

        const styles = {
            position: 'relative',
            height: '400px',
            maxWidth: '600px',
            border: '1px solid #ccc',
        };

        wrapper = mount((
            <Concertina style={styles}>
                <Concertina.Panel title="Panel 1">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                <Concertina.Panel title="Panel 2">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                <Concertina.Panel title="Panel 3">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                <Concertina.Panel title="Panel 4">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                {false && (
                    <Concertina.Panel title="Hidden" id="should_not_be_rendered">
                        Should not be rendered.
                    </Concertina.Panel>
                )}
            </Concertina>
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

    it('ok', () => {
        const scrollContainer = wrapper.find('[data-concertina-role="scroll"]');
        scrollContainer.simulate('scroll');
        assert.ok(wrapper);
    });

    it('should handle invalid values in children correctly', () => {
        const element = (
            <Concertina>
                {null}
                <Concertina.Panel title="Panel 1">
                    {new Array(200).join('Lots of words ')}
                </Concertina.Panel>
                {undefined}
                {false}
                {' '}
                word
            </Concertina>
        );
        wrapper = mount(element);
        assert.ok(wrapper);
    });
});
