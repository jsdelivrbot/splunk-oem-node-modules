import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { has, includes, without } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { invariant } from 'splunk-ui/util/errorHandling';
import toClassName from 'splunk-ui/util/toClassName';
import css from './Body.css';


class Body extends Component {
    static splunkUiType = 'Table.Body';

    static propTypes = {
        /**
         * `children` should be `Table.Row`.
         **/
        children: PropTypes.node,
        /** @docs-ignore. */
        className: PropTypes.string,
        /** @docs-ignore. Generally passed by Table rather than added directly. */
        rowExpansion: PropTypes.oneOf(['single', 'multi', 'none']),
        /** @docs-ignore. Generally passed by Table rather than added directly. */
        stripeRows: PropTypes.bool,
    };

    static defaultProps = {
        rowExpansion: 'none',
        stripeRows: false,
    };

    constructor(...args) {
        super(...args);
        this.state = {
            expanded: [],
        };
    }

    handleRowExpansion(key) {
        const current = this.state.expanded;
        if (this.props.rowExpansion === 'single') {
            if (includes(current, key)) {
                this.setState({
                    expanded: [],
                });
            } else {
                this.setState({
                    expanded: [key],
                });
            }
        } else if (this.props.rowExpansion === 'multi') {
            if (includes(current, key)) {
                this.setState({
                    expanded: without(current, key),
                });
            } else {
                this.setState({
                    expanded: current.concat(key),
                });
            }
        }
    }

    render() {
        const {
            children,
            className,
            rowExpansion,
            stripeRows,
            ...otherProps
        } = this.props;
        const rows = [];
        Children.forEach(children, (child, i) => {
            if (child) {
                if (__DEV__ && !has(child, 'key')) {
                    invariant('Table rows must have a key property');
                }
                const key = child.key;
                const oddOrEven = i % 2 ? 'even' : 'odd';
                const stripe = stripeRows ? oddOrEven : 'none';
                const expanded = includes(this.state.expanded, key);
                rows.push(cloneElement(child, {
                    stripe,
                    expanded,
                    expandable: rowExpansion !== 'none',
                    onExpansion: () => this.handleRowExpansion(key),
                }));
                if (expanded && child.props.expansionRow) {
                    rows.push(cloneElement(child.props.expansionRow, {
                        key: `${key}-expansion`,
                        stripe,
                    }));
                }
            }
        });

        return (
            <tbody
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                {rows}
            </tbody>
        );
    }
}

export default Body;
