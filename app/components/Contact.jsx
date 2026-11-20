"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, FileText, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';

const CHANNELS = [
  { icon: Mail, label: 'arryantiwari08@gmail.com', href: 'mailto:arryantiwari08@gmail.com' },
  { icon: Phone, label: '+91 96438 19705', href: 'tel:+919643819705' },
  { icon: Linkedin, label: 'linkedin.com/in/arryan-tiwari', href: 'https://www.linkedin.com/in/arryan-tiwari/', external: true },
  { icon: Github, label: 'github.com/Arryan08', href: 'https://github.com/Arryan08', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-60" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6">Contact</p>
        <TextReveal
          as="h2"
          text="Let's Build Something Meaningful."
          className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-ink text-balance"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-ink-soft max-w-xl mx-auto"
        >
          Open to Business Analyst and founder's-office roles where ownership matters more than titles. I reply fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton
            as="a"
            href="mailto:arryantiwari08@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-white font-medium transition-colors hover:bg-accent"
          >
            Say Hello <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-ink font-medium transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-accent-soft/40"
          >
            <FileText size={18} /> Download Resume
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border-soft px-5 py-2.5 text-sm text-ink-soft hover:text-accent hover:border-accent/40 hover:bg-accent-soft/40 transition-all duration-300"
            >
              <c.icon size={16} /> {c.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
