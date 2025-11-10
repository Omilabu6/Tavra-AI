import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const Future = () => {
  return (
    <div className='bg-[#fde7cc]'>
      <div>
        <Scale />
      </div>
      
    </div>
  )
}

export default Future

const Scale = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 1, 1])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [0, 0, 1, 0.3])
  const yPosition = useTransform(scrollYProgress, [0, 1], [100, 0])

  return (
    <div
     className=''
      ref={container}
      style={{
        height: '200vh',
        position: 'relative',
        display: 'flex',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'sticky',
          height: '100vh',
          width: '100vw',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Image Container */}
          <motion.div
            style={{
              scale: scale4,
              width: '100vw',
              height: '100vh',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="/future.jpg"
              alt="future"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                display: 'block',
                borderRadius:'50px',
              }}
            />
          </motion.div>

          {/* Text Overlay */}
          <motion.div
            style={{
              position: 'absolute',
              textAlign: 'center',
              opacity: textOpacity,
              y: yPosition,
              pointerEvents: 'none',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(4em, 7vw, 6em)',
                fontWeight: '700',
                color: '#fde7cc',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              }}
              className='BigFont'
            >
              The Future of Tavra
            </h1>
            <h2
              style={{
                fontSize: 'clamp(2em, 2vw, 1.3em)',
                marginBottom: '5.5em',
                fontWeight: '400',
                color: '#fde7cc',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                maxWidth: '50vw',
              }}
            >
              Tavra is evolving. Soon, you'll experience voice learning, peer challenges, and community leaderboards.
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  )
}