"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const STORY = [
  {
    tag: 'Engineering',
    title: 'Learning to think in systems',
    body: "I trained as an Electronics & Communication Engineer, which meant thinking in constraints, root causes, and failure modes before solutions. At Siemens, I translated PLC and HMI engineering requirements into business specifications — and noticed the translation itself was the interesting part.",
  },
  {
    tag: 'Business',
    title: 'Moving toward the decision, not the report',
    body: "At Ellipsol, I moved fully into business analysis — market feasibility, competitive benchmarking, demand analysis. I realized the highest-leverage work isn't producing another deck; it's building the evidence that makes a hard call obvious.",
  },
  {
    tag: 'Founder’s Office',
    title: 'Owning outcomes, not tasks',
    body: "At TransCurators, I stepped into the founder's office — the execution layer between vision and ground reality. Auditing operations, shipping internal tools, managing sales performance. Ownership here means treating someone else's problem as fully your own until it's solved.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="About"
        title="From engineering constraints to founder execution"
        description="I don't just analyze businesses — I build the systems that keep them from breaking, then get out of the way."
      />

      <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border-soft" />
        {STORY.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative flex items-center gap-3 mb-5">
              <span className="h-3 w-3 rounded-full bg-accent ring-4 ring-accent-soft" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-faint">{s.tag}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-ink mb-3">{s.title}</h3>
            <p className="text-ink-soft leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
