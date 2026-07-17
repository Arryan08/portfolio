"use client";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import BusinessImpact from './components/BusinessImpact';
import Skills from './components/Skills';
import FounderOffice from './components/FounderOffice';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <BusinessImpact />
      <Skills />
      <FounderOffice />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
