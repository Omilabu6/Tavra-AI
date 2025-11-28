"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FAQ from "@/app/landing/about/FAQ";


export default function About() {
  return (
    <section className="bg-[#fde7cc] py-20 px-10 ">
      <div className=" mb-16 h-screen">
        <h1 className="text-[7.5rem] pt-10 font-bold">WE ARE ALL ABOUT EDUCATION</h1>
        <div className='flex mt-20 justify-between  aligh-end text-xl px-1 '>
          <h1 className='font-semibold  px-5'>Scroll down to discover more</h1>
          <div className='  right-4'>
          <Image 
              src="/arrowRight.svg" 
              alt="Arrow Down" 
              width={44}
              height={44}
              className=' rotate-90'
            />
          </div>
        </div>
      </div>

      <div className="">
          <div className="mb-30">
            <h2 className="text-2xl text-center font-semibold text-gray-900 mb-1">Our Journey</h2>
            <div className=" justify-center flex items-center"><span className="h-1 w-17 rounded-2xl bg-black"></span></div>
          </div>
          <div className=" max-w-6xl mb-60 mx-auto">
             <p className="text-xl w-[25em]">Our journey started from a shared experience: we watched friends and classmates struggle through scattered tutorials, confusing docs, and no one to ask when they were stuck. We wanted something different a learning companion that listens, adapts, and teaches through real conversation.</p>
             <div className=" flex justify-end mb-20">
               <div className="border-2 w-[450px] h-[400px] rounded-2xl"></div>
             </div>
              <p className="text-xl w-[25em]">So we built Tavra. It began as a small experiment and grew into an AI mentor designed to make learning intuitive, personal, and joyful. Every feature we add comes from that first moment of wanting to make education feel human again.</p>
             <div className=" flex justify-end ">
               <div className="border-2 w-[450px] h-[400px] rounded-2xl"></div>
             </div>
          </div>
          <div className=" ">
            <Scale />
          </div>
          <div>
            <h3>The features we wan to build </h3>
            <h2>Tavra is not just any app , it's the new anthem.It's more than a platform</h2>
          </div>
          <div className="h-100vh">

          </div>
          <div>
            <FAQ />
          </div>
      </div>
    </section>
  );
}




const Scale = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [2, 2.5]);

  return (
    <div ref={container} className="container">
      <div className="sticky_">
        <div className="element flex justify-center items-center pl-45">
          <motion.div style={{ scale: scale4 }} className="videoContainer">
            <div className="h-[50vh]  flex flex-col Black-bg rounded-2xl justify-center items-center text-center  text-[#fde7cc]  w-[500px] border-2">
               <h1 className="text-2xl w-[300px] ">"OUR MISSION IS TO EMPOWER MILLONS OF LEGACIS"</h1>
               <h2 className="text-xs translate-y-10">We want to build real world tech skills that actually help people grow</h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};