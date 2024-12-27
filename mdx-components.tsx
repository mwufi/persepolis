import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => (
            <h1>{children}</h1>
        ),
        img: (props) => (
            <Image
                sizes="100vw"
                width={300}
                height={300}
                className="rounded-lg overflow-hidden"
                style={{ width: '100%', height: 'auto' }}
                {...(props as ImageProps)}
            />
        ),
        a: ({ children, href, ...props }) => {
            const isExternal = href?.startsWith('http');
            return (
                <a
                    href={href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...props}
                >
                    {children}
                </a>
            );
        },
        ...components,
    }
}