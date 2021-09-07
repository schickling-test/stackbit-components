import React from 'react';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    return (
        <div className={site.backgroundColor || 'bg-white'} data-sb-object-id={pageMeta.id}>
            <Head>
                <title>{page.title}</title>
                <meta name="description" content="Stackbit Components Library" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>
            <NavBar {...site.navBar} annotationPrefix={siteMeta.id} />
            {props.children}
            <Footer {...site.footer} annotationPrefix={siteMeta.id} />
        </div>
    );
}
