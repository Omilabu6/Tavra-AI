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

      <div className="space-y-16 text-left">
        {/* Vision */}
        <div>
          <h2 className="text-2xl text-center font-semibold text-gray-900 mb-3">Our Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            To make <span className="font-semibold">learning technology as natural as having a conversation.</span> 
            We believe everyone deserves a personal mentor who understands their pace, adapts to their goals, 
            and helps them grow with confidence.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to <span className="font-semibold">empower millions of learners</span> to build real-world 
            tech skills through AI-guided mentorship. Tavra combines artificial intelligence with human-like empathy — 
            offering personalized roadmaps, instant answers, and interactive challenges that make learning exciting, 
            not exhausting.
          </p>
        </div>

        {/* Why Tavra Exists */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Tavra Exists</h2>
          <p className="text-gray-700 leading-relaxed">
            Traditional learning can feel one-sided — you watch, read, and repeat. But when you get stuck, you’re alone.  
            Tavra changes that. Here, learning becomes a two-way conversation. You can ask questions anytime, 
            get clear explanations, and learn at your own rhythm — just like having a senior developer by your side 24/7.
          </p>
        </div>

        {/* The Future */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Future We’re Building</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tavra is more than a platform — it’s the future of education powered by intelligence and empathy.  
            We’re building a world where AI mentors help learners collaborate, speak, and grow together.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Voice-based Learning Mode</strong> — Talk to Tavra like a real instructor.</li>
            <li><strong>Community & Leaderboards</strong> — Learn with others and celebrate progress.</li>
            <li><strong>Smart Progress Analytics</strong> — See your growth and achievements in real-time.</li>
          </ul>
        </div>

        {/* Our Belief */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Belief</h2>
          <p className="text-gray-700 leading-relaxed">
            Learning should inspire, not overwhelm.  
            Tavra AI exists to prove that with the right mentor, <span className="font-semibold">anyone can learn, build, and thrive.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
