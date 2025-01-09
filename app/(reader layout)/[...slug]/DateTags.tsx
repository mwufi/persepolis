
export const DateTags = ({ date, tags }: { date: string, tags: string[] }) => {
    return (
        <div className="flex items-center justify-center gap-4 text-white mt-6">
            {date && (
                <time dateTime={date} className="text-base">
                    {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </time>
            )}
            {tags && tags.length > 0 && (
                <div className="flex gap-2">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 text-sm bg-white/10 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}