import { defineNestedType } from 'contentlayer/source-files';
import { ImageBlock } from '../ImageBlock.js';
import { sectionBaseFields } from './sectionBaseFields.js';

export const QuoteSection = defineNestedType(() => ({
    name: 'QuoteSection',
    fields: {
        ...sectionBaseFields,
        quote: {
            type: 'markdown',
            description: `“It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”`
        },
        name: {
            type: 'string',
            default: 'Johnna Doe'
        },
        title: {
            type: 'string',
            default: 'Product Marketing Manager at Acme'
        },
        backgroundImage: {
            type: 'nested',
            of: ImageBlock,
            default: {
                url: '/images/dianne-ameter.jpg',
                altText: 'Product Marketing Manager'
            }
        }
    },
    extensions: {
        stackbit: {
            fields: {
                quote: { label: 'Quote' },
                name: { label: 'Author name' },
                title: { label: 'Author title' },
                backgroundImage: { label: 'Background image' }
            }
        }
    }
}));
