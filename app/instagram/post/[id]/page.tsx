'use client'

import Image from 'next/image';
import { useState, use } from 'react';
import { getPostData } from '@/lib/posts';
import PostHeader from '@/components/instagram/PostHeader';
import PostActions from '@/components/instagram/PostActions';
import CommentsDisplay from '@/components/instagram/CommentsDisplay';

function PostContent({ initialPost }: { initialPost: ReturnType<typeof getPostData> }) {
  const [post, setPost] = useState(initialPost);

  const handleLike = (isLiked: boolean) => {
    setPost(prev => ({
      ...prev,
      isLiked,
      likes: prev.likes + (isLiked ? 1 : -1)
    }));
  };

  const handleSave = (isSaved: boolean) => {
    setPost(prev => ({
      ...prev,
      isSaved
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="relative flex-1 aspect-square md:aspect-auto">
            <Image
              src={post.image}
              alt={`Post by ${post.username}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Comments */}
          <div className="w-full md:w-[350px] flex flex-col">
            <div className="p-4 border-b">
              <PostHeader username={post.username} userImage={post.userImage} />
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <PostActions
                  isLiked={post.isLiked}
                  isSaved={post.isSaved}
                  likes={post.likes}
                  onLike={handleLike}
                  onSave={handleSave}
                />
                <CommentsDisplay
                  comments={post.comments}
                  caption={post.caption}
                  username={post.username}
                  timestamp={post.timestamp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const initialPost = getPostData(id);

  if (!initialPost) {
    return <div>Post not found</div>;
  }

  return <PostContent initialPost={initialPost} />;
}
