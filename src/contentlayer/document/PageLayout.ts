import { defineDocumentType } from 'contentlayer/source-files';
import { Sections } from '../nested/sections/index.js';

export const PageLayout = defineDocumentType(() => ({
    name: 'PageLayout',
    bodyType: 'none',
    fields: {
        title: { type: 'string', default: 'This is a new page' },
        // TODO allow for definition groups
        sections: {
            type: 'list',
            of: Sections,
            typeField: 'type',
            default: [
                {
                    type: 'HeroSection',
                    elementId: 'homepage-hero-1',
                    variant: 'variant-a',
                    colors: 'colors-f',
                    width: 'wide',
                    height: 'tall',
                    bottomGap: 'none',
                    topGap: 'none',
                    contentWidth: 'large',
                    contentAlignHoriz: 'center',
                    contentAlignVert: 'middle',
                    textAlign: 'left',
                    title: 'This Is A Big Hero **Headline**',
                    text: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat\n  itae interdum. Ut nec massa eget lorem blandit condimentum et at risus.',
                    actions: [
                        {
                            type: 'Button',
                            label: 'Get Started',
                            url: '/',
                            style: 'primary',
                            elementId: 'hero-main-button'
                        },
                        {
                            type: 'Button',
                            label: 'Learn More',
                            url: '/',
                            style: 'secondary'
                        }
                    ],
                    feature: {
                        type: 'ImageBlock',
                        url: '/images/hero.png',
                        altText: 'Image alt text'
                    }
                }
            ]
        }
    },
    computedFields: {
        path: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.replace(/pages\/?/, '') }
    }
}));
