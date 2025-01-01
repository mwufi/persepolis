import Link from 'next/link'

interface BreadcrumbProps {
  slug: string[]
}

export function Breadcrumb({ slug }: BreadcrumbProps) {
  // Generate breadcrumb items
  const breadcrumbItems = slug.map((part, index) => {
    // Create the href by joining all parts up to current index
    const href = '/' + slug.slice(0, index + 1).join('/')
    
    // Format the text to be more readable
    const text = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ')
    
    return {
      text,
      href,
    }
  })

  return (
    <nav className="flex gap-2 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-gray-700">
        Home
      </Link>
      {breadcrumbItems.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          <span className="text-gray-400">/</span>
          <Link
            href={item.href}
            className={`hover:text-gray-700 ${
              index === breadcrumbItems.length - 1 ? 'font-medium text-gray-900' : ''
            }`}
          >
            {item.text}
          </Link>
        </span>
      ))}
    </nav>
  )
}
