"use client";

import { motion } from 'framer-motion';
import { Rocket, Megaphone, Database, BarChart3, Workflow, FileSearch, Users, TrendingUp, Compass } from 'lucide-react';
import SectionHeader from './SectionHeader';

const CASES = [
  {
    icon: Rocket,
    title: 'HRMS: Internal Tool to Market Product',
    company: 'Margo Digitech',
    problem: 'An in-house HRMS was solving a real problem internally but was not yet ready to be sold.',
    approach: 'Heading the initiative to make it production-ready, owning go-to-market planning through to launch.',
    result: 'An internal tool is on its way to becoming a product the company can sell.',
    tech: ['Go-to-Market', 'Product Planning', 'Stakeholder Management'],
  },
  {
    icon: Megaphone,
    title: 'Rebrand & Organic Growth',
    company: 'Margo Digitech',
    problem: 'The company was moving from TransCurators to a new brand with no organic presence behind it.',
    approach: 'Led the transition to Margo Digitech and built its organic presence from scratch.',
    result: 'The brand now earns 10K impressions per day and brings inbound leads and enquiries to the sales team.',
    tech: ['Digital Marketing', 'Brand Transition', 'Organic Growth'],
  },
  {
    icon: Database,
    title: 'Internal Tools for Business & Sales',
    company: 'Margo Digitech',
    problem: 'Business and sales teams relied on manual follow-ups to know where operations and KPIs stood.',
    approach: 'Built SQL-backed internal tools that give both teams real-time visibility into operations and KPIs.',
    result: 'Manual follow-ups replaced, and cross-team workflows run smoother.',
    tech: ['SQL', 'Internal Tools'],
  },
  {
    icon: BarChart3,
    title: 'Founder KPI Dashboards',
    company: 'Margo Digitech',
    problem: 'The founder got pipeline, revenue and team output through weekly manual updates.',
    approach: 'Built Power BI dashboards with DAX measures combining pipeline, revenue and team output in one view.',
    result: 'Weekly manual updates replaced by dashboards leadership checks daily.',
    tech: ['Power BI', 'DAX'],
  },
  {
    icon: Workflow,
    title: 'Department Trackers & Alerts',
    company: 'Margo Digitech',
    problem: 'Teams had to ask someone else for their own numbers.',
    approach: 'Built department-level trackers and alert systems in Google Sheets with Apps Script.',
    result: 'Teams now self-serve their numbers instead of waiting on reports.',
    tech: ['Apps Script', 'Google Sheets', 'Automation'],
  },
  {
    icon: FileSearch,
    title: 'Sales, Content & Ops Audits',
    company: 'Margo Digitech',
    problem: 'Issues across sales, content and ops took too long to resolve, and nobody could see why.',
    approach: 'Ran audits with Excel Power Query, then worked with the founder and department heads to fix the gaps through automation scripts and workflows.',
    result: 'Resolution time cut by ~30%.',
    tech: ['Excel (Power Query)', 'Root Cause Analysis', 'Process Auditing'],
  },
  {
    icon: Users,
    title: 'Leading the IT Team',
    company: 'Margo Digitech',
    problem: 'Concurrent web, app and automation projects needed one person owning scope and timelines.',
    approach: 'Managing the IT team: sprint planning, client requirements and delivery timelines across projects.',
    result: 'Multiple client and internal projects delivered in parallel under one plan.',
    tech: ['Sprint Planning', 'Project Delivery', 'Requirements Gathering'],
  },
  {
    icon: TrendingUp,
    title: 'International Sales Pipeline',
    company: 'Margo Digitech',
    problem: 'Leadership could see deals stalling in the international pipeline but not where or why.',
    approach: 'Analysed the pipeline in HubSpot, and managed two sales reps through weekly reviews and targets.',
    result: 'Leadership got numbers instead of guesses, and both reps went on to close significant monthly international revenue.',
    tech: ['HubSpot', 'Pipeline Analysis', 'Team Leadership'],
  },
  {
    icon: Compass,
    title: 'Market Feasibility & Benchmarking',
    company: 'Ellipsol System',
    problem: 'Leadership needed to decide which categories, suppliers and price points to bet on for a new product line.',
    approach: 'Benchmarked 10+ competitors, ran white label feasibility across 15+ categories and 20+ suppliers, and ran pivot analysis on demand and seasonality.',
    result: 'Shortlisted 5 SKUs with 25%+ margin potential and shaped the GTM strategy.',
    tech: ['Excel (Pivot Tables)', 'Competitive Benchmarking', 'Market Research'],
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
