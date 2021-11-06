import { defineDocumentType } from 'contentlayer/source-files';
import { ImageBlock } from '../nested/ImageBlock.js';
import { Sections } from '../nested/sections/index.js';

export const PostLayout = defineDocumentType(() => ({
    name: 'PostLayout',
    bodyType: 'markdown',
    fields: {
        title: { type: 'string' },
        date: { type: 'string' },
        author: { type: 'json' },
        excerpt: { type: 'string' },
        thumbImage: {
            type: 'nested',
            of: ImageBlock,
            default: {
                url: '/images/post-1.jpg',
                altText: 'Post thumbnail image'
            }
        },
        topSections: {
            type: 'list',
            of: Sections,
            typeField: 'type'
        },
        bottomSections: {
            type: 'list',
            of: Sections,
            typeField: 'type'
        }
    }
}));
