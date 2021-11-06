import React from 'react';
import * as base from '../base/index.js';

export function getBaseLayoutComponent(pageBaseLayout, siteConfigBaseLayout): React.FC<any> {
    let BaseLayout = base.DefaultBaseLayout;
    if (pageBaseLayout) {
        BaseLayout = base[pageBaseLayout];
    } else if (siteConfigBaseLayout) {
        BaseLayout = base[siteConfigBaseLayout];
    }
    if (!BaseLayout) {
        throw new Error(`no BaseLayout: ${pageBaseLayout} or ${siteConfigBaseLayout}`);
    }
    return BaseLayout;
}
