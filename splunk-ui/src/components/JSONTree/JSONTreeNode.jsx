import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isArray, isObject, last, noop } from 'lodash';
import mathUtil from 'splunk-ui/util/math';
import toClassName from 'splunk-ui/util/toClassName';
import { invarant } from 'splunk-ui/util/errorHandling';
import Link from 'splunk-ui/components/Link';
import css from './JSONTreeNode.css';

export default class JSONTreeNode extends Component {
    static propTypes = {
        dataPath: PropTypes.string,
        tokens: PropTypes.array,
        onClickValue: PropTypes.func,
        defaultOpen: PropTypes.bool,
        expandChildren: PropTypes.bool,
    }

    static defaultProps = {
        dataPath: '',
        defaultOpen: false,
        expandChildren: false,
    }

    static getExpandLineText(isExpand) {
        return isExpand ? '[-]' : '[+]';
    }

    constructor(props) {
        super(props);
        this.state = {
            open: props.defaultOpen,
            text: JSONTreeNode.getExpandLineText(props.defaultOpen),
        };
    }

    handleExpandAndClose = () => {
        const { open } = this.state;
        this.setState({
            open: !open,
            text: JSONTreeNode.getExpandLineText(!open),
        });
    }

    isJSONValue = token => (
        token.type !== 'punctuation' &&
        token.type !== 'property' &&
        token.type !== 'operator'
    )

    handleClickValue = (e) => {
        if (this.props.onClickValue) {
            const key = e.target.dataset.path;
            const value = e.target.innerText;
            this.props.onClickValue(e, { key, value });
        }
        e.preventDefault();
    }

    renderToken(token, key, dataPath) {
        let content = token.content;
        const interactiveCls = this.props.onClickValue !== noop && this.isJSONValue(token)
            ? css.interactiveValue : '';
        if (token.type === 'number') {
            content = parseInt(content, 10);
        }
        if (mathUtil.isLessThanMinSafeInt(content)) {
            content = 'isLessThanMinSafeInt';
        } else if (mathUtil.isGreaterThanMaxSafeInt(content)) {
            content = 'isGreaterThanMaxSafeInt';
        }
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        // TODO: Make this component accessible (SUI-439)
        return (
            <span
                className={toClassName(interactiveCls, css[token.type])}
                key={key}
                data-path={this.isJSONValue(token) ? dataPath.join('.') : false}
                onClick={this.isJSONValue(token) ? this.handleClickValue : false}
            >
                {content}
            </span>
        );
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    }

    renderBody() {
        const { tokens } = this.props;
        const dataPath = [this.props.dataPath];
        const result = [];
        if (tokens[0].type === last(tokens).type
            && tokens[0].type === 'punctuation'
            && (tokens[0].content === '{' || tokens[0].content === '[')
            && (last(tokens).content === '}' || last(tokens).content === ']')) {
            const isJSONArray = tokens[0].content === '[';
            result.push(this.renderToken(tokens[0], 0));
            result.push(this.renderExpandableNode(tokens.slice(1, tokens.length - 1),
                dataPath, isJSONArray));
            result.push(this.renderToken(last(tokens), 2));
        } else {
            invarant('Need to pass an object or an array to JSONTreeNode.');
        }
        return result;
    }

    renderExpandLink() {
        const { open, text } = this.state;

        return (
            <Link
                className={toClassName(css.expandLink, open ? 'jscollapse' : 'jsexpand')}
                onClick={this.handleExpandAndClose}
            >
                {text}
            </Link>
        );
    }

    renderExpandableNode(tokens, dataPath, isJSONArray) {
        let idxInArray = 0;
        const { open } = this.state;
        const { expandChildren } = this.props;
        const result = tokens.map((token, idx) => {
            if (isArray(token)) {
                /* eslint-disable react/no-array-index-key */
                // TODO: Find a more meaningful key, maybe dataPath
                const subTree = (
                    <JSONTreeNode
                        key={idx}
                        defaultOpen={expandChildren}
                        expandChildren={expandChildren}
                        onClickValue={this.props.onClickValue}
                        tokens={token}
                        dataPath={dataPath.join('.')}
                    />
                );
                /* eslint-enable react/no-array-index-key */
                dataPath.pop();
                return subTree;
            } else if (isObject(token)) {
                if (this.isJSONValue(token) && isJSONArray) {
                    dataPath.push(idxInArray);
                    idxInArray += 1;
                } else if (token.type === 'operator' && token.content === ':') {
                    dataPath.push(tokens[idx - 1].content);
                }
                const tokenEle = this.renderToken(token, idx, dataPath);
                if (this.isJSONValue(token)) {
                    dataPath.pop();
                }
                return tokenEle;
            }
            return token;
        });

        return [
            ' ',
            this.renderExpandLink(),
            ' ',
            <span key="expandable" className={open ? css.expanded : css.collapsed}>
                {result}
            </span>,
        ];
    }

    render() {
        return (
            <span key="body" className={toClassName(css.main)}>
                {this.renderBody()}
            </span>
        );
    }
}
