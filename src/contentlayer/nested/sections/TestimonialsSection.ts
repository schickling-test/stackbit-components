import { defineNestedType } from 'contentlayer/source-files';
import { sectionBaseFields } from './sectionBaseFields.js';

export const TestimonialsSection = defineNestedType(() => ({
    name: 'TestimonialsSection',
    fields: {
        ...sectionBaseFields
    }
}));
