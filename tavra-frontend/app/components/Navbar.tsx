import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div>
        <h1>Tavra</h1>
        <span>=</span>
      </div>
      <nav>
        <Link href="/landing">Home</Link>
        <Link href="/landing/about">About</Link>
        <Link href="/landing/contact">Contact</Link>
        <Link href="/landing/documentation">Documentation</Link>
        <Link href="/landing/meetDev">Meet Dev</Link>
      </nav>
    </div>
  );
}
