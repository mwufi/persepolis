'use client'

import Link from 'next/link';
import { useState } from 'react';
import HeartButton from './HeartButton';

interface Comment {
  username: string;
  content: string;
  timestamp: string;
  likes?: number;
  userLiked?: boolean;
}

interface CommentsProps {
  comments: Comment[];
  caption?: string;
  username: string;
  timestamp: string;
}

const Comments = ({ comments: initialComments, caption, username, timestamp }: CommentsProps) => {
  const [comments, setComments] = useState(initialComments);

  const toggleLike = (index: number, isLiked: boolean) => {
    setComments(prevComments => prevComments.map((comment, i) => {
      if (i === index) {
        return {
          ...comment,
          userLiked: isLiked,
          likes: (comment.likes || 0) + (isLiked ? 1 : -1)
        };
      }
      return comment;
    }));
  };

  return (
    <div className="px-4 space-y-4">
      {caption && (
        <p className="text-sm">
          <Link href={`/${username}`} className="font-semibold no-artistic-style">
            {username}
          </Link>{' '}
          {caption}
        </p>
      )}
      
      {comments.map((comment, index) => (
        <div key={index} className="flex justify-between items-start">
          <p className="text-sm flex-1">
            <Link href={`/${comment.username}`} className="font-semibold no-artistic-style">
              {comment.username}
            </Link>{' '}
            {comment.content}
          </p>
          <div className="ml-2 flex-shrink-0">
            <HeartButton
              size="sm"
              initialIsLiked={comment.userLiked}
              onToggle={(isLiked) => toggleLike(index, isLiked)}
            />
          </div>
        </div>
      ))}
      
      <div className="text-xs uppercase text-gray-500 py-2">
        {timestamp}
      </div>
      
      <div className="border-t py-3 flex items-center space-x-2">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none outline-none text-sm"
        />
        <button className="text-blue-500 font-semibold text-sm disabled:opacity-50">
          Post
        </button>
      </div>
    </div>
  );
};

export default Comments;
