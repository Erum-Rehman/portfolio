'use client';

import { projectsStyles } from '@/styles/projects.styles';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Grocery Web",
    description: "A modern e-commerce platform built with React.js and Sass, featuring a responsive design and seamless shopping experience.",
    image: "/grocery.png",
    github: "https://github.com/yourusername/grocery-web",
    live: "https://grocery-web-a6ca1.web.app/",
    tech: ["React.js", "Sass", "Firebase"]
  },
  {
    id: 2,
    title: "Atalon Web",
    description: "A full-stack MERN application with comprehensive user authentication and dynamic content management.",
    image: "/atalon.png",
    github: "https://github.com/yourusername/atalon-web",
    live: "https://atalon-web.web.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    id: 3,
    title: "Game-Fi App",
    description: "An innovative gaming platform developed using the MERN stack with real-time features and user interactions.",
    image: "/gamefi.png",
    github: "https://github.com/yourusername/game-fi-app",
    live: "https://game-fi-app.web.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    id: 4,
    title: "BagX",
    description: "Full-stack e-commerce platform built with MERN stack. Features product management, user authentication, shopping cart, and order processing.",
    image: "/brands.png",
    github: "https://github.com/yourusername/bagx-web",
    live: "https://bagx-b3d08.web.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    id: 5,
    title: "BagX Admin",
    description: "A comprehensive admin dashboard built with React.js and Material-UI for managing e-commerce operations.",
    image: "/admin.png",
    github: "https://github.com/yourusername/bagx-admin",
    live: "https://bagx-b3d08.web.app/",
    tech: ["React.js", "Material-UI", "Firebase"]
  },
  {
    id: 6,
    title: "Buraq Software",
    description: "A WordPress-based corporate website showcasing services and portfolio with custom theme development.",
    image: "/buraq.png",
    github: "https://github.com/yourusername/buraq-software",
    live: "https://buraqsoftware.com/",
    tech: ["WordPress", "PHP", "MySQL"]
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= projects.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, projects.length - 3) : prevIndex - 3
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <section id="projects" style={projectsStyles.section}>
      <div style={projectsStyles.container}>
        <motion.div 
          style={projectsStyles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={projectsStyles.title}>
            Featured <span style={projectsStyles.highlight}>Projects</span>
          </h2>
          <div style={projectsStyles.navigation}>
            <motion.button
              style={projectsStyles.navButton}
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              style={projectsStyles.navButton}
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          style={projectsStyles.slider}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              style={projectsStyles.project}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                style={projectsStyles.imageContainer}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </motion.div>
              <div style={projectsStyles.content}>
                <h3 style={projectsStyles.projectTitle}>{project.title}</h3>
                <p style={projectsStyles.description}>{project.description}</p>
                <div style={projectsStyles.techStack}>
                  {project.tech.map((tech, index) => (
                    <span key={index} style={projectsStyles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={projectsStyles.links}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectsStyles.link}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectsStyles.link}
                    >
                      <ExternalLink size={20} />
                      <span>Live</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 