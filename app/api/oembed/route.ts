import { NextRequest } from 'next/server'
import { getMdxContent } from '@/lib/mdx'
import { getSiteConfig } from '@/lib/config'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')
  const format = searchParams.get('format') || 'json'
  const maxwidth = parseInt(searchParams.get('maxwidth') || '700')
  const maxheight = parseInt(searchParams.get('maxheight') || '500')

  if (!url) {
    return new Response('URL parameter is required', { status: 400 })
  }

  if (format !== 'json') {
    return new Response('Only JSON format is supported', { status: 400 })
  }

  try {
    // Extract slug from URL
    const siteConfig = await getSiteConfig()
    const urlObj = new URL(url)
    const fullDomain = `${siteConfig.domain}`
    
    if (!url.startsWith(`http://${fullDomain}`) && !url.startsWith(`https://${fullDomain}`)) {
      return new Response('Invalid domain', { status: 400 })
    }

    const path = urlObj.pathname.split('/')
    const slug = path.filter(p => p) // Remove empty strings

    // Get the content
    const mdxData = await getMdxContent(slug)
    if (!mdxData) {
      return new Response('Content not found', { status: 404 })
    }

    const { frontMatter } = mdxData
    const title = frontMatter?.title || 'Untitled'
    const description = frontMatter?.description || ''
    const headerImg = frontMatter?.headerImg

    // Create embed HTML
    const html = `
      <div style="max-width: ${maxwidth}px;">
        ${headerImg ? `<img src="${headerImg}" alt="${title}" style="width: 100%; height: auto; margin-bottom: 1rem;">` : ''}
        <h2 style="margin: 0 0 0.5rem; font-size: 1.5rem;">${title}</h2>
        ${description ? `<p style="margin: 0; color: #666;">${description}</p>` : ''}
        <a href="${url}" style="color: #0066cc; text-decoration: none; font-size: 0.875rem; display: block; margin-top: 0.5rem;">
          Read more at ${siteConfig.name}
        </a>
      </div>
    `.trim()

    const response = {
      version: '1.0',
      type: 'rich',
      title,
      provider_name: siteConfig.name,
      provider_url: `https://${siteConfig.domain}`,
      author_name: frontMatter?.author || siteConfig.name,
      html,
      width: maxwidth,
      height: headerImg ? maxheight : Math.min(200, maxheight),
      thumbnail_url: headerImg,
      thumbnail_width: maxwidth,
      thumbnail_height: maxheight,
    }

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('oEmbed error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
