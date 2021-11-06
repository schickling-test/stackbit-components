import * as React from 'react';
import Head_ from 'next/head';
import classNames from 'classnames';
import type { Config, PageLayout, PostLayout } from '.contentlayer/types';

const Head = (Head_ as any).default as typeof Head_;

import { getComponent } from '../../components-registry';

type Props = React.PropsWithChildren<{
    site: Config;
    page: PageLayout | PostLayout;
}>;

export default function DefaultBaseLayout(props: Props) {
    const pageMeta = { pageCssClasses: [] };
    const { page, site } = props;
    const Header = getComponent('Header');
    const Footer = getComponent('Footer');

    return (
        <div className={classNames('page', pageMeta.pageCssClasses)} data-sb-object-id={page._id}>
            <div className="base default-base-layout">
                <Head>
                    <title>{page.title}</title>
                    <meta name="description" content="Stackbit Components Library" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                </Head>
                <Header {...site.header} annotationPrefix={site._id} />
                {props.children}
                <Footer {...site.footer} annotationPrefix={site._id} />
            </div>
        </div>
    );
}
