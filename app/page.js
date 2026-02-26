"use client";

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Database, 
  Users, 
  Settings,
  Target,
  Workflow,
  AlertTriangle,
  FileSearch,
  ArrowRight, 
  Mail, 
  Linkedin, 
  FileText 
} from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  // Reusable animation variants
  const fadeInUP = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">Arryan Tiwari<span className="text-blue-500"></span></span>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#skills" className="hover:text-blue-400 transition-colors">Core Competencies</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Work Experiences</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[80vh]">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.p variants={fadeInUP} className="text-blue-500 font-semibold tracking-wide uppercase mb-4">
          Business Analyst | Project Management 
          </motion.p>
          <motion.h1 variants={fadeInUP} className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Bringing clarity through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Data</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Collaboration</span>
          </motion.h1>
          <motion.p variants={fadeInUP} className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            I translate complex business requirements into actionable technical solutions. Specializing in process optimization, data visualization, and cross-functional stakeholder management.
          </motion.p>
          <motion.div variants={fadeInUP} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
              Let's Connect <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
              <FileText size={20} /> View Resume
            </a>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeInUP} className="absolute top-40 right-30">
            <Image src="/image.png" alt="Profile" width={400} height={200} className="rounded-lg border border-2 border-blue-600 hover:scale-105 transition-all duration-300" />
          </motion.div>
      </section>

      {/* Core Competencies */}
      <section id="Core Competencies" className="py-24 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUP}
            className="text-3xl font-bold mb-12 text-white"
          >
            Core Competencies
          </motion.h2>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <SkillCard 
              icon={<Database className="text-blue-400" size={32} />}
              title="Data Analysis"
              desc="SQL, Python, Excel. Extracting actionable insights from complex datasets."
              variants={fadeInUP}
            />
            <SkillCard 
              icon={<BarChart3 className="text-emerald-400" size={32} />}
              title="Data Visualization"
              desc="Tableau, PowerBI. Crafting intuitive dashboards for executive decision-making."
              variants={fadeInUP}
            />
            <SkillCard 
              icon={<Settings className="text-purple-400" size={32} />}
              title="Process Optimization"
              desc="BPMN, Lean Six Sigma. Identifying bottlenecks and streamlining workflows."
              variants={fadeInUP}
            />
            <SkillCard 
              icon={<Users className="text-amber-400" size={32} />}
              title="Requirements Gathering"
              desc="Agile, Scrum, Jira. Aligning stakeholder vision with engineering execution."
              variants={fadeInUP}
            />
            <SkillCard 
              icon={<Target className="text-indigo-600" size={32} />}
              title="Product Strategy"
              desc="Defining product goals, roadmaps, and data-backed feature prioritization."
              variants={fadeInUP}
            />
            <SkillCard 
              icon={<Workflow className="text-teal-600" size={32} />}
              title="Business Process Mapping"
              desc="Documenting workflows using BRD, FRD, and user journey mapping."
              variants={fadeInUP}
            />
            <SkillCard 
              icon={<AlertTriangle className="text-red-500" size={32} />}
              title="Risk & Impact Analysis"
              desc="Evaluating project risks and assessing business impact for better decisions."
              variants={fadeInUP}
            />
            <SkillCard 
              icon={<FileSearch className="text-emerald-600" size={32} />}
              title="Advanced SQL Analysis"
              desc="Writing complex queries to extract, join, and analyze product usage data."
              variants={fadeInUP}
            />
          </motion.div>
        </div>
      </section>

      {/* Case Studies (STAR Method) */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUP}>
          <h2 className="text-3xl font-bold mb-4 text-white">Work Experiences</h2>
          <p className="text-slate-400 mb-12">Delivering measurable ROI through strategic analysis.</p>
        </motion.div>
        
        <div className="space-y-12">
          {/* Project 1 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUP}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">TechCurators <span className="font-normal text-slate-400 text-sm">JAN 2026-Present</span></h3>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full">SaaS Company</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <h4 className="text-white font-semibold mb-2">Role-Project Management</h4>
                <p className="mb-4">Led the end-to-end development of a new SaaS product vertical, managing cross-functional collaboration across UX, product, engineering, and external vendors while improving workflows and stakeholder alignment to accelerate launch and enable scalable growth.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Action & Result</h4>
                <p>Drove global expansion of the new SaaS vertical into multiple international markets by improving execution efficiency and aligning cross-functional teams. <strong className="text-emerald-400">Reduced time-to-market by 30%, boosted enterprise acquisition by 40%, and drove 25% ARR growth.</strong></p>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUP}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">Ellipsol System Pvt Ltd <span className="font-normal text-slate-400 text-sm">NOV 2025 -JAN 2026</span></h3>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-medium rounded-full">Sustainable Innovation</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <h4 className="text-white font-semibold mb-2">Role-Business Analyst</h4>
                <p className="mb-4">Conducted market feasibility and competitive analysis to support leadership in launching a white-label business initiative. Evaluated 15+ product categories and 20+ suppliers while analyzing customer demand trends and seasonality to identify high-margin opportunities.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Action & Result</h4>
                <p>Delivered data-backed insights that helped leadership refine product positioning and shortlist scalable business opportunities. <strong className="text-emerald-400">Contributing to a 20% improvement in pricing efficiency and reducing go-to-market decision time by 30%.</strong></p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUP}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white">Siemens Ltd <span className="font-normal text-slate-400 text-sm">JUNE 2024 -AUG 2024</span></h3>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full">Industrial Automation</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <h4 className="text-white font-semibold mb-2">Role-Technical Analyst</h4>
                <p className="mb-4">Analyzed automation and operational data while working closely with PLC-based systems to define KPIs and translate client requirements into actionable technical insights. Actively participated in client meetings to understand operational challenges and align automation solutions with business needs.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Action & Result</h4>
                <p>Identified critical process bottlenecks and contributed to technical solution discussions during client engagements to improve automation workflows. <strong className="text-emerald-400">Enhanced system reliability and operational efficiency while supporting the successful conversion of high-value automation deals.</strong></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-20 border-t border-slate-800 bg-slate-950 text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUP}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Ready for my next challenge.</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Currently working, but open to new opportunities. Always happy to connect even just to say hello.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:arryantiwari08@gmail.com" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all text-white">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/arryan-tiwari/" target="_blank" rel="noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all text-white">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="mt-12 text-slate-600 text-sm">
            © {new Date().getFullYear()} Arryan Tiwari. All rights reserved.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

// Reusable Animated Skill Card Component
function SkillCard({ icon, title, desc, variants }) {
  return (
    <motion.div 
      variants={variants}
      className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group"
    >
      <div className="mb-4 p-3 bg-slate-900 inline-block rounded-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {desc}
      </p>
    </motion.div>
  );
}