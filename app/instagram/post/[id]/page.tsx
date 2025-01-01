'use client'

import Image from 'next/image';
import PostHeader from '@/components/PostHeader';
import PostActions from '@/components/PostActions';
import Comments from '@/components/Comments';
import { useState, use } from 'react';

// This would normally come from an API or database
const getPostData = (id: string) => ({
  id,
  username: 'almostzenbut_no',
  userImage: '/profile.jpg',
  image: id === '1' ? '/stable.png' : '/sundial.png',
  caption: 'This is a sample caption for the post. #awesome #coding',
  likes: 42,
  isLiked: false,
  isSaved: false,
  timestamp: 'December 31, 2023',
  comments: [
    {
      username: 'user1',
      content: 'This is amazing! 🔥',
      timestamp: '2h',
      likes: 2,
      userLiked: true,
    },
    {
      username: 'user2',
      content: 'Great work! 👏',
      timestamp: '1h',
      likes: 1,
      userLiked: false,
    },
  ],
});

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const initialPost = getPostData(id);
  const [post, setPost] = useState(initialPost);

  const handleLike = (isLiked: boolean) => {
    setPost(prev => ({
      ...prev,
      isLiked,
      likes: prev.likes + (isLiked ? 1 : -1)
    }));
  };

  const handleSave = () => {
    setPost(prev => ({
      ...prev,
      isSaved: !prev.isSaved
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-screen lg:h-[calc(100vh-8rem)] lg:max-w-7xl lg:mx-auto lg:my-8">
        <div className="h-full bg-white lg:rounded-lg lg:shadow-sm lg:overflow-hidden">
          <div className="h-full lg:grid lg:grid-cols-[1fr,400px]">
            {/* Post Header - Mobile Only */}
            <div className="lg:hidden">
              <PostHeader
                username={post.username}
                userImage={post.userImage}
              />
            </div>

            {/* Image Section */}
            <div className="relative aspect-square lg:aspect-auto lg:h-full">
              <Image
                src={post.image}
                alt={`Post by ${post.username}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Comments Section */}
            <div className="lg:flex lg:flex-col lg:h-full">
              {/* Post Header - Desktop Only */}
              <div className="hidden lg:block border-b">
                <PostHeader
                  username={post.username}
                  userImage={post.userImage}
                />
              </div>

              {/* Actions and Comments */}
              <div className="flex flex-col flex-1 lg:overflow-y-auto">
                <PostActions
                  likes={post.likes}
                  isLiked={post.isLiked}
                  isSaved={post.isSaved}
                  onLike={handleLike}
                  onSave={handleSave}
                />
                <Comments
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
