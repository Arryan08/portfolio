"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ROLES = [
  {
    company: 'TransCurators',
    role: "Business Analyst — Founder's Office",
    duration: 'Jan 2026 — Present',
    tag: "Founder's Office",
    metric: '₹10L+/mo per mentee',
    summary: 'The execution layer between founder vision and ground-level operations across revenue, process, and team-building.',
    bullets: [
      'Ran structural audits across sales, content ops, and reporting (Excel Power Query, Python) — flagging inefficiencies and instituting corrective frameworks that improved accountability and execution speed.',
      'Built internal tools from scratch — automated trackers, alert systems, workflow monitors (Python, Apps Script, Notion) — surfacing bottlenecks before they became revenue or process leaks.',
      'Spearheaded an internal product end-to-end in Mixpanel: defined requirements, instrumented event tracking, and analyzed feature adoption and behaviour data to guide tooling decisions.',
      'Designed Power BI (DAX) KPI dashboards consolidating sales pipeline, productivity, and revenue into a single leadership view.',
      'Ran gap analysis on the international sales funnel using HubSpot CRM data — recommendations directly shaped coaching strategy.',
      'Mentored 2 sales reps to ₹10L+/month each in international revenue through structured target-setting and Apollo.io-tracked incentive alignment.',
      'Closed 10+ recurring operational gaps across content and ops — cutting issue resolution time by ~30% through root-cause analysis documented in Notion.',
    ],
    tech: ['Python', 'Power BI (DAX)', 'Mixpanel', 'Excel (Power Query)', 'HubSpot', 'Apollo.io', 'Notion', 'Apps Script'],
  },
  {
    company: 'Ellipsol System Pvt Ltd',
    role: 'Business Analyst Intern',
    duration: 'Nov 2025 — Jan 2026',
    tag: 'Market Research',
    metric: '>25% margin potential',
    summary: 'Market feasibility and competitive research behind a white-label product launch.',
    bullets: [
      'Benchmarked 10+ companies on pricing and positioning — recommendations adopted directly into go-to-market strategy.',
      'Led feasibility research across 15+ product categories and 20+ suppliers, shortlisting 5 high-margin SKUs presented to senior leadership.',
      'Analyzed demand, seasonality, and growth signals via Excel Pivot Tables, surfacing opportunities with >25% projected margin potential.',
    ],
    tech: ['Excel (Pivot Tables)', 'Market Research', 'Competitive Benchmarking'],
  },
  {
    company: 'Siemens Ltd.',
    role: 'Technical Analyst Intern',
    duration: 'Jun 2024 — Aug 2024',
    tag: 'Industrial Automation',
    metric: '15% reliability gain',
    summary: 'Bridging industrial automation engineering and business requirements.',
    bullets: [
      'Translated 20+ client requirements across PLC and HMI systems into structured technical specifications.',
      'Identified 5 critical process bottlenecks through data analysis and stakeholder interviews.',
      'Contributed to a 15% improvement in system reliability and reduced rework cycles that improved project profitability.',
    ],
    tech: ['PLC / HMI Systems', 'Excel', 'Technical Specification'],
  },
];

function ExperienceCard({ item, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 md:pl-14"
    >
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-accent-soft" />
      <div className="absolute left-[5px] top-6 bottom-0 w-px bg-border-soft last:hidden" />

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="group w-full text-left rounded-2xl border border-border bg-paper hover:border-accent/40 hover:bg-accent-soft/30 hover:shadow-[0_12px_36px_-16px_rgba(11,95,255,0.3)] transition-all duration-300 p-6 md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">{item.company}</h3>
            <p className="text-ink-soft text-sm mt-1">{item.role} · {item.duration}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent-soft text-accent text-xs font-medium">{item.tag}</span>
            <ChevronDown
              size={18}
              className={`text-ink-faint group-hover:text-accent transition-all duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        <p className="text-ink-soft leading-relaxed max-w-2xl">{item.summary}</p>
        <p className="mt-3 text-sm font-semibold text-success">{item.metric}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-6 space-y-3 border-t border-border-soft pt-6">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-ink-faint shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-border-soft text-xs text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-5xl mx-auto">
      <SectionHeader
        eyebrow="Experience"
        title="Three roles, one throughline: ownership"
        description="From translating engineering requirements to running a founder's office — each role compounded into the next."
      />
      <div className="space-y-8">
        {ROLES.map((item, i) => (
          <ExperienceCard key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
