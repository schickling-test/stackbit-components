import { Config, PageLayout } from '.contentlayer/types';
import * as React from 'react';
import { getComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../utils/base-layout';

type Props = React.PropsWithChildren<{
    site: Config;
    page: PageLayout;
}>;

export default function PageLayout(props: Props) {
    const { page, site } = props;
    // const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const BaseLayout = getBaseLayoutComponent(undefined, undefined);
    const sections = page.sections || [];

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="layout page-layout">
                {page.title && (
                    <h1 className="sr-only" data-sb-field-path="title">
                        {page.title}
                    </h1>
                )}
                {sections.length > 0 && (
                    <div data-sb-field-path="sections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} annotationPrefix={`sections.${index}`} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}
