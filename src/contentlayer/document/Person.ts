import { defineDocumentType } from 'contentlayer/source-files';
import { ImageBlock } from '../nested/ImageBlock.js';

export const Person = defineDocumentType(() => ({
    name: 'Person',
    bodyType: 'none',
    fields: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        role: { type: 'string' },
        bio: { type: 'markdown' },
        image: { type: 'nested', of: ImageBlock }
    }
}));
