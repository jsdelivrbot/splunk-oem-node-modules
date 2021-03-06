import React, { Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { debounce, noop, omit } from 'lodash';
import { _ } from 'splunk-ui/util/i18n';
import guid from 'splunk-ui/util/guid';
import toClassName from 'splunk-ui/util/toClassName';
import { createTestHook } from 'splunk-ui/util/testSupport';
import EventListener from 'react-event-listener';
import Box from 'splunk-ui/components/Box';
import Item from './Item';
import css from './File.css';

/**
 * File provides the ability to accept files and present uploaded files. It does not provide
 * file readers, only a reference to the file. This can be used to post binary content, or
 * upload using an array buffer.
 */
class File extends Component {
    static propTypes = {
        /** The accept attribute for the file browser. This does not filter dropped items,
         * which must be filtered manually. */
        accept: PropTypes.string,
        /** Allow the user to upload multiple files. */
        allowMultiple: PropTypes.bool,
        /** @docs-ignore */
        children: PropTypes.node,
        /** @docs-ignore */
        className: PropTypes.string,
        /** Show the component in an error state. This has no affect on the large size.
         * Note, File.Item has a separate error property. */
        error: PropTypes.bool,
        /** When size is large, help text can be shown. */
        help: PropTypes.node,
        /** A callback for when the user selects one or more files. The function is
         * passed a file reference, which can then be used to read the file. This may
         * be used to enforce file constraints or upload the file. */
        onRequestAdd: PropTypes.func,
        /** A callback for when the user requests to remove a file. The function is passed
         * the event and an object with the Item's index and name: `(event, {index, name})`. */
        onRequestRemove: PropTypes.func,
        /** `medium` appears much like a native file input. `small` is for use on highly complex
         * pages, where data density is an issue. When `large` is used, there can only
         * be one File component on the page as it will take all files dropped on the page. */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
    };

    static defaultProps = {
        allowMultiple: false,
        error: false,
        onRequestRemove: noop,
        size: 'medium',
    };

    static Item = Item;

    constructor(props, ...rest) {
        super(props, ...rest);

        this.state = {
            dragOver: false,
            focusedInput: false,
        };

        this.guid = guid();

        /* Each time a file is uploaded this is incremented and used to generate the
         * file input's key. In this way we get a new input without a value. */
        this.fileCount = 0;

        this.handleDragLeave = debounce(this.handleDragLeave, 300);
    }

    handleInputChange = (e) => {
        this.addFiles(e.currentTarget.files);
    }

    handleInputFocus = () => {
        this.setState({
            focusedInput: true,
        });
    }

    handleInputBlur = () => {
        this.setState({
            focusedInput: false,
        });
    }

    handleDragOver = (e) => {
        if (!this.setState.dragOver) {
            this.setState({
                dragOver: true,
            });
        }
        e.preventDefault();
    }

    handleDragLeave = () => {
        this.setState({
            dragOver: false,
        });
    }

    handleDrop = (e) => {
        e.preventDefault();
        this.handleDragLeave();

        this.addFiles(e.dataTransfer.files);
    }

    addFiles(files) {
        const array = Array.prototype.slice.call(files, 0);

        this.props.onRequestAdd(this.props.allowMultiple ? array : [array[0]]);

        this.fileCount += 1;
    }

    render() {
        const {
            accept,
            allowMultiple,
            children,
            className,
            error,
            help,
            onRequestRemove,
            size,
            ...otherProps
        } = this.props;

        const childrenCloned = Children.toArray(children)
            .filter(isValidElement)
            .map((item, index) => {
                const handleRemove = (event) => {
                    onRequestRemove({
                        event,
                        index,
                        itemId: item.props.itemId,
                        name: item.props.name,
                    });
                };
                return cloneElement(item, {
                    onClick: handleRemove,
                    key: item.props.itemId || `item-${index}`,
                    size: size === 'small' ? 'small' : null,
                });
            });

        /* eslint-disable max-len */
        return (
            <Box
                className={toClassName(css[`${size}DropTarget`], className)}
                onDragOver={size === 'medium' ? this.handleDragOver : null}
                onDragLeave={size === 'medium' ? this.handleDragLeave : null}
                onDrop={size === 'medium' ? this.handleDrop : null}
                data-drag-over={this.state.dragOver || null}
                data-error={error || null}
                {...createTestHook(__filename)}
                {...omit(otherProps, 'onRequestAdd', 'onRequestRemove')}
            >
                <div className={css[`${size}Text`]}>
                    {(size !== 'small') &&
                        <svg
                            className={css[`${size}Icon`]}
                            viewBox="0 0 72 88"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M50,27 L68.0005854,27 C70.2022516,27 72,28.7919267 72,31.0023804 L72,83.9976196 C72,86.2074215 70.2094011,88 68.0005854,88 L3.99941455,88 C1.79774843,88 0,86.2080733 0,83.9976196 L0,31.0023804 C0,28.7925785 1.79059889,27 3.99941455,27 L21,27 L21,32 L5.99898406,32 C5.4472604,32 5,32.4408979 5,32.9958767 L5,82.0041233 C5,82.5541308 5.44605521,83 5.99898406,83 L66.0010159,83 C66.5527396,83 67,82.5591021 67,82.0041233 L67,32.9958767 C67,32.4458692 66.5539448,32 66.0010159,32 L50,32 L50,27 Z" />
                            <path d="M41.9634682,10 L41.9634682,28 L46.9634682,28 L46.9634682,5 L44.4634682,5 L23.9634682,5 L23.9634682,10 L41.9634682,10 Z" transform="translate(35.463468, 16.500000) rotate(-45.000000) translate(-35.463468, -16.500000) " />
                            <rect x="33" y="3" width="5" height="51" />
                        </svg>
                    }
                    {' '}
                    {(size !== 'large') && _('Drop your file here or')}
                    {(size === 'large') && _('Drop your file anywhere or')}
                    {' '}
                    <label
                        htmlFor={this.guid}
                        className={css.link}
                        data-focused={this.state.focusedInput || null}
                    >
                        <input
                            className={css.input}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}
                            id={this.guid}
                            key={`file-input-${this.fileCount}`}
                            type="file"
                            multiple={allowMultiple || null}
                            accept={accept}
                        />
                        {_('browse...')}
                    </label>{' '}
                </div>
                {(size === 'large') && <div className={css.help}>{help}</div>}
                {(size === 'large') && this.state.dragOver && (
                    <div
                        className={css.windowDrop}
                        onDragLeave={this.handleDragLeave}
                    />
                ) }
                {(size === 'large') &&
                    <EventListener
                        target={window}
                        onDragOver={this.handleDragOver}
                        onDrop={this.handleDrop}
                    />
                }
                {childrenCloned}
            </Box>
        );
        /* eslint-enable max-len */
    }
}

export default File;
