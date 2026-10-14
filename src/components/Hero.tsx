'use client';

import { heroStyles } from '@/styles/hero.styles';
import { Eye, ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.container}>
        <motion.div 
          style={heroStyles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            style={heroStyles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I am Erum
          </motion.p>
          <motion.h1 
            style={heroStyles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack <span style={heroStyles.highlight}>Developer</span>
          </motion.h1>
          <motion.p 
            style={heroStyles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer with 4+ years of experience building high-performance web applications for companies and freelance clients. Specialized in React.js and Next.js, with hands-on expertise in Node.js, Supabase and Firebase backends, secure authentication and SSO, real-time chat and AI integrations, and Playwright test automation. I turn complex requirements into fast, scalable products that deliver real business value and a smooth user experience.
          </motion.p>
          <motion.div 
            style={heroStyles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
            href="https://drive.google.com/file/d/1J6Nua30dZN4E8cjxngJSBL_CaDAqYyzQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={heroStyles.primaryButton}>
              <Eye size={20} />
              View Resume
            </Link>
            <Link href="#contact" style={heroStyles.secondaryButton}>
              <span>Lets Talk</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div 
            style={heroStyles.socialLinks}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link 
              href="https://github.com/Erum-Rehman" 
              target="_blank" 
              rel="noopener noreferrer"
              style={heroStyles.socialLink}
            >
              <Github size={24} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/erum-rehman-6632821a1/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={heroStyles.socialLink}
            >
              <Linkedin size={24} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          style={heroStyles.imageContainer}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            style={heroStyles.profileImage}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            ER
            <div style={heroStyles.imageGlow} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 