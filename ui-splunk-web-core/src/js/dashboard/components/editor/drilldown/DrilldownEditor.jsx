import React, { PropTypes } from 'react';
import _ from 'underscore';
import Message from 'splunk-ui/components/Message';
import ItemSelector from 'dashboard/components/shared/ItemSelector';
import SimpleDialog from 'dashboard/components/shared/SimpleDialog';
import SearchContainer from 'dashboard/containers/editor/drilldown/search/SearchContainer';
import DashboardContainer from 'dashboard/containers/editor/drilldown/dashboard/DashboardContainer';
import ReportContainer from 'dashboard/containers/editor/drilldown/report/ReportContainer';
import TokensContainer from 'dashboard/containers/editor/drilldown/tokens/TokensContainer';
import UrlContainer from 'dashboard/containers/editor/drilldown/url/UrlContainer';
import {
    NO_DRILLDOWN,
    LINK_TO_SEARCH,
    LINK_TO_DASHBOARD,
    LINK_TO_REPORT,
    LINK_TO_CUSTOM_URL,
    EDIT_TOKENS,
} from 'dashboard/containers/editor/drilldown/drilldownNames';
import { isToken } from 'splunkjs/mvc/tokenutils';

const actionToView = {
    [LINK_TO_SEARCH]: <SearchContainer />,
    [LINK_TO_DASHBOARD]: <DashboardContainer />,
    [LINK_TO_REPORT]: <ReportContainer />,
    [LINK_TO_CUSTOM_URL]: <UrlContainer />,
    [EDIT_TOKENS]: <TokensContainer />,
};

const actions = [
    {
        label: _('No action').t(),
        value: NO_DRILLDOWN,
    },
    {
        label: _('Link to search').t(),
        value: LINK_TO_SEARCH,
    },
    {
        label: _('Link to dashboard').t(),
        value: LINK_TO_DASHBOARD,
    },
    {
        label: _('Link to report').t(),
        value: LINK_TO_REPORT,
    },
    {
        label: _('Link to custom URL').t(),
        value: LINK_TO_CUSTOM_URL,
    },
    {
        label: _('Manage tokens on this dashboard').t(),
        value: EDIT_TOKENS,
        description: _('Enable in-page drilldown actions').t(),
    },
];

const notSupportedMessage = _('Advanced drilldown is not supported in drilldown editor. ' +
    'You can edit dashboard XML source code directly.').t();
const customVizMessage = _('This custom visualization might not support drilldown behavior.').t();

const DrilldownEditor = ({
    isSupported,
    isCustomViz,
    activeAction,
    onActionChange,
    onClose,
    onApply,
}) =>
    <SimpleDialog
        title={_('Drilldown Editor').t()}
        okLabel={_('Apply').t()}
        onClose={onClose}
        onApply={onApply}
    >
        {isSupported ?
            <div style={{ minHeight: 200 }}>
                {isCustomViz ? <Message type="warning">{customVizMessage}</Message> : null}
                <ItemSelector
                    label={_('On click').t()}
                    activeItem={activeAction}
                    items={actions}
                    isLoading={false}
                    onChange={onActionChange}
                    warning={isToken(activeAction) ? _('is set to a token, changes here will override the token.').t() : ''}  // eslint-disable-line
                    hideNoMatchError={isToken(activeAction)}
                />
                {actionToView[activeAction]}
            </div> :
            <Message type="error">
                {notSupportedMessage}
            </Message>}
    </SimpleDialog>;

DrilldownEditor.propTypes = {
    isSupported: PropTypes.bool.isRequired,
    isCustomViz: PropTypes.bool.isRequired,
    activeAction: PropTypes.string.isRequired,
    onActionChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onApply: PropTypes.func.isRequired,
};

export default DrilldownEditor;