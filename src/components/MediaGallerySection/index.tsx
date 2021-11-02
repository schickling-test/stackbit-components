import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles, mapStylesToClassNames } from '../../utils/map-styles-to-class-names';

export default function MediaGallerySection(props) {
    const colors = props.colors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';
    const items = props.items || [];
    const columnCount = props.columnCount || 3;
    const sectionStyles = props.styles?.self || {};

    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                backgroundWidth === 'inset' ? 'sb-component-section-inset' : null,
                'sb-component-testimonials-section',
                colors,
                'px-4',
                'sm:px-8',
                sectionStyles.margin
            )}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'max-w-screen-2xl',
                    'mx-auto',
                    sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                    sectionStyles.padding,
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : null,
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    {mediaGalleryHeader(props)}
                    {items.length > 0 && (
                        <div
                            className={classNames('grid', 'gap-4', {
                                'sm:grid-cols-2': columnCount === 2,
                                'sm:grid-cols-3': columnCount === 3,
                                'sm:grid-cols-2 md:grid-cols-4': columnCount === 4,
                                'sm:grid-cols-3 md:grid-cols-5': columnCount === 5,
                                'sm:grid-cols-3 md:grid-cols-6': columnCount === 6
                            })}
                            data-sb-field-path=".items"
                        >
                            {items.map((item, index) => mediaGalleryItem(item, index))}
                        </div>
                    )}
                    {mediaGalleryActions(props)}
                </div>
            </div>
        </div>
    );
}

function mediaGalleryHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 className={classNames('text-3xl', 'sm:text-4xl', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null)} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
        </div>
    );
}

function mediaGalleryActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex', 'flex-wrap', 'items-center', 'mt-8', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
            data-sb-field-path=".actions"
        >
            {props.actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function mediaGalleryItem(item, index) {
    const itemType = item.type;
    if (!itemType) {
        throw new Error(`media gallery section item does not have the 'type' property`);
    }
    const Item = getComponent(itemType);
    if (!Item) {
        throw new Error(`no component matching the media gallery section item type: ${itemType}`);
    }
    return (
        <div key={index} data-sb-field-path={`.${index}`}>
            <Item {...item} />
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'md:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'md:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
    }
    return null;
}
