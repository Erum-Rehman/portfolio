'use client';

import { footerStyles } from '@/styles/footer.styles';
import Link from 'next/link';
import { Github, Instagram, Linkedin, FileCode2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <h2 style={footerStyles.name}>
          Erum <span style={footerStyles.highlight}>Rehman</span>
        </h2>

        <div style={footerStyles.socialLinks}>
          <Link href="https://www.linkedin.com/in/erum-rehman-6632821a1/" target="_blank" rel="noopener noreferrer">
            <div style={footerStyles.socialIcon}>
              <Linkedin size={20} />
            </div>
          </Link>
          
          <Link href="https://github.com/Erum-Rehman" target="_blank" rel="noopener noreferrer">
            <div style={footerStyles.socialIcon}>
              <Github size={20} />
            </div>
          </Link>

          <Link href="https://www.fiverr.com/sellers/erum_rehman" target="_blank" rel="noopener noreferrer">
            <div style={footerStyles.socialIcon}>
              <FileCode2 size={20} />
            </div>
          </Link>

          <Link href="https://www.instagram.com/itz_erum/" target="_blank" rel="noopener noreferrer">
            <div style={footerStyles.socialIcon}>
              <Instagram size={20} />
            </div>
          </Link>
        </div>

        <div style={footerStyles.email}>
          erumr0443@gmail.com
        </div>

        <div style={footerStyles.copyright}>
          © {currentYear} Erum Rehman. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 