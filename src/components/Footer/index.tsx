import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import ImageBlock from '../ImageBlock';
import Link from '../../utils/link';

export default function Footer(props) {
    const colors = props.colors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';
    const footerStyles = props.styles?.self || {};
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const legalLinks = props.legalLinks || [];
    const Action = getComponent('Action');
    const Social = getComponent('Social');
    return (
        <footer
            className={classNames(
                'sb-component',
                'sb-component-footer',
                backgroundWidth === 'inset' ? 'sb-component-footer-inset' : null,
                colors,
                'px-4',
                'sm:px-8'
            )}
            data-sb-object-id={props.annotationPrefix}
        >
            <div
                className={classNames('mx-auto', footerStyles.width ? mapMaxWidthStyles(footerStyles.width) : null, footerStyles.padding)}
                data-sb-field-path="footer"
            >
                {(props.logo || props.title || props.text) && (
                    <div className="mb-12">
                        {props.logo && (
                            <Link href="/" className="inline-block mb-4" data-sb-field-path=".logo">
                                {props.logo && <ImageBlock {...props.logo} />}
                            </Link>
                        )}
                        {props.title && (
                            <div className="mb-2 text-2xl tracking-wide" data-sb-field-path="footer.title">
                                {props.title}
                            </div>
                        )}
                        {props.text && (
                            <Markdown options={{ forceBlock: true, forceWrapper: true }} className="sb-markdown max-w-xl" data-sb-field-path=".text">
                                {props.text}
                            </Markdown>
                        )}
                    </div>
                )}
                {(primaryLinks.length > 0 || socialLinks.length > 0 || props.contacts) && (
                    <div className="sm:flex sm:justify-between sm:items-end">
                        {primaryLinks.length > 0 && (
                            <div className="mb-6">
                                <ul className="flex flex-col items-start mb-6 space-y-6 text-lg" data-sb-field-path=".primaryLinks">
                                    {primaryLinks.map((link, index) => (
                                        <li key={index} data-sb-field-path={`.${index}`}>
                                            <Action {...link} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {(socialLinks.length > 0 || props.contacts) && (
                            <div className="mb-6">
                                {socialLinks.length > 0 && (
                                    <ul className="flex items-center mb-6 space-x-10" data-sb-field-path=".socialLinks">
                                        {socialLinks.map((link, index) => (
                                            <li key={index} data-sb-field-path={`.${index}`}>
                                                <Social {...link} />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {props.contacts && <Contacts {...props.contacts} />}
                            </div>
                        )}
                    </div>
                )}
                <div className="sb-divider" />
                <div className="flex flex-col-reverse justify-between pt-6 lg:flex-row">
                    {props.copyrightText && <p data-sb-field-path=".copyrightText">{props.copyrightText}</p>}
                    {legalLinks.length > 0 && (
                        <ul className="flex flex-col mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row" data-sb-field-path=".legalLinks">
                            {legalLinks.map((link, index) => (
                                <li key={index} data-sb-field-path={`.${index}`}>
                                    <Action {...link} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </footer>
    );
}

function Contacts(props) {
    return (
        <div className="mb-6 space-y-4 text-lg" data-sb-field-path=".contacts">
            {props.phoneNumber && (
                <p>
                    <a
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAltText}
                        title={props.phoneAltText}
                        data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title"
                    >
                        {props.phoneNumber}
                    </a>
                </p>
            )}
            {props.email && (
                <p>
                    <a
                        href={`mailto:${props.email}`}
                        aria-label={props.emailAltText}
                        title={props.emailAltText}
                        data-sb-field-path=".email .email#@href .emailAltText#@title"
                    >
                        {props.email}
                    </a>
                </p>
            )}
            {props.address && (
                <p>
                    <a
                        href={`https://www.google.com/maps/search/${props.address}`}
                        aria-label={props.addressAltText}
                        title={props.addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-sb-field-path=".address .address#@href .addressAltText#@title"
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
