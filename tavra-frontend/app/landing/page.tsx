import React from 'react'
import Image from 'next/image' 


const Homepage = () => {
  return (
    <div className='h-screen background text-[#fde7cc]'>
      <div className='pt-40 px-10'>
        <h1 className='text-[8em] BigFont'>MEET TAVRA AI</h1>
       <div className="perspective">
          <div className='phoneContainer'>
            <Image 
              src="/phone.svg" 
              alt="Hero Image" 
              className="phone-image"
              width={400}
              height={400}
            />
          </div>
        </div>
        <h2 className='absolute top-[50%] right-5 w-[30%]  text-lg'>Your AI Partner for the Future designed to revolutionize how you learn, build, and grow in tech. Tavra AI blends human creativity with artificial intelligence to give you a mentor that understands your goals, guides your journey, and helps you reach your full potential.”Learn faster, build smarter, on any device</h2>
        <div className='flex justify-between aligh-between text-lg'>
          <h1 className='absolute bottom-5 px-5'>Scroll down to discover more</h1>
          <div className='absolute bottom-5 right-4'>
            *arrow down image here
          </div>
        </div>
      </div>
      <div>
        that infite scroll section
      </div>
    </div>

  )
}

export default Homepage