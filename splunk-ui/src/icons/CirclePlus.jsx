import React from 'react';
import { createTestHook } from 'splunk-ui/util/testSupport';
import { _ } from 'splunk-ui/util/i18n';
import SVG from 'splunk-ui/icons/SVG';

/* eslint-disable max-len */
export default function CirclePlus(props) {
    return (
        <SVG
            screenReaderText={_('Circle Plus')}
            {...createTestHook(__filename)}
            {...props}
        >
            <path d="M750 0c203 0 397 82 532 218 136 135 218 329 218 532 0 210-82 393-218 529-135 135-329 221-532 221-210 0-393-86-529-221C86 1143 0 960 0 750c0-203 86-397 221-532C357 82 540 0 750 0zm567 896V604H897V183H605v421H184v292h421v420h292V896h420z" />
        </SVG>
    );
}
