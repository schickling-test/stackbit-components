import { defineNestedType } from 'contentlayer/source-files';
import { sectionBaseFields } from './sectionBaseFields.js';

export const CtaSection = defineNestedType(() => ({
    name: 'CtaSection',
    fields: {
        ...sectionBaseFields
    }
}));
