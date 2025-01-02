'use client'

import { use } from 'react';
import Image from 'next/image';
import { Suspense } from 'react';
import ImageGrid from '@/components/instagram/ImageGrid';
import Sidebar from '@/components/instagram/Sidebar';

// This would normally come from an API or database
const getUserData = (userid: string) => ({
  userid,
  username: userid,
  name: 'Zen Zen',
  bio: 'Building cool stuff ✨',
  profileImage: '/0_0.webp',
  postsCount: 5,
  followersCount: 1337,
  followingCount: 42,
  posts: Array.from({ length: 5 }, (_, i) => ({
    src: `/${i + 1}.png`,
    alt: `Post ${i + 1}`,
    href: `/instagram/post/${i + 1}`,
  }))
});

export default function UserProfilePage({ params }: { params: Promise<{ userid: string }> }) {
  const { userid } = use(params);
  const userData = getUserData(userid);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar position="left" />
      <main className="flex-1 lg:ml-16">
        {/* Profile Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-12 mb-8">
            {/* Fun profile image shape */}
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex-shrink-0 mx-auto sm:mx-0 mb-6 sm:mb-0">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
              >
                <defs>
                  <clipPath id="funShape">
                    <path d="
                      M 15,50 
                      C 15,25 25,15 50,15
                      C 75,15 85,25 85,50
                      C 85,75 75,85 50,85
                      C 25,85 15,75 15,50
                      Z
                    " />
                  </clipPath>
                </defs>
                <foreignObject
                  width="100"
                  height="100"
                  clipPath="url(#funShape)"
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={userData.profileImage}
                      alt={userData.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                </foreignObject>
              </svg>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4">
                <h1 className="text-xl font-light">{userData.username}</h1>
                <button className="px-4 py-1.5 bg-gray-100 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors">
                  Edit profile
                </button>
              </div>
              <div className="flex justify-center sm:justify-start gap-6 sm:gap-10 mb-4">
                <span className="text-base"><strong>{userData.postsCount}</strong> posts</span>
                <span className="text-base"><strong>{userData.followersCount}</strong> followers</span>
                <span className="text-base"><strong>{userData.followingCount}</strong> following</span>
              </div>
              <div>
                <div className="font-semibold">{userData.name}</div>
                <div className="whitespace-pre-wrap text-sm">{userData.bio}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid - Full Width with consistent fluid margin */}
        <div className="px-1 sm:px-[3%] md:px-[6%]">
          <Suspense fallback={<div>Loading posts...</div>}>
            <ImageGrid images={userData.posts} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}