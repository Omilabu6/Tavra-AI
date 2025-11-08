import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div >
          <h1 className='BigFont text-8xl'>TAVRA AI</h1>
          <h2 className='text-2xl my-6 w-[55%]'>Start your journey with Tavra AI today. Because the future of learning isn’t about watching it’s about doing, asking, and growing with a mentor who never stops believing in your potential.</h2>
          <div className='border-black border-2 px-10 py-10 mt-10 w-100 rounded-full text-2xl flex justify-center items-center cursor-pointer'>
            <span>Join the Waitlist </span>
            <Image 
              src="/arrowRight.svg" 
              alt="Arrow Right" 
              width={24}
              height={24}
              className='ml-5'
            />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className="flex items-center gap-10 px-5 "><span className="text-xl">01</span><h1 className="text-5xl px-6"><Link href="/landing">Home</Link></h1></div>
          <div className="flex items-center gap-10 px-5"><span className="text-xl">02</span><h1 className="text-5xl px-6"><Link href="/landing/about">About</Link></h1></div>
          <div className="flex items-center gap-10 px-5 "><span className="text-xl">03</span><h1 className="text-5xl px-6"><Link href="/landing/contact">Contact</Link></h1></div>
          <div className="flex items-center gap-10 px-5 "><span className="text-xl">04</span><h1 className="text-5xl px-6"><Link href="/landing/documentation">Documentation</Link></h1></div>
          <div className="flex items-center gap-10 px-5 "><span className="text-xl">05</span><h1 className="text-5xl px-6"><Link href="/landing/meetDev">Meet Dev</Link></h1></div>
        </div>
      </div>
      <div className='text-xl flex gap-10  justify-between items-center px-10 '>
        <div className='flex-col flex'>
          <span>+234 8133909844</span>
          <span>tavra@gmail.com</span>
        </div>
        <span>© 2025 Tavra AI. All rights reserved.</span>
      
      </div>
    </div>
  )
}

export default Footer