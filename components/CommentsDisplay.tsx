'use client'

import Link from 'next/link'
import { HeartIcon, MessageCircleIcon, SendIcon, BookmarkIcon } from 'lucide-react'

interface Comment {
  username: string
  content: string
  userLiked?: boolean
  likes?: number
}

interface CommentsDisplayProps {
  comments: Comment[]
  caption?: string
  username: string
  timestamp: string
}

export default function CommentsDisplay({ comments, caption, username, timestamp }: CommentsDisplayProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        {/* Post description */}
        <div className="flex items-start gap-2 mb-4">
          <Link href={`/u/${username}`} className="font-semibold hover:text-gray-600 transition-colors">
            {username}
          </Link>
          {caption && (
            <p className="text-sm">{caption}</p>
          )}
        </div>

        {/* Comments */}
        <div className="space-y-3">
          {comments.map((comment, index) => (
            <div key={index} className="flex justify-between items-start gap-2">
              <div>
                <Link href={`/u/${comment.username}`} className="font-semibold text-sm hover:text-gray-600 transition-colors">
                  {comment.username}
                </Link>{' '}
                <span className="text-sm">{comment.content}</span>
              </div>
              <button className="text-xs text-gray-500 hover:text-red-500">
                <HeartIcon size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-auto pt-4 border-t">
        <div className="flex justify-between mb-3">
          <div className="flex gap-4">
            <button className="hover:text-red-500 transition-colors">
              <HeartIcon size={24} />
            </button>
            <button className="hover:text-blue-500 transition-colors">
              <MessageCircleIcon size={24} />
            </button>
            <button className="hover:text-green-500 transition-colors">
              <SendIcon size={24} />
            </button>
          </div>
          <button className="hover:text-yellow-500 transition-colors">
            <BookmarkIcon size={24} />
          </button>
        </div>
        <p className="font-semibold text-sm mb-1">1,337 likes</p>
        <p className="text-xs text-gray-500 uppercase">{timestamp}</p>
      </div>
    </div>
  )
}
