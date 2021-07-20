import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import Link from 'next/link';
import Badge from '../badge';

export default function PostsSection(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
    const alignHoriz = props.alignHoriz || 'left';

    return (
        <div
            className={classNames('py-16 lg:py-20', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'bg-base-50 text-base-900': style === 'style-a',
                'bg-neutral text-base-50': style === 'style-b',
                'bg-neutral text-primary': style === 'style-c',
                'bg-primary text-base-900': style === 'style-d',
                'bg-secondary text-base-900': style === 'style-e'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow'
                })}
            >
                <div
                    className={classNames('max-w-lg mb-10', {
                        'mx-auto text-center': alignHoriz === 'center'
                    })}
                >
                    {props.badge && <Badge label={props.badge} className="bg-accent text-base-900" />}
                    {props.title && <h2 className="font-medium font-sans text-3xl tracking-tight sm:text-4xl"><ReactMarkdown allowedElements={["br","span","strong"]} unwrapDisallowed={true} components={components}>{props.title}</ReactMarkdown></h2>}
                    {props.subtitle && <p className="md:text-lg">{props.subtitle}</p>}
                </div>
                <PostVariants {...props} />
            </div>
        </div>
    );
}

function PostVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return PostsVariantA(props);
        case 'variant-b':
            return PostsVariantB(props);
    }
    return null;
}

function PostsVariantA(props) {
    const style = props.style || 'style-a';

    return (
        <div className="grid gap-4 md:grid-cols-3 lg:gap-8">
            {(props.posts || []).map((post, idx) => (
                <Link key={idx} href={post.url}>
                    <a className={classNames('block shadow-xl transition duration-300 hover:-translate-y-1', {
                            'bg-secondary': style === 'style-a',
                            'bg-neutral-variant': style === 'style-b' || style === 'style-c',
                            'bg-primary-variant': style === 'style-d',
                            'bg-secondary-variant': style === 'style-e'
                    })}>
                        <article>
                            {post.thumbImageUrl && (
                                <div className="h-0 w-full pt-1/2 relative">
                                    <img src={post.thumbImageUrl} alt={post.thumbImageAlt} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </div>
                                
                            )}
                            <div className="px-4 py-6 sm:px-6 sm:pb-10">
                                <h2 className="font-medium text-xl sm:text-2xl mb-3">{post.title}</h2>
                                {post.excerpt && (<ReactMarkdown>{post.excerpt}</ReactMarkdown>)}
                            </div>
                        </article>
                    </a>
                </Link>
            ))}
        </div>
    );
}

function PostsVariantB(props) {
    return (
        <div className="flex flex-wrap -mx-4">
            {(props.posts || []).map((post, idx) => (
                <article key={idx} className="flex flex-wrap mb-10 px-4 w-full md:w-1/2">
                    {post.thumbImageUrl && (
                        <div className="mb-4 w-full md:mb-0 md:w-1/3">
                            <Link href={post.url}>
                                <a className="block group overflow-hidden pt-1/1 relative w-full">
                                    <img src={post.thumbImageUrl} alt={post.thumbImageAlt} className="absolute left-0 top-0 h-full w-full object-cover scale-100 transition duration-300 group-hover:scale-105" />
                                </a>
                            </Link>
                        </div>
                    )}
                    <div className="w-full md:pl-6 md:w-2/3 lg:pt-2">
                        <h2 className="font-medium mb-2 text-2xl md:text-xl">
                            <Link href={post.url}>
                                <a>{post.title}</a>
                            </Link>
                        </h2>
                        {post.excerpt && (<ReactMarkdown>{post.excerpt}</ReactMarkdown>)}
                    </div>
                </article>
            ))}
        </div>
    );
}

const components = {
    strong({ children }) {
        return <span className="inline-block text-accent">{children}</span>;
    }
};
