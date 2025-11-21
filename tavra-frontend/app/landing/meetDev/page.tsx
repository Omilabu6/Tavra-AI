"use client";
import React from 'react'
import Image from 'next/image'
import TiltedCard from "@/app/components/TiltedCard"

const meetDev = () => {
  return (
    <div className='background text-[#fde7cc] p-50'>
      {/* Meet the Developers – The Team Behind Tavra AI
      💡 Intro Section

      Start with a short paragraph introducing your team and mission:

      At Tavra AI, we’re a passionate team of innovators shaping the future of tech learning.
      We believe education should be conversational, creative, and accessible — powered by AI and built with heart.
      Meet the minds turning that vision into reality.

      👩‍💻 Team Members Section

      Each team member should have:

      A photo or avatar

      Role & title

      A short but meaningful bio (about 3–4 sentences)

      Maybe a quote or “what they believe about tech or learning”

      Here’s the content you can use 👇

      🧠 Toirat – Founder & AI Engineer

      Toirat is the visionary behind Tavra AI.
      With a deep passion for artificial intelligence and education, she designed Tavra to bridge the gap between traditional learning and intelligent mentorship.
      Her goal is to make learning smarter, faster, and more personal through AI innovation.
      “AI shouldn’t replace human guidance — it should empower it.”

      ⚙️ Daniela – Co-founder & Backend Engineer

      Daniela brings Tavra’s intelligence to life through robust backend architecture.
      She ensures that every interaction with Tavra feels smooth, secure, and responsive.
      Passionate about system logic and scalability, she believes that clean code is the foundation of powerful innovation.
      “Every line of code should solve a problem, not create one.”

      🎨 Wuraola – Co-founder & Creative Frontend Engineer

      Wuraola transforms Tavra’s ideas into beautiful, interactive experiences.
      With a strong eye for design and detail, she crafts the visual identity and user interface that make Tavra come alive.
      Her creative approach bridges technology and emotion — making learning not just functional but inspiring.
      “Design is not what it looks like; it’s how it makes people feel.”

      🌍 Team Vision Section

      Together, we’re building more than a platform — we’re building the future of learning.
      A place where anyone, anywhere, can gain tech skills, ask questions freely, and grow at their own pace — guided by an AI that understands them.

      💬 Optional Ending Call-to-Action

      Want to collaborate, support our mission, or join the team?
      Reach out at hello@tavra.ai
      .
      Let’s shape the future — together.
      <div> */}
      <div className='flex flex-col mx-auto gap-10 justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-10 items-center align-middle'>
          <div className='flex justify-end items-end gap-3'>
            <div>
              <TiltedCard
                imageSrc={"/wura.webp"}
                altText="Oloyede Michael"
                captionText="Oloyede Michael"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text border-green-500 border-2 backdrop-blur-lg bg-black/60 rounded-2xl px-10">
                    Oloyede Michael
                  </p>
                }
              />
            </div>
            <div>
              <h1 className=' mt-4 text-xl font-bold'>Omilabu Wuraola</h1>
              <h2 className=' mt-2 text-sm italic'>Co-founder & Creative Frontend Engineer</h2>
           </div>
          </div>
          <div className='flex justify-end items-end gap-3'>
            <div>
              <TiltedCard
                imageSrc={"/wura.webp"}
                altText="Oloyede Michael"
                captionText="Oloyede Michael"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text border-green-500 border-2 backdrop-blur-lg bg-black/60 rounded-2xl px-10">
                    Oloyede Michael
                  </p>
                }
              />
            </div>
            <div>
              <h1 className=' mt-4 text-xl font-bold'>Omilabu Wuraola</h1>
              <h2 className=' mt-2 text-sm italic'>Co-founder & Creative Frontend Engineer</h2>
           </div>
          </div>
        </div>
        <div className=''>
         <div className='flex justify-end items-end gap-3'>
            <div>
              <TiltedCard
                imageSrc={"/wura.webp"}
                altText="Oloyede Michael"
                captionText="Oloyede Michael"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text border-green-500 border-2 backdrop-blur-lg bg-black/60 rounded-2xl px-10">
                    Oloyede Michael
                  </p>
                }
              />
            </div>
            <div>
              <h1 className=' mt-4 text-xl font-bold'>Omilabu Wuraola</h1>
              <h2 className=' mt-2 text-sm italic'>Co-founder & Creative Frontend Engineer</h2>
           </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default meetDev