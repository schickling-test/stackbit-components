import { FieldDefs } from 'contentlayer/source-files';

export const sectionBaseFields: FieldDefs = {
    elementId: { type: 'string', default: '', description: 'The unique ID for an HTML element, must not contain whitespace' },
    colors: {
        type: 'enum',
        options: ['colors-a', 'colors-b'],
        description: 'The color theme of the section'
    }
};
