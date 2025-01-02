'use client'

import { getPostData } from '@/lib/posts'
import CommentsDisplay from './CommentsDisplay'

interface CommentsProps {
  postId: string
}

export default function Comments({ postId }: CommentsProps) {
  // In a real app, this would fetch data from an API
  const post = getPostData(postId)

  if (!post) {
    return null
  }

  return (
    <CommentsDisplay
      comments={post.comments}
      caption={post.caption}
      username={post.username}
      timestamp={post.timestamp}
    />
  )
}
