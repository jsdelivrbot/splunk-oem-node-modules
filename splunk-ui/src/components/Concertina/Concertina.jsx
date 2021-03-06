import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { debounce, take, takeRight } from 'lodash';
import { createTestHook } from 'splunk-ui/util/testSupport';
import toClassName from 'splunk-ui/util/toClassName';
import EventListener from 'react-event-listener';
import Box from 'splunk-ui/components/Box';
import Scroll from 'splunk-ui/components/Scroll';
import Heading from './Heading';
import Panel from './Panel';
import css from './Concertina.css';


/**
 * Concertina provides scrolling set of panels with headings that dock at the top and bottom of a
 * scrolling container. This is useful for a sidebar of configuration options. Concertina will
 * fill it's offset parent by default.
 */

class Concertina extends Component {
    static propTypes = {
        /**
         * `children` should be `Concertina.Panel`.
         **/
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
    };

    static Panel = Panel;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            panelsTopCount: 0,
            panelsBottomCount: 0,
            scrollTop: 0,
            innerWidth: '100%',
        };

        this.panelPositions = [];
        this.updateHeadings = debounce(this.updateHeadings, 0);
    }

    componentWillUnmount() {
        this.updateHeadings.cancel();
    }

    handleUpdate = (e, data) => {
        this.panelPositions[data.id] = data;

        let total = 0;
        this.panelPositions.forEach((panel) => {
            panel.offsetTop = total; // eslint-disable-line no-param-reassign
            total += panel.height || 0;
        });

        this.updateHeadings();
    }

    handleMount = (scroll) => {
        this.setState({
            scrollComp: scroll,
        });

        /* The scrollEl gets unmounted during the animation, it's necessary to cache the
        * recorded height until it is remounted. */
        if (scroll) {
            this.setState({
                innerWidth: scroll.getEl().clientWidth,
            });
        }
    }

    handleResize = () => {
        this.setState({
            innerWidth: this.state.scrollComp.getEl().clientWidth,
        });
    }

    handleScroll = () => {
        this.updateHeadings();
    }

    handleClick = (e, { panelId, position }) => {
        const scrollEl = this.state.scrollComp.getEl();

        const headingsBeforeHeight =
            take(this.panelPositions, panelId)
            .map(item => item.headingHeight)
            .reduce((a, b) => a + b, 0); // sum the heights

        const headingsAfterHeight =
            takeRight(this.panelPositions, this.panelPositions.length - panelId - 1)
            .map(item => item.headingHeight)
            .reduce((a, b) => a + b, 0); // sum the heights

        const availableHeight = (scrollEl.clientHeight -
            headingsBeforeHeight) - headingsAfterHeight;
        const panelHeight = this.panelPositions[panelId].height;

        const topPosition = this.panelPositions[panelId].offsetTop - headingsBeforeHeight;
        const bottomPosition = topPosition - (availableHeight - panelHeight);

        const shouldPartlyPopUp = (availableHeight > panelHeight) &&
            (position === 'bottom' || position === 'inner');

        // if the entire panel is in view, do nothing
        if (shouldPartlyPopUp && bottomPosition < scrollEl.scrollTop) {
            return;
        }

        const targetTop = shouldPartlyPopUp ? bottomPosition : topPosition;

         // handleRest will shift focus;
        if (position !== 'inner') {
            e.currentTarget.blur();
        }

        this.state.scrollComp.scrollTo({ top: targetTop });
    }


    updateHeadings = () => {
        if (!this.state.scrollComp) {
            return;
        }

        const scrollEl = this.state.scrollComp.getEl();

        let top = scrollEl.scrollTop;

        function reduceTop(show, panel) {
            if (panel.offsetTop < top) {
                top += panel.headingHeight;
                return (show + 1);
            }
            return show;
        }

        let bottom = top + scrollEl.clientHeight;
        function reduceBottom(show, panel) {
            if (panel.offsetTop + panel.headingHeight > bottom) {
                bottom -= panel.headingHeight;
                return (show + 1);
            }
            return show;
        }

        this.setState({
            panelsTopCount: this.panelPositions.reduce(reduceTop, 0),
            panelsBottomCount: this.panelPositions.reduceRight(reduceBottom, 0),
        });
    }

    renderHeadings(items, position) {
        const headings = items.map(item => (
            <Heading
                onClick={this.handleClick}
                description={item.props.description}
                panelId={item.props.panelId}
                position={position}
                status={item.props.status}
                key={item.props.panelId}
            >
                {item.props.title}
            </Heading>
        ));

        return headings;
    }

    render() {
        const { children, className, ...otherProps } = this.props;

        const childrenCleaned = Children.toArray(children)
            .filter(isValidElement)
            .map((item, i) => cloneElement(item, {
                panelId: item.panelId || i,
                onHeadingClick: this.handleClick,
                onChange: this.handleUpdate,
            }));

        const topPanels = take(childrenCleaned, this.state.panelsTopCount);
        const bottomPanels = takeRight(childrenCleaned, this.state.panelsBottomCount);

        return (
            <Box
                className={toClassName(css.main, className)}
                {...createTestHook(__filename)}
                {...otherProps}
            >
                <EventListener
                    target="window"
                    onResize={this.handleResize}
                />
                {this.state.panelsTopCount > 0 && (
                    <div className={css.top} style={{ width: this.state.innerWidth }}>
                        {this.renderHeadings(topPanels, 'top')}
                    </div>
                )}

                <Scroll
                    className={css.scroll}
                    onScroll={this.handleScroll}
                    stopScrollPropagation
                    key="scroll-container"
                    ref={this.handleMount}
                    data-concertina-role="scroll"
                >
                    {childrenCleaned}
                </Scroll>
                {this.state.panelsBottomCount > 0 && (
                    <div className={css.bottom} style={{ width: this.state.innerWidth }}>
                        {this.renderHeadings(bottomPanels, 'bottom')}
                    </div>
                )}
            </Box>
        );
    }
}

export default Concertina;
