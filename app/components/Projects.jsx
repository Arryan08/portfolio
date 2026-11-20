"use client";

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

const PROJECT = {
  title: 'AI Powered Research Discovery System for DRDO',
  role: 'Planner and Business Analyst',
  tagline: "Ask a question in plain English, get a cited answer and a report, all inside DRDO's own network.",
  stats: [
    { value: '4', label: 'User problems framed' },
    { value: '5', label: 'Modules mapped to them' },
    { value: '6', label: 'RAG approaches compared' },
    { value: '500', label: 'Question blind test set' },
  ],
  bullets: [
    'Planned the solution end to end and owned the business analysis, from user problems to the final presentation.',
    'Framed four user problems (knowledge scattered across intranet and internet, link-only search, repeated effort across labs, days spent reading long reports) and mapped them to five modules, so every need traced to a feature.',
    'Defined roles and user journeys for scientists, lab admins and system admins across an air-gapped intranet system and a separate internet system, covering sign-in, clearance-based access and audit needs.',
    "Compared six RAG approaches against DRDO's access, citation and hardware needs, and documented why hybrid RAG won.",
    'Designed the acceptance framework: faithfulness, answer relevance and retrieval precision scored nightly, a 500-question blind test set, and a quarterly rule for adopting new models.',
    'Planned delivery and support (one year on site, one year of warranty) and prepared the licence, origin and security declarations aligned to CERT-In and NIC guidelines.',
  ],
  tech: ['Hybrid RAG', 'Requirements Gathering', 'User Journeys', 'Acceptance Testing', 'CERT-In / NIC'],
};

export default function Projects() {
  const p = PROJECT;
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Projects"
        title="Planning a system people can trust"
        description="Business analysis for an AI system where access, citations and security matter as much as the answers."
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-border bg-paper p-7 md:p-10 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_12px_36px_-16px_rgba(11,95,255,0.3)]"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 p-2.5 rounded-xl bg-accent-soft text-accent">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">{p.title}</h3>
              <p className="text-ink-soft text-sm mt-1">{p.role}</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-ink-soft leading-relaxed max-w-3xl">{p.tagline}</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border-soft py-6">
          {p.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl md:text-3xl font-semibold text-ink">{s.value}</div>
              <div className="mt-1 text-xs text-ink-faint">{s.label}</div>
            </div>
          ))}
        </div>

        <ul className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-4">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
              <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full border border-border-soft text-xs text-ink-soft">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
