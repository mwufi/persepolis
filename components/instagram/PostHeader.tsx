import { User } from 'lucide-react';
import Link from 'next/link';

interface PostHeaderProps {
  username: string;
  userImage?: string;
  location?: string;
}

const PostHeader = ({ username, userImage, location }: PostHeaderProps) => {
  return (
    <div className="flex items-center p-4 border-b">
      <div className="flex items-center flex-1">
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {userImage ? (
            <img src={userImage} alt={username} className="h-full w-full object-cover" />
          ) : (
            <User className="h-5 w-5 text-gray-500" />
          )}
        </div>
        <div className="ml-3">
          <Link
            href={`/u/${username}`}
            className="flex items-center hover:opacity-90 transition-opacity font-semibold text-sm no-artistic-style"
          >
            {username}
          </Link>
          {location && (
            <div className="text-xs text-gray-500">{location}</div>
          )}
        </div>
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </button>
    </div>
  );
};

export default PostHeader;
