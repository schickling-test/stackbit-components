import { defineNestedType } from 'contentlayer/source-files';
import { sectionBaseFields } from './sectionBaseFields.js';

export const ContactSection = defineNestedType(() => ({
    name: 'ContactSection',
    fields: {
        ...sectionBaseFields
    }
}));
