"use client";

import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

const PRINCIPLES = [
  { title: 'Ownership', body: 'Starting from a vague ask and treating the problem as mine to solve end to end, without waiting for a directive.' },
  { title: 'Zero-to-One Execution', body: "Built a new brand's organic presence from scratch, and now taking an in-house HRMS from internal tool to market product." },
  { title: 'Team Leadership', body: 'Managing an IT team across concurrent web, app and automation projects, plus two sales reps through weekly reviews and targets.' },
  { title: 'Root Cause Analysis', body: 'Audited sales, content and ops down to the source of each issue, cutting resolution time by ~30%.' },
  { title: 'Revenue Operations', body: 'Found where and why international deals stalled in HubSpot, and coached the reps who went on to close significant monthly revenue.' },
  { title: 'Go-to-Market', body: 'Shaped GTM from competitor benchmarks and supplier feasibility, and now own one for a product launch.' },
  { title: 'Internal Tool Building', body: 'Shipped SQL tools, trackers and alert systems that business and sales teams run on daily.' },
  { title: 'Stakeholder Management', body: 'Work directly with the founder and department heads, aligning teams on a fix before implementing it.' },
  { title: 'Organic Growth', body: 'A digital marketing background that took a new brand to 10K impressions a day and inbound leads for sales.' },
  { title: 'Decision Support', body: 'Power BI dashboards that replaced weekly manual updates to the founder with a view leadership checks daily.' },
  { title: 'Automation', body: 'Replaced manual follow-ups and reporting with Apps Script trackers, alerts and automation scripts.' },
  { title: 'Requirements to Delivery', body: 'From 20+ PLC/HMI client specs at Siemens to sprint planning for an IT team: turning asks into shipped work.' },
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
