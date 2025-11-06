'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Documentation', href: '/documentation' },
  ];

  return (
    <nav className="flex gap-6 p-4 shadow-md bg-white sticky top-0">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href ? 'text-blue-600 font-bold' : 'text-gray-700'
          } hover:text-blue-500`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
