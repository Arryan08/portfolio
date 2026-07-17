"use client";

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';
import AnimatedCounter from './AnimatedCounter';

const STATS = [
  { value: '3', label: 'Roles across engineering & business' },
  { value: '10+', label: 'Recurring ops gaps closed' },
  { value: '₹10L+/mo', label: 'Revenue scaled by mentees' },
  { value: '20+', label: 'Client requirements translated' },
];

function ParallaxField() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mx.set((e.clientX / innerWidth - 0.5) * 2);
      my.set((e.clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  const blobA = { x: useTransform(sx, (v) => v * -30), y: useTransform(sy, (v) => v * -20) };
  const blobB = { x: useTransform(sx, (v) => v * 24), y: useTransform(sy, (v) => v * 18) };
  const ring = { x: useTransform(sx, (v) => v * 40), y: useTransform(sy, (v) => v * -26) };
  const square = { x: useTransform(sx, (v) => v * -46), y: useTransform(sy, (v) => v * 30) };

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-backdrop" />

      <motion.div
        style={{ x: blobA.x, y: blobA.y }}
        className="absolute -top-24 left-[8%] h-[26rem] w-[26rem] rounded-full bg-accent/[0.08] blur-3xl"
      />
      <motion.div
        style={{ x: blobB.x, y: blobB.y }}
        className="absolute top-1/3 right-[6%] h-[22rem] w-[22rem] rounded-full bg-success/[0.07] blur-3xl"
      />

      <motion.div
        style={{ x: ring.x, y: ring.y }}
        className="absolute top-28 right-[18%] h-24 w-24 rounded-full border border-ink/10 hidden md:block"
      />
      <motion.div
        style={{ x: square.x, y: square.y }}
        className="absolute bottom-24 left-[14%] h-16 w-16 rotate-45 border border-accent/20 hidden md:block"
      />
      <motion.div
        style={{ x: ring.x, y: square.y }}
        className="absolute bottom-40 right-[28%] h-3 w-3 rounded-full bg-accent/40 hidden md:block"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 px-6 min-h-[92vh] flex flex-col justify-center overflow-hidden">
      <ParallaxField />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6"
        >
          Business Analyst · Founder&rsquo;s Office
        </motion.p>

        <TextReveal
          as="h1"
          text="Execution-Driven Business Analyst Building Products, Systems & Scalable Operations"
          delay={1.65}
          stagger={0.035}
          className="font-display max-w-4xl text-4xl md:text-6xl lg:text-[4.2rem] font-semibold tracking-tight leading-[1.05] text-ink text-balance"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed"
        >
          Working directly with founders to transform ideas into scalable products, automate operations, build internal tools, and drive business growth through data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton
            as="a"
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-white font-medium transition-colors hover:bg-accent"
          >
            Hire Me <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-ink font-medium transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-accent-soft/40"
          >
            <FileText size={18} /> View Resume
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-border-soft pt-10"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl font-semibold text-ink">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-1.5 text-sm text-ink-faint leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
