import { Home, Newspaper, Compass, Radio, Hash, Gift, User, Languages, Download, Sun } from 'lucide-react';
import { ThreeColumnLayout } from '@/components/newsfeed/ThreeColumnLayout';
import { Sidebar } from '@/components/newsfeed/Sidebar';
import { SidebarItem } from '@/components/newsfeed/SidebarItem';
import { Article } from '@/components/newsfeed/Article';
import { Tweet } from '@/components/newsfeed/Tweet';
import { News } from '@/components/newsfeed/News';
import { Searchbar } from '@/components/newsfeed/Searchbar';

const mockArticle = {
  title: "Kekius Maximus Era Ends as Elon Musk's Name Change on X Hits Crypto Market",
  content: `American billionaire and Tesla CEO Elon Musk has reverted to his original name on the social media platform X after briefly changing it to "Kekius Maximus" on December 31.

This name change to Kekius Maximus sparked an immediate surge in the value of similarly themed meme coins. However, it seems these meme coins are now retracing as Musk switches his X-handle name once again.`,
  author: {
    name: "BeInCrypto",
    avatar: "https://static.fwimg.io/img/user/7024bd1650e88fecd407590437ebc50dae75497d",
    timestamp: "12 hours ago"
  },
  image: {
    url: "https://static.fwimg.io/img/feed/8548b53d5001afd0b28894b198823b89.jpg",
    alt: "Froog-themed Meme Coins Plunge After Musk Reverts to Original Name on X"
  },
  tickers: [
    { symbol: "KEKIUS", change: -57.76 }
  ],
  source: {
    name: "BeInCrypto",
    url: "https://beincrypto.com"
  }
};

const mockNews = [
  {
    id: "1",
    title: "44.32 BTC flowed into the Grayscale Bitcoin Mini Trust Fund, worth $4.31 million",
    source: "ODAILY",
    timestamp: "27 minutes ago",
    url: "#"
  },
  {
    id: "2",
    title: "Galaxy Digital transfers 100 million USDC to an unknown address",
    source: "ODAILY",
    timestamp: "an hour ago",
    url: "#"
  },
  {
    id: "3",
    title: "The founder of DeFiance Capital said that the address that previously transferred 500,000 VIRTUAL did not belong to the institution",
    source: "ODAILY and 5 more media reports",
    timestamp: "an hour ago",
    url: "#"
  }
];

const mockTweets = [
  {
    author: {
      name: "Vitalik Buterin",
      avatar: "https://pbs.twimg.com/profile_images/977496875887558661/L86xyLF4_400x400.jpg",
      handle: "@VitalikButerin"
    },
    content: "Layer 2 rollups are the future of Ethereum scaling. The ecosystem is growing rapidly and I'm excited to see what's next.",
    timestamp: "2 hours ago",
    metrics: {
      likes: 5243,
      retweets: 1234,
      replies: 432
    }
  },
  {
    author: {
      name: "CZ Binance",
      avatar: "https://pbs.twimg.com/profile_images/1690836164017348608/r4i8LF4E_400x400.jpg",
      handle: "@cz_binance"
    },
    content: "Bitcoin just hit a new 2024 high! The future is bright. #BTC #Crypto",
    timestamp: "4 hours ago",
    metrics: {
      likes: 3422,
      retweets: 890,
      replies: 234
    }
  }
];

export default function NewsfeedPage() {
  return (
    <ThreeColumnLayout
      leftSidebar={
        <Sidebar>
          {/* Logo */}
          <div className="px-2 mb-6">
            <a href="/en" className="block">
              <img
                src="/_next/static/media/logo-icon.c29543b1.svg"
                alt="Logo"
                className="w-[45px] h-[20px]"
              />
            </a>
          </div>

          {/* Navigation Items */}
          <SidebarItem icon={<Home className="h-full w-full" />} label="Home" href="/en" />
          <SidebarItem icon={<Newspaper className="h-full w-full" />} label="News" href="/en/news" />
          <SidebarItem icon={<Compass className="h-full w-full" />} label="Market" href="/en/explore" />
          <SidebarItem icon={<Radio className="h-full w-full" />} label="Channel" href="/en/channelList" />
          <SidebarItem icon={<Hash className="h-full w-full" />} label="Topic" href="/en/topic" />
          <SidebarItem icon={<Gift className="h-full w-full" />} label="Feature" href="/en/featureList" />
          <SidebarItem icon={<Gift className="h-full w-full" />} label="Rewards Center" href="/en/benefitCenter" />
          <SidebarItem icon={<User className="h-full w-full" />} label="Account" href="/en/account" />
          <SidebarItem icon={<Languages className="h-full w-full" />} label="Language" />
          <SidebarItem icon={<Sun className="h-full w-full" />} label="Light" />
          <SidebarItem icon={<Download className="h-full w-full" />} label="Download App" />
        </Sidebar>
      }
      mainContent={
        <div className="px-4 xl:px-10 py-5 space-y-6">
          <Article {...mockArticle} />
          <div className="border-t border-line pt-6">
            <h2 className="text-lg font-semibold mb-4">Related Tweets</h2>
            <div className="space-y-4">
              {mockTweets.map((tweet, index) => (
                <Tweet key={index} {...tweet} />
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