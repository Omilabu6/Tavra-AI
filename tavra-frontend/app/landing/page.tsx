"use client";
import React from 'react'
import Image from 'next/image' 
import { Parallax, ParallaxLayer } from  "@react-spring/parallax";
import LearnFaster from '../components/LearnFaster';
import Paragraph from '../components/Paragraph/Paragraph';
import Features from '../components/Features/Features';
import Discover from '../components/Discover';
import Future from '../components/Future';


const Homepage = () => {
  return (
    <div>
      <Parallax pages={3}  className='top-0 z-5 right-0 hide-scrollbar'>
          <div className='h-[150vh] background text-[#fde7cc]'>
            <div className='pt-40 px-10'>
              <ParallaxLayer offset={0} speed={0.5}>
              <h1 className='text-[8em] px-15 translate-y-25 BigFont'>MEET TAVRA AI</h1>
              </ParallaxLayer>
              <div className="perspective">
                <div className='phoneContainer'>
                  <Image 
                    src="/phone.svg" 
                    alt="Hero Image" 
                    className="phone-image"
                    width={340}
                    height={400}
                  />
                  <div className='phoneShadow'></div>
                </div>
              </div>
              <ParallaxLayer offset={0} speed={0.5}>
              <h2 className='absolute top-[50%] right-5 w-[30%]  text-lg'>Your AI Partner for the Future designed to revolutionize how you learn, build, and grow in tech. Tavra AI blends human creativity with artificial intelligence to give you a mentor that understands your goals, guides your journey, and helps you reach your full potential.,mn</h2>
              </ParallaxLayer>
                <div className='flex  justify-between  aligh-end text-xl px-10 '>
                  <h1 className='  px-5'>Scroll down to discover more</h1>
                  <div className='  right-4'>
                  <Image 
                      src="/arrowDown.svg" 
                      alt="Arrow Down" 
                      width={44}
                      height={44}
                      className='animate-bounce'
                    />
                  </div>
                 </div>
            </div>
           
          </div>
       
      </Parallax>
      <div>
        <LearnFaster />
      </div>
      <div className='bg-[#fde7cc] py-30'>
       <Paragraph />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Discover />
      </div>
      <div>
        <Future />
      </div>
    </div>
  )
}

export default Homepage