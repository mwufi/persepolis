import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Tweet } from 'react-tweet'
import { YouTubeRenderer } from './components/YouTubeRenderer'

const TweetRenderer = ({ href }: { href: string }) => {
    // Extract tweet ID from URLs like https://x.com/username/status/1234567890
    const match = href.match(/\/status\/(\d+)/)
    const id = match ? match[1] : null

    if (!id) return <a href={href}>{href}</a>
    return <Tweet id={id} />
}

const isTweetUrl = (text: string) => {
    return (text.includes('x.com') || text.includes('twitter.com')) && text.includes('/status/')
}

const isYouTubeUrl = (text: string) => {
    return text.includes('youtube.com') || text.includes('youtu.be')
}

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
        p: ({ children }) => {
            // Check if the paragraph contains only a tweet or YouTube URL
            if (typeof children === 'string') {
                const trimmedContent = children.trim()
                if (isTweetUrl(trimmedContent)) {
                    return <TweetRenderer href={trimmedContent} />
                }
                if (isYouTubeUrl(trimmedContent)) {
                    return <YouTubeRenderer href={trimmedContent} />
                }
            }
            return <p>{children}</p>
        },
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