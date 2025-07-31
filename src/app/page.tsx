'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="section">
          <div className="container">
            <About />
          </div>
        </section>
        
        <section id="services" className="section">
          <div className="container">
            <Services />
          </div>
        </section>
        
        <section id="projects" className="section">
          <div className="container">
            <Projects />
          </div>
        </section>
        
        <section id="contact" className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
