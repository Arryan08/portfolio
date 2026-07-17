"use client";

import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center';
  return (
    <div className={`mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <TextReveal
        as="h2"
        text={title}
        className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-ink text-balance"
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-lg text-ink-soft leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
