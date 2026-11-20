"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ROLES = [
  {
    company: 'Margo Digitech (formerly TransCurators)',
    role: 'Business Analyst',
    duration: 'Jan 2026 — Present',
    tag: "Founder's Office",
    metric: '10K impressions/day · ~30% faster resolution',
    summary: 'Working directly with the founder across internal tools, reporting, team leadership, the rebrand and a product launch.',
    bullets: [
      'Built internal tools (SQL) for the business and sales teams that give them real-time visibility into operations and KPIs, replacing manual follow-ups and making cross-team workflows run smoother.',
      'Heading the initiative to turn our in-house HRMS into a production-ready product for the market, owning it from go-to-market planning through to launch.',
      'Led the transition to the new Margo Digitech brand and built its organic presence from scratch; it now earns 10K impressions per day and brings inbound leads and enquiries to the sales team.',
      'Worked directly with the founder and department heads to find operational gaps, aligned stakeholders across teams on solutions, and implemented the fixes hands-on through automation scripts and workflows.',
      'Built Power BI (DAX) dashboards combining pipeline, revenue and team output, replacing weekly manual updates to the founder.',
      'Built department-level trackers and alert systems (Apps Script) so teams could self-serve their numbers.',
      'Ran audits across sales, content and ops using Excel (Power Query), cutting resolution time by ~30%.',
      'Managed an IT team delivering concurrent web, app and automation projects, handling sprint planning, client requirements and delivery timelines.',
      'Managed two sales reps through weekly reviews and targets; both went on to close significant monthly international revenue.',
      'Analysed the international sales pipeline in HubSpot to pinpoint where and why deals stalled, giving leadership numbers instead of guesses.',
    ],
    tech: ['SQL', 'Power BI (DAX)', 'Excel (Power Query)', 'Apps Script', 'HubSpot', 'Sprint Planning', 'Go-to-Market'],
  },
  {
    company: 'Ellipsol System Pvt. Ltd.',
    role: 'Business Analyst Intern',
    duration: 'Nov 2025 — Jan 2026',
    tag: 'Market Research',
    metric: '25%+ margin potential',
    summary: 'Market feasibility and competitive research behind the GTM strategy for a new product line.',
    bullets: [
      'Benchmarked 10+ competitors on pricing and positioning to shape the GTM strategy for a new product line.',
      'Ran white label feasibility across 15+ categories and 20+ suppliers, shortlisted 5 SKUs, and presented the findings to leadership.',
      'Used Excel pivot analysis on demand and seasonality to isolate opportunities with 25%+ margin potential.',
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
      'Converted 20+ PLC/HMI client requirements into structured, business-ready specs, contributing to a 15% improvement in system reliability.',
      'Traced 5 recurring project bottlenecks to root cause through interviews and data review, and co-led the fixes.',
      'Identified rework and resource-use improvements on live projects that improved profitability.',
    ],
    tech: ['PLC / HMI Systems', 'Requirements Gathering', 'Root Cause Analysis'],
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
        description="From translating engineering requirements to working beside a founder and leading teams — each role compounded into the next."
      />
      <div className="space-y-8">
        {ROLES.map((item, i) => (
          <ExperienceCard key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
