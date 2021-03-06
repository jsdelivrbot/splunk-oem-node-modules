import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function BoxUnchecked(props) {
    return (
        <SVG
            screenReaderText={_('Box Unchecked')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M0 1346.918V153.082c0-44.52 14.384-81.164 43.15-109.93C71.92 14.383 108.563 0 153.083 0h1193.836c44.52 0 81.164 14.384 109.93 43.15C1485.617 71.92 1500 108.563 1500 153.083v1193.836c0 44.52-14.384 81.164-43.15 109.93-28.768 28.768-65.412 43.152-109.932 43.152H153.082c-44.52 0-81.164-14.384-109.93-43.15C14.383 1428.08 0 1391.437 0 1346.917zm225-1045.89v897.945c0 21.917 7.192 40.068 21.575 54.452C260.96 1267.808 279.11 1275 301.027 1275h897.946c21.917 0 40.068-7.192 54.452-21.575 14.383-14.384 21.575-32.535 21.575-54.452V301.027c0-21.917-7.192-40.068-21.575-54.452C1239.04 232.192 1220.89 225 1198.973 225H301.027c-21.917 0-40.068 7.192-54.452 21.575C232.192 260.96 225 279.11 225 301.027z" />
        </SVG>
    );
}
