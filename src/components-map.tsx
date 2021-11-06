// import dynamic from 'next/dynamic';

import Action from './components/Action/index.js';
import Footer from './components/Footer/index.js';
import Header from './components/Header/index.js';
import Social from './components/Social/index.js';

import CheckboxFormControl from './components/CheckboxFormControl/index.js';
import ContactSection from './components/ContactSection/index.js';
import CtaSection from './components/CtaSection/index.js';
import EmailFormControl from './components/EmailFormControl/index.js';
import FeaturedPeopleSection from './components/FeaturedPeopleSection/index.js';
import FeaturedPostsSection from './components/FeaturedPostsSection/index.js';
import FormBlock from './components/FormBlock/index.js';
import HeroSection from './components/HeroSection/index.js';
import ImageBlock from './components/ImageBlock/index.js';
import PostFeedSection from './components/PostFeedSection/index.js';
import QuoteSection from './components/QuoteSection/index.js';
import SelectFormControl from './components/SelectFormControl/index.js';
import TestimonialsSection from './components/TestimonialsSection/index.js';
import TextareaFormControl from './components/TextareaFormControl/index.js';
import TextFormControl from './components/TextFormControl/index.js';
import TextSection from './components/TextSection/index.js';
import VideoBlock from './components/VideoBlock/index.js';
import PageLayout from './layouts/PageLayout/index.js';
import PostLayout from './layouts/PostLayout/index.js';

export const componentsMap = {
    // static components, key is component name
    Action: Action,
    Footer: Footer,
    Header: Header,
    Social: Social,

    // dynamic components, key is model name
    CheckboxFormControl,
    ContactSection,
    CtaSection,
    EmailFormControl,
    FeaturedPeopleSection,
    FeaturedPostsSection,
    FormBlock,
    HeroSection,
    ImageBlock,
    PostFeedSection,
    QuoteSection,
    SelectFormControl,
    TestimonialsSection,
    TextareaFormControl,
    TextFormControl,
    TextSection,
    VideoBlock,
    PageLayout,
    PostLayout
};
