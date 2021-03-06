/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { each } from 'lodash';
import Code from 'splunk-ui/components/Code';
import css from 'splunk-ui/components/Code/Code.css';

const value = `
import abc from 'something';

function Beard () {
    if (blast === 0) {
        return <div className="anger"></div>;
    }
    return (
        <div className="moist">
            {' '}Length and thickness
        </div>
    );
}

const freeStuff = (isBoss) => {
    return \`The price is $\{isBoss ? 0 : 999}\`;
};

`;

describe('Code', () => {
    let wrapper;

    const tokenCounts = {
        [css.keyword]: 8,
        [css.number]: 3,
        [css.operator]: 17,
        [css.punctuation]: 22,
        [css.string]: 6,
    };

    const setupCommonTasks = () => {
        it('renders', () => {
            assert.ok(wrapper);
        });

        it('does not change contents', () => {
            assert.equal(wrapper.text(), value);
        });

        it('tokenize contents', () => {
            each(tokenCounts, (val, key) => {
                const tokens = wrapper.find(`span.${key}`);
                assert.lengthOf(tokens, val);
            });
        });

        after(() => {
            wrapper.unmount();
        });
    };

    describe('no indent guide', () => {
        before(() => {
            wrapper = mount(<Code value={value} showIndentGuide={false} />);
        });

        setupCommonTasks();

        it('does not draw any indent guide', () => {
            assert.lengthOf(wrapper.find(`.${css.indent}`), 0);
        });
    });

    describe('has indent guides', () => {
        const size = 4;

        before(() => {
            wrapper = mount(<Code value={value} indentChars={size} />);
        });

        setupCommonTasks();

        it('draws proper indent guides', () => {
            const indents = wrapper.find(`.${css.indent}`);

            indents.forEach((indent) => {
                const text = indent.text();
                assert.lengthOf(text, size);
                assert.ok(text.match(/^\s*$/));
            });

            wrapper.text();
        });
    });
});
