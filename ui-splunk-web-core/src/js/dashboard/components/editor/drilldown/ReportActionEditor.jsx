import _ from 'underscore';
import React, { PropTypes } from 'react';
import ItemSelector from 'dashboard/components/shared/ItemSelector';
import OpenInNewTab from 'dashboard/components/shared/OpenInNewTab';
import { createTestHook } from 'util/test_support';

const ReportActionEditor = ({
    activeApp,
    activeAppError,
    apps,
    isFetchingApps,
    onAppChange,
    activeReport,
    activeReportError,
    target,
    onTargetChange,
    reports,
    isFetchingReports,
    onReportChange,
}) =>
    <div {...createTestHook(module.id)}>
        <ItemSelector
            label={_('App').t()}
            items={apps}
            isLoading={isFetchingApps}
            onChange={onAppChange}
            activeItem={activeApp}
            filter
            error={activeAppError}
        />
        <ItemSelector
            label={_('Report').t()}
            items={reports}
            isLoading={isFetchingReports}
            onChange={onReportChange}
            activeItem={activeReport}
            filter
            error={activeReportError}
        />
        <OpenInNewTab
            value={target}
            onClick={onTargetChange}
        />
    </div>;

ReportActionEditor.propTypes = {
    activeApp: PropTypes.string.isRequired,
    activeAppError: PropTypes.string,
    apps: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetchingApps: PropTypes.bool.isRequired,
    onAppChange: PropTypes.func.isRequired,
    activeReport: PropTypes.string,
    activeReportError: PropTypes.string,
    target: PropTypes.string.isRequired,
    onTargetChange: PropTypes.func.isRequired,
    reports: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetchingReports: PropTypes.bool.isRequired,
    onReportChange: PropTypes.func.isRequired,
};

ReportActionEditor.defaultProps = {
    activeAppError: '',
    activeReport: '',
    activeReportError: '',
};

export default ReportActionEditor;
