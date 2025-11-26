"use client";
import React, { use } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { usePathname } from "next/navigation";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 const pathname = usePathname() || "/";



 const variant = 
 pathname ==="/landing"|| pathname==="/landing/" ? "home":
 pathname.startsWith("/landing/about") ? "about":
 pathname.startsWith("/landing/contact") ? "contact":
 pathname.startsWith("/landing/documentation") ? "documentation":
 pathname.startsWith("/landing/meetDev") ? "meetDev":
 "default";


  return (
    <section >
      <Navbar variant={variant} />
       {children}
      <div className="sticky bottom-0 -z-1">
       <Footer />
      </div>
    </section>
  );
}
