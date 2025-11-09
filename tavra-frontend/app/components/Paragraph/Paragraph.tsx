import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './Paragraph.module.scss';

export default function Paragraph() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  return (
    <motion.p 
      ref={container}         
      className={styles.paragraph}
      style={{opacity: scrollYProgress}}
    >
      Your best mentor to learn any programming language of your choice, helping you grow from beginner to expert through interactive guidance and AI-powered learning.
    </motion.p>
  )
}