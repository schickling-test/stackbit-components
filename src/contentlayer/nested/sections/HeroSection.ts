import { defineNestedType } from 'contentlayer/source-files';
import { sectionBaseFields } from './sectionBaseFields.js';

export const HeroSection = defineNestedType(() => ({
    name: 'HeroSection',
    fields: {
        ...sectionBaseFields,
        title: { type: 'string', required: true },
        text: { type: 'string', required: true },
        backgroundWidth: { type: 'string', required: true },
        styles: { type: 'json' }
    }
}));
