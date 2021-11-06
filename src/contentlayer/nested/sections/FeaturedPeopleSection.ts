import { defineNestedType } from 'contentlayer/source-files';
import { sectionBaseFields } from './sectionBaseFields.js';

export const FeaturedPeopleSection = defineNestedType(() => ({
    name: 'FeaturedPeopleSection',
    fields: {
        ...sectionBaseFields
    }
}));
