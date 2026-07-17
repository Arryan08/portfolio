"use client";

import { motion } from 'framer-motion';
import { Award, Sun } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ITEMS = [
  {
    icon: Award,
    title: 'Delhi Police Hackathon',
    result: 'Top Ideas',
    body: 'Presented a solution for detecting social media scams and tracking malware activity, including fake ID networks — selected among the top ideas at the event.',
  },
  {
    icon: Sun,
    title: 'Smart India Hackathon',
    result: 'National Finalist',
    body: 'Engineered a non-electrical solar tracking system to improve solar panel energy efficiency — selected as one of the national finalists.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeader eyebrow="Achievements" title="Recognized under real constraints" />

      <div className="grid md:grid-cols-2 gap-6">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-start gap-5 rounded-2xl border border-border p-7 bg-paper hover:border-accent/40 hover:bg-accent-soft/30 hover:shadow-[0_12px_36px_-16px_rgba(11,95,255,0.3)] transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 200, damping: 14 }}
              className="shrink-0 h-14 w-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300"
            >
              <item.icon size={26} />
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-success-soft text-success text-[11px] font-medium">
                  {item.result}
                </span>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
