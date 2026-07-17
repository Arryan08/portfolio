"use client";

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="pb-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl border border-border p-8 md:p-10 bg-surface flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
      >
        <div className="shrink-0 h-14 w-14 rounded-2xl bg-paper border border-border flex items-center justify-center">
          <GraduationCap className="text-accent" size={26} />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-faint mb-2">Education</p>
          <h3 className="font-display text-xl font-semibold text-ink">
            B.Tech, Electronics & Communication Engineering
          </h3>
          <p className="text-ink-soft mt-1">Maharaja Surajmal Institute of Technology, New Delhi</p>
        </div>
        <div className="flex gap-8 md:pl-10 md:border-l border-border-soft">
          <div>
            <div className="font-display text-2xl font-semibold text-ink">8.4</div>
            <div className="text-xs text-ink-faint mt-1">CGPA / 10</div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-ink">2026</div>
            <div className="text-xs text-ink-faint mt-1">Nov 2022 — Jul 2026</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
