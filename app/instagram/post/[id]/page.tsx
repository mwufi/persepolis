import Image from 'next/image';
import PostHeader from '@/components/PostHeader';
import PostActions from '@/components/PostActions';
import Comments from '@/components/Comments';

// This would normally come from an API or database
const getPostData = (id: string) => ({
  id,
  username: 'almostzenbut_no',
  userImage: '/profile.jpg',
  image: id === '1' ? '/stable.png' : '/sundial.png',
  caption: 'This is a sample caption for the post. #awesome #coding',
  likes: 42,
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

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPostData(params.id);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
      <PostHeader
        username={post.username}
        userImage={post.userImage}
      />
      
      <div className="relative aspect-square">
        <Image
          src={post.image}
          alt={`Post by ${post.username}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <PostActions
        likes={post.likes}
        isLiked={false}
        isSaved={false}
      />
      
      <Comments
        comments={post.comments}
        caption={post.caption}
        username={post.username}
        timestamp={post.timestamp}
      />
    </div>
  );
}
