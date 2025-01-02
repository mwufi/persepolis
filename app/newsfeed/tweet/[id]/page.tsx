import { ThreeColumnLayout } from '@/components/newsfeed/ThreeColumnLayout';
import { Tweet } from '@/components/newsfeed/Tweet';
import { News } from '@/components/newsfeed/News';
import { Searchbar } from '@/components/newsfeed/Searchbar';

// Mock data - in a real app, this would come from an API based on the tweet ID
const mockTweet = {
  author: {
    name: "Vitalik Buterin",
    avatar: "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg",
    handle: "@VitalikButerin"
  },
  content: "Layer 2 rollups are the future of Ethereum scaling. The ecosystem is growing rapidly and I'm excited to see what's next. Here's a deeper dive into why L2s are crucial for Ethereum's scalability:\n\n1. Increased Transaction Throughput\nL2s can process thousands of transactions per second while inheriting Ethereum's security.\n\n2. Lower Gas Fees\nUsers can enjoy significantly reduced transaction costs compared to L1.\n\n3. Enhanced User Experience\nFaster confirmations and lower fees mean better UX for dApps and users.\n\n4. Ecosystem Growth\nWe're seeing incredible innovation in the L2 space with solutions like @Optimism, @Arbitrum, and more.",
  timestamp: "2 hours ago",
  metrics: {
    likes: 5243,
    retweets: 1234,
    replies: 432
  },
  images: [
    "/1.png",
    "/2.png"
  ],
  replies: [
    {
      author: {
        name: "ETH Builder",
        avatar: "https://example.com/avatar1.jpg",
        handle: "@ethbuilder"
      },
      content: "Great thread! How do you see ZK rollups fitting into this picture?",
      timestamp: "1 hour ago",
      metrics: {
        likes: 234,
        retweets: 23,
        replies: 12
      }
    }
  ]
};

const mockNews = [
  {
    id: "1",
    title: "Ethereum L2s reach new TVL milestone",
    source: "CryptoNews",
    timestamp: "1 hour ago",
    url: "#"
  },
  {
    id: "2",
    title: "New scaling solution announces mainnet launch",
    source: "BlockchainDaily",
    timestamp: "2 hours ago",
    url: "#"
  }
];

export default function TweetPage({ params }: { params: { id: string } }) {
  return (
    <ThreeColumnLayout
      mainContent={
        <div className="px-4 xl:px-10 py-5">
          <div className="max-w-3xl mx-auto">
            <Tweet 
              {...mockTweet} 
              isFullView 
              className="border rounded-xl p-6 bg-card"
            />
            
            <div className="mt-6 space-y-4">
              <h2 className="text-lg font-semibold">Replies</h2>
              {mockTweet.replies?.map((reply, index) => (
                <Tweet 
                  key={index} 
                  {...reply}
                  className="border-b last:border-b-0 pb-4"
                />
              ))}
            </div>
          </div>
        </div>
      }
      rightSidebar={
        <div className="p-5 flex flex-col h-full">
          <Searchbar className="mb-4" />
          <div className="bg-secondary/50 rounded-xl p-4">
            <News items={mockNews} />
          </div>
        </div>
      }
    />
  );
}
