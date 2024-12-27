'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export const YouTubeRenderer = ({ href }: { href: string }) => {
    // Extract video ID from various YouTube URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
        /youtube\.com\/embed\/([^&\n?#]+)/,
    ]
    
    let videoId = null
    for (const pattern of patterns) {
        const match = href.match(pattern)
        if (match) {
            videoId = match[1]
            break
        }
    }

    if (!videoId) return <a href={href}>{href}</a>
    return (
        <div className="aspect-video">
            <LiteYouTubeEmbed 
                id={videoId}
                title="YouTube video"
                poster="maxresdefault"
            />
        </div>
    )
}
