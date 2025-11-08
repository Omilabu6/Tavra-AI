"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
 const [isActive, setIsActive] = useState(false);

  return (
    <div >
      <div className={styles.navbar}>
        <h1 className="text-4xl BigFont font-semibold text-[#fde7cc]"><Link href="/landing">Tavra</Link></h1>
        <div className="flex justify-center item-center "> <h1 className=" mt-4 text-[#fde7cc] text-2xl font-bold">MENUE</h1>
          <div className={styles.button} onClick={()=>(setIsActive(!isActive))}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${isActive ? styles.backgroundOverlayActive : styles.backgroundOverlayInactive}`}>
        <nav className={`${styles.navlinks} ${isActive ? styles.navlinksActive : styles.navlinksInactive}`}>
          <div className="flex items-center gap-10 px-5 "><span className="text-lg">01</span><h1 className="text-6xl px-6"><Link href="/landing">Home</Link></h1></div>
          <div className="flex items-center gap-10 px-5"><span className="text-lg">02</span><h1 className="text-6xl px-6"><Link href="/landing/about">About</Link></h1></div>
          <div className="flex items-center gap-10 px-5 "><span className="text-lg">03</span><h1 className="text-6xl px-6"><Link href="/landing/contact">Contact</Link></h1></div>
          <div className="flex items-center gap-10 px-5 "><span className="text-lg">04</span><h1 className="text-6xl px-6"><Link href="/landing/documentation">Documentation</Link></h1></div>
          <div className="flex items-center gap-10 px-5 "><span className="text-lg">05</span><h1 className="text-6xl px-6"><Link href="/landing/meetDev">Meet Dev</Link></h1></div>
        </nav>
      </div>
    </div>
  );
}
