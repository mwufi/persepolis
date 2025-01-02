'use client'

import { MessageCircle, Send, Bookmark } from 'lucide-react';
import HeartButton from './HeartButton';

interface PostActionsProps {
  likes: number;
  onLike?: (isLiked: boolean) => void;
  onComment?: () => void;
  onShare?: () => void;
  onSave?: () => void;
  isLiked?: boolean;
  isSaved?: boolean;
}

const PostActions = ({
  likes,
  onLike,
  onComment,
  onShare,
  onSave,
  isLiked = false,
  isSaved = false,
}: PostActionsProps) => {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-2">
        <div className="flex space-x-4">
          <HeartButton
            size="md"
            initialIsLiked={isLiked}
            onToggle={onLike}
          />
          <button
            onClick={onComment}
            className="hover:text-gray-600 transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
          <button
            onClick={onShare}
            className="hover:text-gray-600 transition-colors"
          >
            <Send className="h-6 w-6" />
          </button>
        </div>
        <button
          onClick={onSave}
          className="hover:text-gray-600 transition-colors"
        >
          <Bookmark
            className={`h-6 w-6 ${isSaved ? 'fill-black' : ''}`}
          />
        </button>
      </div>
      <div className="font-semibold text-sm">
        {likes.toLocaleString()} likes
      </div>
    </div>
  );
};

export default PostActions;
