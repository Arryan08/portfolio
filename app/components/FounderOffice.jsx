"use client";

import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

const PRINCIPLES = [
  { title: 'Ownership', body: 'Treating ambiguous problems as mine to solve end-to-end, without waiting for a directive.' },
  { title: 'Zero-to-One Execution', body: 'Built an internal product from scratch — requirements to instrumented analytics — with no existing playbook.' },
  { title: 'Cross-Functional Leadership', body: 'Coordinated sales, content, and ops teams toward one accountability framework.' },
  { title: 'Root Cause Analysis', body: 'Diagnosed 10+ recurring operational gaps down to their source, not their symptoms.' },
  { title: 'Revenue Operations', body: 'Mentored a 2-person sales team to ₹10L+/month each through structured targets and incentive tracking.' },
  { title: 'Business Strategy', body: 'Shaped coaching and go-to-market strategy from CRM and market data, not intuition.' },
  { title: 'Internal Tool Building', body: 'Shipped trackers, alert systems, and dashboards that teams now run on daily.' },
  { title: 'Stakeholder Management', body: 'Translated founder vision into ground-level execution for cross-functional teams.' },
  { title: 'Process Auditing', body: 'Mapped workflows across sales, content ops, and reporting to expose where accountability broke down.' },
  { title: 'Decision Support', body: 'Turned raw CRM and pipeline data into KPI dashboards leadership actually uses.' },
  { title: 'Automation', body: 'Replaced manual monitoring with Python- and Apps Script-driven alert systems.' },
];

export default function FounderOffice() {
  return (
    <section className="py-28 px-6 bg-ink text-white rounded-[2.5rem] max-w-6xl mx-6 md:mx-auto">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50 mb-4">
          What Sets This Apart
        </p>
        <TextReveal
          as="h2"
          text="Founder's Office Skills"
          className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-white/60 max-w-2xl mb-16"
        >
          The traditional Business Analyst reports on problems. This is the operating system for solving them.
        </motion.p>

        <div className="grid md:grid-cols-2 border-t border-white/10">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group border-b border-white/10 py-7 pr-6 md:odd:border-r md:odd:pr-10 transition-colors duration-300 hover:bg-accent/[0.08]"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-white/30 group-hover:text-accent transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display font-semibold text-white mb-1.5">{p.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed max-w-md">{p.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
