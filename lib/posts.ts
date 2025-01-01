export interface Comment {
  username: string
  content: string
  timestamp?: string
  likes?: number
  userLiked?: boolean
}

export interface Post {
  id: string
  username: string
  userImage: string
  image: string
  caption: string
  likes: number
  isLiked: boolean
  isSaved: boolean
  timestamp: string
  comments: Comment[]
}

// Mock data store - would be replaced with real data fetching
export const mockPosts: Record<string, Post> = {
  '1': {
    id: '1',
    username: 'almostzenbut_no',
    userImage: '/0_0.webp',
    image: '/stable.png',
    caption: 'Building something cool ✨',
    likes: 1337,
    isLiked: false,
    isSaved: false,
    timestamp: 'December 31, 2023',
    comments: [
      { username: 'friend1', content: 'This is amazing! 🔥', timestamp: '2h', likes: 3, userLiked: true },
      { username: 'friend2', content: 'Love the composition!', timestamp: '1h', likes: 2, userLiked: false },
      { username: 'friend3', content: 'Beautiful shot 📸', timestamp: '30m', likes: 1, userLiked: false },
    ],
  },
  '2': {
    id: '2',
    username: 'almostzenbut_no',
    userImage: '/0_0.webp',
    image: '/sundial.png',
    caption: 'Making progress 🚀',
    likes: 42,
    isLiked: false,
    isSaved: false,
    timestamp: 'December 31, 2023',
    comments: [
      { username: 'friend4', content: 'Incredible work!', timestamp: '1h', likes: 2, userLiked: false },
      { username: 'friend5', content: 'The lighting is perfect ✨', timestamp: '30m', likes: 1, userLiked: true },
    ],
  },
  '3': {
    id: '3',
    username: 'almostzenbut_no',
    userImage: '/0_0.webp',
    image: '/3.png',
    caption: 'Another day, another feature ⚡',
    likes: 89,
    isLiked: false,
    isSaved: false,
    timestamp: 'December 31, 2023',
    comments: [
      { username: 'friend6', content: 'This is stunning!', timestamp: '3h', likes: 4, userLiked: false },
      { username: 'friend7', content: 'Great capture 👏', timestamp: '2h', likes: 2, userLiked: true },
    ],
  },
}

export function getPostData(id: string): Post | null {
  return mockPosts[id] || null
}
