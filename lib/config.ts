interface SiteConfig {
  name: string
  domain: string
  description: string
}

let configCache: SiteConfig | null = null

export async function getSiteConfig(): Promise<SiteConfig> {
  // Return cached config if available
  if (configCache) return configCache

  try {
    // In the future, this could be an API call
    // const response = await fetch('https://api.yourdomain.com/config')
    // configCache = await response.json()
    
    // For now, return hardcoded values
    configCache = {
      name: 'Persepolis',
      domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'localhost:3000',
      description: 'My personal website and blog'
    }

    return configCache
  } catch (error) {
    console.warn('Failed to fetch site config:', error)
    // Return default values if API call fails
    return {
      name: 'Persepolis',
      domain: 'localhost:3000',
      description: 'My personal website and blog'
    }
  }
}

export function getFullUrl(path: string): string {
  const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN || 'localhost:3000'
  const protocol = domain.includes('localhost') ? 'http' : 'https'
  return `${protocol}://${domain}${path}`
}
