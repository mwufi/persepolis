import Link from 'next/link';
import { clsx } from 'clsx';
import {
  Home,
  Search,
  Compass,
  Video,
  MessageCircle,
  Heart,
  PlusCircle,
  User,
  Menu
} from 'lucide-react';

interface SidebarProps {
  position?: 'left' | 'right';
}

const Sidebar = ({ position = 'left' }: SidebarProps) => {
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
    <div
      className={clsx(
        "group fixed hidden lg:block h-full w-16 hover:w-64 bg-white border-gray-200 transition-all duration-300 ease-in-out overflow-hidden z-50",
        position === 'left' ? 'left-0 border-r' : 'right-0 border-l'
      )}
    >
      <div className="flex h-full flex-col justify-between p-3">
        <div className="space-y-1">
          <div className={clsx(
            "flex items-center mb-4 px-2 py-3",
            position === 'right' && 'flex-row-reverse'
          )}>
            {/* can insert icon here */}
            <span className={clsx(
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap",
              position === 'left' ? 'ml-4' : 'mr-4'
            )}>
              Instagram
            </span>
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center px-2 py-3 rounded-lg hover:bg-gray-100 no-artistic-style",
                position === 'right' && 'flex-row-reverse'
              )}
            >
              <item.icon className="h-6 w-6 flex-shrink-0" />
              <span className={clsx(
                "opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap",
                position === 'left' ? 'ml-4' : 'mr-4'
              )}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        <div>
          <Link
            href="#"
            className={clsx(
              "flex items-center px-2 py-3 rounded-lg hover:bg-gray-100 no-artistic-style",
              position === 'right' && 'flex-row-reverse'
            )}
          >
            <Menu className="h-6 w-6 flex-shrink-0" />
            <span className={clsx(
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap",
              position === 'left' ? 'ml-4' : 'mr-4'
            )}>
              More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
