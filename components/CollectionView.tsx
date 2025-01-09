import { DirectoryEntry } from '@/lib/mdx'
import { ItemPreview } from '@/components/ItemPreview'

interface CollectionViewProps {
    entries: DirectoryEntry[]
    title?: string
    flattenDirectories?: boolean
}

export function CollectionView({ entries, title, flattenDirectories = true }: CollectionViewProps) {
    return (
        <div className="space-y-6">
            {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
            <div className="grid gap-6">
                {entries.map((entry) => (
                    <ItemPreview
                        key={entry.path}
                        entry={entry}
                    />
                ))}
            </div>
            <div className="mt-10 text-sm text-white/60 italic">
                Views like this are <span className="font-semibold">collection views</span>, which are automatically generated from a folder!
            </div>
        </div>
    )
} 