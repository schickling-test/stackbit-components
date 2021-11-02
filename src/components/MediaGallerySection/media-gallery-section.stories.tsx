import React from 'react';
import MediaGallerySection from './index';

export default {
    title: 'Components/MediaGallerySection',
    component: MediaGallerySection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
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
        },
        columnCount: {
            options: [1, 2, 3, 4, 5, 6],
            defaultValue: 3,
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <MediaGallerySection {...args} />;

const args = {
    type: 'MediaGallerySection',
    elementId: '',
    colors: 'colors-h',
    backgroundWidth: 'full',
    title: 'Media Gallery Section',
    subtitle: 'The subtitle of the section',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'View More',
            style: 'primary'
        }
    ],
    items: [
        {
            type: 'ImageBlock',
            url: '/images/isabelle-parks.jpg',
            altText: 'Photo of Isabelle Parks'
        },
        {
            type: 'ImageBlock',
            url: '/images/isabelle-parks.jpg',
            altText: 'Photo of Isabelle Parks'
        },
        {
            type: 'ImageBlock',
            url: '/images/isabelle-parks.jpg',
            altText: 'Photo of Isabelle Parks'
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
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Image Gallery';
Primary.args = args;

export const MediaGalleryVideos = Template.bind({});
MediaGalleryVideos.storyName = 'Video Gallery';
MediaGalleryVideos.args = {
    ...args,
    items: [
        {
            type: 'VideoBlock',
            url: '/videos/stackbit-for-marketers.mp4',
            thumbnailUrl: '/images/stackbit-for-marketers.jpeg',
            controls: true
        },
        {
            type: 'VideoBlock',
            url: '/videos/stackbit-for-marketers.mp4',
            thumbnailUrl: '/images/stackbit-for-marketers.jpeg',
            controls: true
        },
        {
            type: 'VideoBlock',
            url: '/videos/stackbit-for-marketers.mp4',
            thumbnailUrl: '/images/stackbit-for-marketers.jpeg',
            controls: true
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'full',
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
        }
    }
};
