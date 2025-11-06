"use client"; // 👈 Important: allows interactivity (e.g., highlighting active link)

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/landing" },
    { name: "About", href: "/landing/about" },
    { name: "Contact", href: "/landing/contact" },
    { name: "Docs", href: "/landing/documentation" },
    { name: "Meet the Dev", href: "/landing/meetDev" },
    { name: "Login", href: "/login" },
    { name: "Sign Up", href: "/signup" },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/landing">Tavra AI</Link>
      </div>

      {/* Links */}
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-500"
            } transition`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
