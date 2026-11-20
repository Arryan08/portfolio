"use client";

import { motion } from 'framer-motion';
import { Database, BarChart3, Settings, Workflow, Brain, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';

const CATEGORIES = [
  {
    icon: Database,
    title: 'Data & Analytics',
    skills: ['SQL (MySQL, PostgreSQL, SQLite)', 'Python (Pandas, NumPy, Matplotlib, Seaborn)', 'Excel (Pivot Tables, Power Query)'],
  },
  {
    icon: BarChart3,
    title: 'BI & Product Analytics',
    skills: ['Power BI (DAX)', 'Tableau', 'Mixpanel (Event Tracking, Funnels, Retention, Feature Adoption)'],
  },
  {
    icon: Settings,
    title: 'Automation & Internal Tools',
    skills: ['Python Scripting', 'Google Sheets (Apps Script)', 'Notion', 'Slack Integrations'],
  },
  {
    icon: Workflow,
    title: 'CRM & Growth',
    skills: ['HubSpot (Pipeline Automation, Workflows)', 'Apollo.io (Prospecting, Outbound Sequencing)', 'Salesforce'],
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: ['Regression', 'Classification', 'Model Evaluation (Scikit-learn)'],
  },
  {
    icon: Users,
    title: 'Core Competencies',
    skills: ['Team Leadership', 'Project Delivery', 'Stakeholder Management', 'Requirements Gathering', 'KPI Framework Design', 'Process Auditing', 'Root Cause Analysis', 'Data Storytelling'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Skills"
        title="A technical toolkit built for execution"
        description="Not certifications for their own sake — every tool here was picked up to close a real gap."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.title}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-border p-7 bg-paper hover:border-accent/40 hover:bg-accent-soft/30 hover:shadow-[0_12px_36px_-16px_rgba(11,95,255,0.3)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-surface text-ink group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <cat.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-ink">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-surface text-ink-soft text-xs">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
