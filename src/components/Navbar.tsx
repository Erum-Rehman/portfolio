'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="navbar-logo-icon">ER</div>
            <span>Erum Rehman</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 text-[#99c9d9]">
              <Phone size={20} />
              <span className="font-semibold">+92 341 7424005</span>
            </div>
          </div>         
        </div>       
      </div>
    </nav>
  );
} 