import { defineNestedType } from 'contentlayer/source-files';
import { sectionBaseFields } from './sectionBaseFields.js';

export const FeaturedPostsSection = defineNestedType(() => ({
    name: 'FeaturedPostsSection',
    fields: {
        ...sectionBaseFields
    }
}));
