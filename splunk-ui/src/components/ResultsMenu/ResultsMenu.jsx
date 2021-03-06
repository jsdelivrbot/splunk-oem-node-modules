import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { keys, omit } from 'lodash';
import { _ } from 'splunk-ui/util/i18n';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { isIE11 } from 'splunk-ui/util/userAgent';
import toClassName from 'splunk-ui/util/toClassName';
import Menu from 'splunk-ui/components/Menu';
import WaitSpinner from 'splunk-ui/components/WaitSpinner';
import css from './ResultsMenu.css';


class ResultsMenu extends Component {
    static propTypes = {
        /*
         * Whether or not to show the wait spinner when loading. It's recommended to set this to
         * `true` when loading may take more than one second.
         */
        animateLoading: PropTypes.bool,
        children: PropTypes.node,
        className: PropTypes.string,
        /*
         * `childrenStart` are nearest the toggle, so they are not necessarily on top.
         * This is extendable to add `childrenTop`, `childrenEnd`, and `childrenBottom` in the
         * future.
         */
        childrenStart: PropTypes.node,
        /*
         * Whether or not to show the loading message and/or wait spinner. It's not recommended to
         * pass old children when loading new children. The loading animation will show below any
         * children, so therefore it may be necessary to scroll to see the animation.
         */
        isLoading: PropTypes.bool,
        loadingMessage: PropTypes.node,
        maxHeight: PropTypes.number,
        noOptionsMessage: PropTypes.node,
        placement: PropTypes.string,
        style: PropTypes.object,
        footerMessage: PropTypes.node,

    };

    static defaultProps = {
        animateLoading: false,
        isLoading: false,
        loadingMessage: _('Loading...'),
        noOptionsMessage: _('No matches'),
    };

    static Item = Menu.Item;
    static Divider = Menu.Divider;
    static Heading = Menu.Heading;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            containerEl: null,
            menu: null,
            menuMaxHeight: null,
        };
    }

    componentDidUpdate() {
        const { containerEl, menu } = this.state;

        if (!isIE11 || !containerEl) {
            return;
        }

        const menuEl = menu.getEl();

        if (this.props.maxHeight) {
            const otherElementsHeight = containerEl.scrollHeight - menuEl.clientHeight;
            const menuMaxHeight = this.props.maxHeight - otherElementsHeight;

            if (this.state.menuMaxHeight !== menuMaxHeight) {
                this.setState({ menuMaxHeight }); // eslint-disable-line react/no-did-update-set-state, max-len
            }
        }
    }

    handleMenuMount = (menu) => {
        this.setState({ menu });
    }

    handleMount = (containerEl) => {
        this.setState({ containerEl });
    }

    renderFooterMessage() {
        return this.props.footerMessage && !!this.props.children.length && (
            <div
                key="footer"
                className={css.footer}
                data-placement={this.props.placement}
            >
                {this.props.footerMessage}
            </div>
        );
    }

    render() {
        const {
            animateLoading,
            children,
            childrenStart,
            className,
            isLoading,
            loadingMessage,
            maxHeight,
            noOptionsMessage,
            placement,
            style,
        } = this.props;

        const otherProps = omit(this.props, keys(ResultsMenu.propTypes));

        const calcStyle = style || {};
        calcStyle.maxHeight = maxHeight;


        return (
            <div
                className={toClassName(css.main, className)}
                data-placement={placement}
                key="wrapper"
                {...createTestHook(__filename)}
                style={style}
                ref={this.handleMount}
                {...otherProps}
            >
                {placement !== 'above' && childrenStart}
                {placement === 'above' && this.renderFooterMessage()}
                <Menu
                    className={css.menu}
                    key="menu"
                    style={{ maxHeight: this.state.menuMaxHeight }}
                    ref={this.handleMenuMount}
                    stopScrollPropagation
                >
                    {children}
                    {!Children.count(children) && noOptionsMessage && !isLoading && (
                        <Menu.Item disabled label={noOptionsMessage} />
                    )}
                    {isLoading && (
                        <li className={css.loading}>
                            {animateLoading && <WaitSpinner className={css.wait} />}
                            <div className={css.loadingMessage}>{loadingMessage}</div>
                        </li>
                    )}
                </Menu>
                {placement !== 'above' && this.renderFooterMessage()}
                {placement === 'above' && childrenStart}
            </div>
        );
    }
}

export default ResultsMenu;
