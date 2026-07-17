"use client";

import { motion } from 'framer-motion';

export default function TextReveal({ text, as: Tag = 'span', className = '', delay = 0, stagger = 0.045, once = true }) {
  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word = {
    hidden: { opacity: 0, y: '0.4em', filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: '0em',
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-10% 0px -10% 0px' }}
        variants={container}
        className="inline"
      >
        {words.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
