import Link from 'next/link';
import { 
  Home,
  Search,
  Compass,
  Video,
  MessageCircle,
  Heart,
  PlusCircle,
  User,
  Menu,
  Instagram
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Search', href: '#', icon: Search },
    { name: 'Explore', href: '/explore', icon: Compass },
    { name: 'Reels', href: '/reels', icon: Video },
    { name: 'Messages', href: '/direct/inbox', icon: MessageCircle },
    { name: 'Notifications', href: '#', icon: Heart },
    { name: 'Create', href: '#', icon: PlusCircle },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <div className="group fixed left-0 h-full w-16 hover:w-64 bg-white border-r border-gray-200 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="flex h-full flex-col justify-between p-3">
        <div className="space-y-1">
          <div className="flex items-center mb-4 px-2 py-3">
            <Instagram className="h-6 w-6 flex-shrink-0" />
            <span className="ml-4 text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Instagram
            </span>
          </div>
          
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-2 py-3 rounded-lg hover:bg-gray-100 no-artistic-style"
            >
              <item.icon className="h-6 w-6 flex-shrink-0" />
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div>
          <Link
            href="#"
            className="flex items-center px-2 py-3 rounded-lg hover:bg-gray-100 no-artistic-style"
          >
            <Menu className="h-6 w-6 flex-shrink-0" />
            <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
