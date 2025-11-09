import React from 'react'
import Image from 'next/image'

const LearnFaster = () => {
  return (
    <div className=' pt-40 gap-5 h-[200vh] flex flex-col items-center bg-[#fde7cc]'>
      <div className='flex justify-center items-center gap-10'>
          <div>
            <Image 
              src="/flash.svg" 
              alt="Learn Faster" 
              width={80}
              height={80}
            />
          </div>
          <h1 className='text-6xl text-center w-[45%]'>Learn faster, build smarter, on any device</h1>
          <div className=''>
            <Image 
              src="/flash.svg" 
              alt="Learn Faster" 
              width={80}
              height={80}
            />
          </div>
        </div>
        <h2 className='text-2xl text-center w-[40%]'>Tavra AI is your personal tech mentor that's always ready to guide, teach, and challenge you. Learn by chatting naturally with AI that understands your goals, designs your roadmap, and helps you grow through real projects, quizzes, and hands-on practice.</h2>
        <div className='border-2 text-2xl py-6 px-15 rounded-full'>
            <span>Try Tavra Now</span>
            <Image 
              src="/arrowRight.svg" 
              alt="Arrow Right" 
              width={40}
              height={40}
              className='inline-block ml-4'
            />
        </div>
        <div className="w-[90%] mt-10  rounded-2xl h-screen overflow-hidden relative">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
    </div>
  )
}

export default LearnFaster