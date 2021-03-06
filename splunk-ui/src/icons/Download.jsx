import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function Download(props) {
    return (
        <SVG
            screenReaderText={_('Download')}
            viewBox="0 0 1500 1499"
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M1216.632 877.823L749.487 1344.97 282.34 876.796l111.91-110.883 276.18 276.18L671.46 0h157.084v1042.094l276.18-276.18 111.91 111.91zM0 1340.863h1500v158.11H0v-158.11z" />
        </SVG>
    );
}
