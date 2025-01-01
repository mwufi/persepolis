'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HomeLink() {
  const pathname = usePathname();
  
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="mt-8 text-center">
      <Link href="/" className="text-blue-600 hover:text-blue-800">
        back to homepage
      </Link>
    </div>
  );
}
