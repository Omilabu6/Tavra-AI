// pages/about.jsx

import React from "react";
import Image from "next/image";

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
          <div className=" max-w-6xl mx-auto">
             <p className="text-xl w-[25em]">Our journey started from a shared experience: we watched friends and classmates struggle through scattered tutorials, confusing docs, and no one to ask when they were stuck. We wanted something different a learning companion that listens, adapts, and teaches through real conversation.</p>
             <div className=" flex justify-end mb-20">
               <div className="border-2 w-[450px] h-[400px] rounded-2xl"></div>
             </div>
              <p className="text-xl w-[25em]">So we built Tavra. It began as a small experiment and grew into an AI mentor designed to make learning intuitive, personal, and joyful. Every feature we add comes from that first moment of wanting to make education feel human again.</p>
             <div className=" flex justify-end ">
               <div className="border-2 w-[450px] h-[400px] rounded-2xl"></div>
             </div>
          </div>
      </div>
    </section>
  );
}
