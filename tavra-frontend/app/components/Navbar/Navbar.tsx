"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";

export default function Navbar({variant}: {variant: string}) {
 const [isActive, setIsActive] = useState(false);
 const[scrolled, setScrolled] = useState(false)
 const [scrollDirection, setScrollDirection] = useState("up");


 useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    setScrolled(window.scrollY > 170);


    if (window.scrollY > lastScrollY) {
      setScrollDirection("down"); 
    } else {
      setScrollDirection("up");   
    }

    lastScrollY = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div  >
      <div className={`${styles.navbar} 
          ${variant === "home"
            ? scrolled
              ? "bg-white text-black shadow-lg"
              : "bg-transparent text-[#fde7cc]"
            : variant === "about"
            ? "text-black"
            : "text-[#fde7cc]"
          }
          transition-transform duration-500
          ${variant === "home" && scrolled
            ? scrollDirection === "down"
              ? "-translate-y-full"
              : "translate-y-0"
            : "translate-y-0"
          }
        `}>
        <h1 className="text-4xl BigFont font-semibold "><Link href="/landing">Tavra</Link></h1>
        <div className="flex justify-center item-center "> <h1 onClick={()=>(setIsActive(!isActive))} className=" mt-4 cursor-pointer text-2xl font-bold">MENUE</h1>
          <div className={`${styles.button} `} onClick={()=>(setIsActive(!isActive))}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}
              ${variant==="home" ? styles.burgerHome: 
              variant==="about" ?styles.burgerAbout : 
               variant==="contact"? styles.burgerContact:
               styles.burgerDefault  
            }`}>
            </div>
          </div>
        </div>
      </div>
      <div onClick={()=>(setIsActive(!isActive))} className={` ${isActive ? styles.backgroundOverlayActive : styles.backgroundOverlayInactive}`}>
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
