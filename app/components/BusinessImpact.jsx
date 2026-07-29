"use client";

import { motion } from 'framer-motion';
import { Layers, BarChart3, Workflow, FileSearch, TrendingUp, Compass, Target, Zap, Network } from 'lucide-react';
import SectionHeader from './SectionHeader';

const CASES = [
  {
    icon: Layers,
    title: 'Internal Product Development',
    company: 'TransCurators',
    problem: 'Internal tooling decisions were made without visibility into how the team actually used existing tools.',
    approach: 'Defined product requirements from scratch and instrumented event tracking in Mixpanel across the internal product surface.',
    result: 'Feature adoption and behaviour data now directly inform tooling decisions — a measured product loop, not guesswork.',
    tech: ['Mixpanel', 'Event Tracking', 'Funnel Analysis'],
  },
  {
    icon: BarChart3,
    title: 'Sales KPI Dashboard',
    company: 'TransCurators',
    problem: 'Pipeline, productivity, and revenue metrics lived in disconnected spreadsheets, slowing leadership decisions.',
    approach: 'Designed and deployed Power BI dashboards with DAX measures consolidating pipeline, productivity, and revenue into one view.',
    result: 'Gave senior stakeholders a single source of truth for faster, data-driven decisions.',
    tech: ['Power BI', 'DAX'],
  },
  {
    icon: Workflow,
    title: 'Operational Automation & Workflow Monitoring',
    company: 'TransCurators',
    problem: 'Revenue and process leaks were being caught late — after they had already escalated.',
    approach: 'Built automated trackers, alert systems, and workflow monitors from scratch using Python, Google Apps Script, and Notion.',
    result: 'Bottlenecks now surface in real time, preventing revenue and process leakage before escalation.',
    tech: ['Python', 'Apps Script', 'Notion'],
  },
  {
    icon: FileSearch,
    title: 'Business Process Audits',
    company: 'TransCurators',
    problem: 'Sales, content ops, and reporting functions lacked visibility into where accountability was breaking down.',
    approach: 'Ran structural audits with Excel Power Query and Python to map workflows end-to-end and flag inefficiencies.',
    result: 'Instituted corrective frameworks that closed 10+ recurring gaps and cut issue resolution time by ~30%.',
    tech: ['Excel (Power Query)', 'Python', 'Root Cause Analysis'],
  },
  {
    icon: TrendingUp,
    title: 'International Sales Gap Analysis',
    company: 'TransCurators',
    problem: "Performance drop-off in the international sales funnel wasn't clearly mapped to specific behaviours.",
    approach: 'Conducted in-depth gap analysis using Excel and HubSpot CRM data to map drop-off points and behavioural patterns.',
    result: 'Recommendations shaped coaching strategy — 2 mentored reps scaled to ₹10L+/month each in revenue.',
    tech: ['HubSpot', 'Excel', 'Apollo.io'],
  },
  {
    icon: Compass,
    title: 'Market Feasibility Research',
    company: 'Ellipsol System',
    problem: 'Leadership needed to decide which product categories and suppliers to bet on for a white-label launch.',
    approach: 'Evaluated 15+ product categories and 20+ suppliers, analyzing demand, seasonality, and growth data via Excel Pivot Tables.',
    result: 'Shortlisted 5 high-margin SKUs with >25% projected margin potential, presented directly to senior leadership.',
    tech: ['Excel (Pivot Tables)', 'Market Research'],
  },
  {
    icon: Target,
    title: 'Competitive Benchmarking',
    company: 'Ellipsol System',
    problem: 'Pricing and positioning strategy lacked a clear read on the competitive landscape.',
    approach: 'Conducted competitive benchmarking across 10+ companies using Excel and structured web research frameworks.',
    result: 'Pricing and positioning recommendations were adopted directly into go-to-market strategy.',
    tech: ['Excel', 'Competitive Research'],
  },
  {
    icon: Zap,
    title: 'Sales Lead Automation',
    company: 'TransCurators',
    problem: 'Prospect outreach and follow-up sequencing were manual, leading to inconsistent lead flow for the sales team.',
    approach: 'Designed and implemented an automated lead system using Apollo.io and HubSpot — automating outreach, follow-up sequencing, and pipeline tracking.',
    result: 'Enabled consistent lead flow with significantly reduced manual effort and improved sales team efficiency.',
    tech: ['Apollo.io', 'HubSpot', 'Sales Automation'],
  },
  {
    icon: Network,
    title: 'Cross-Departmental Tooling',
    company: 'TransCurators',
    problem: 'Every department relied on manual reporting with no centralised visibility into work across teams.',
    approach: 'Built and deployed centralised dashboards and trackers across every department using Google Sheets (Apps Script), Notion, and Python.',
    result: 'Improved cross-departmental visibility, standardised workflows, and cut dependency on manual reporting org-wide.',
    tech: ['Apps Script', 'Notion', 'Python'],
  },
];

export default function BusinessImpact() {
  return (
    <section id="work" className="py-28 px-6 max-w-6xl mx-auto bg-surface -mx-6 md:mx-auto md:bg-transparent md:rounded-[2.5rem]">
      <div className="px-6 md:px-0 py-16 md:py-0">
        <SectionHeader
          eyebrow="Business Impact"
          title="Problems solved, not tasks completed"
          description="Each initiative below started as a gap someone noticed and ended as a system that closed it."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CASES.map((c) => (
            <motion.div
              key={c.title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-paper border border-border p-7 transition-all duration-300 hover:border-accent/40 hover:bg-accent-soft/30 hover:shadow-[0_12px_36px_-16px_rgba(11,95,255,0.3)] flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <c.icon size={22} />
                </div>
                <span className="text-[11px] font-medium text-ink-faint uppercase tracking-wide pt-1">{c.company}</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-ink mb-4">{c.title}</h3>

              <div className="space-y-3 text-sm flex-1">
                <p><span className="font-semibold text-ink-faint uppercase text-[11px] tracking-wide">Problem — </span><span className="text-ink-soft">{c.problem}</span></p>
                <p><span className="font-semibold text-ink-faint uppercase text-[11px] tracking-wide">Approach — </span><span className="text-ink-soft">{c.approach}</span></p>
                <p><span className="font-semibold text-success uppercase text-[11px] tracking-wide">Result — </span><span className="text-ink-soft">{c.result}</span></p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full border border-border-soft text-[11px] text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
