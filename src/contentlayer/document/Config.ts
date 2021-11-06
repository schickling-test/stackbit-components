import { defineDocumentType } from 'contentlayer/source-files';

export const Config = defineDocumentType(() => ({
    name: 'Config',
    bodyType: 'none',
    fields: {
        header: { type: 'json' },
        footer: { type: 'json' }
    },
    isSingleton: true
}));
