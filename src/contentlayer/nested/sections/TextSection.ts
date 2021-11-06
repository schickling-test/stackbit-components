import { defineNestedType } from 'contentlayer/source-files';
import { sectionBaseFields } from './sectionBaseFields.js';

export const TextSection = defineNestedType(() => ({
    name: 'TextSection',
    fields: {
        ...sectionBaseFields
    }
}));
