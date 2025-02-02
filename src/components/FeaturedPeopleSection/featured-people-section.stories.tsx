import React from 'react';
import FeaturedPeopleSection from './index';

export default {
    title: 'Components/FeaturedPeopleSection',
    component: FeaturedPeopleSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        variant: {
            options: ['variant-a', 'variant-b', 'variant-c'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        backgroundWidth: {
            options: ['full', 'inset'],
            defaultValue: 'full',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <FeaturedPeopleSection {...args} />;

const args = {
    type: 'FeaturedPeopleSection',
    elementId: '',
    variant: 'variant-a',
    colors: 'colors-h',
    width: 'wide',
    backgroundWidth: 'full',
    title: 'The Team',
    subtitle: 'This is Subtitle',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'View More',
            style: 'primary'
        }
    ],
    people: [
        {
            firstName: 'Desmond',
            lastName: 'Eagle',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: '/images/desmond-eagle.jpg',
                altText: 'Photo of Desmond Eagle'
            }
        },
        {
            firstName: 'Dianne',
            lastName: 'Ameter',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: '/images/dianne-ameter.jpg',
                altText: 'Photo of Dianne Ameter'
            }
        },
        {
            firstName: 'Hilary',
            lastName: 'Ouse',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: '/images/hilary-ouse.jpg',
                altText: 'Photo of Hilary Ouse'
            }
        },
        {
            firstName: 'Hugh',
            lastName: 'Saturation',
            role: 'Product Manager',
            bio: 'Vincent Van Gogh’s most popular painting, The Starry Night.',
            image: {
                type: 'ImageBlock',
                url: '/images/hugh-saturation.jpg',
                altText: 'Photo of Hugh Saturation'
            }
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-12', 'pb-12'],
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Featured People, Four Column Grid';
Primary.args = args;

export const FeaturedPeopleTwoCol = Template.bind({});
FeaturedPeopleTwoCol.storyName = 'Featured People, Two Column Grid';
FeaturedPeopleTwoCol.args = {
    ...args,
    variant: 'variant-b',
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-12', 'pb-12'],
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const FeaturedPeopleTwoColAlt = Template.bind({});
FeaturedPeopleTwoColAlt.storyName = 'Featured People, Two Column Grid Alt';
FeaturedPeopleTwoColAlt.args = {
    ...args,
    variant: 'variant-c',
    styles: {
        self: {
            height: 'auto',
            width: 'narrow',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-12', 'pb-12'],
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};
