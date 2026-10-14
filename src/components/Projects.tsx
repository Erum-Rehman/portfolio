'use client';

import { projectsStyles } from '@/styles/projects.styles';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Wattba",
    description: "A modern web application with a responsive interface and a seamless user experience, deployed on Firebase.",
    image: "/wattba.png",
    live: "https://wattba.firebaseapp.com/",
    tech: ["React.js", "Firebase"]
  },
  {
    id: 2,
    title: "BistroChat",
    description: "A chat-driven platform for restaurants and bistros, streamlining customer conversations and ordering.",
    image: "/bistrochat.png",
    live: "https://www.bistrochat.com/",
    tech: ["Next.js", "Tailwind"]
  },
  {
    id: 3,
    title: "Dubai Municipality SSO",
    description: "A secure single sign-on portal for Dubai Municipality, providing unified authentication across government services.",
    image: "/dubai.png",
    live: "https://sso.dm.gov.ae/",
    tech: ["SSO", "Authentication"]
  },
    {
    id: 4,
    title: "Grocery Web",
    description: "A modern e-commerce platform built with React.js and Sass, featuring a responsive design and seamless shopping experience.",
    image: "/grocery.png",
    live: "https://grocery-web-a6ca1.web.app/",
    tech: ["React.js", "Sass", "Firebase"]
  },
  {
    id: 5,
    title: "Atalon Web",
    description: "A full-stack MERN application with comprehensive user authentication and dynamic content management.",
    image: "/atalon.png",
    live: "https://atalon-web.web.app/",
    tech: ["React.js", "Sass"]
  },
  {
    id: 6,
    title: "Game-Fi App",
    description: "An innovative gaming platform developed using the MERN stack with real-time features and user interactions.",
    image: "/gamefi.png",
    live: "https://game-fi-app.web.app/",
    tech: ["React.js", "Sass"]
  },
];

const PAGE_SIZE = 3;
const AUTO_SLIDE_MS = 5000;

const pageVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -80 })
};

const techListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1 }
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const currentPage = Math.floor(currentIndex / PAGE_SIZE);

  const goToPage = (page: number) => {
    setDirection(page >= currentPage ? 1 : -1);
    setCurrentIndex(page * PAGE_SIZE);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + PAGE_SIZE >= projects.length ? 0 : prevIndex + PAGE_SIZE
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - PAGE_SIZE < 0 ? (totalPages - 1) * PAGE_SIZE : prevIndex - PAGE_SIZE
    );
  };

  // Auto-advance; resets whenever the page changes (manual or automatic)
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(nextSlide, AUTO_SLIDE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, paused]);

  const visibleProjects = projects.slice(currentIndex, currentIndex + PAGE_SIZE);

  return (
    <section id="projects" style={projectsStyles.section}>
      <div
        style={projectsStyles.container}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
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

        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            style={projectsStyles.slider}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                style={projectsStyles.project}
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={{
                  rest: { y: 0, boxShadow: '0 0 0 rgba(153, 201, 217, 0)' },
                  hover: { y: -10, boxShadow: '0 10px 30px rgba(153, 201, 217, 0.15)' }
                }}
              >
                <div style={projectsStyles.imageContainer}>
                  <motion.div
                    style={{ overflow: 'hidden', borderRadius: '8px' }}
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
                    />
                  </motion.div>
                  <motion.div
                    style={projectsStyles.overlay}
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectsStyles.overlayButton}
                    >
                      <ExternalLink size={18} />
                      <span>View Live</span>
                    </Link>
                  </motion.div>
                </div>
                <div style={projectsStyles.content}>
                  <h3 style={projectsStyles.projectTitle}>{project.title}</h3>
                  <p style={projectsStyles.description}>{project.description}</p>
                  <motion.div
                    style={projectsStyles.techStack}
                    variants={techListVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {project.tech.map((tech) => (
                      <motion.span key={tech} style={projectsStyles.tech} variants={techVariants}>
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div style={projectsStyles.links}>
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
        </AnimatePresence>

        <div style={projectsStyles.indicators}>
          {Array.from({ length: totalPages }).map((_, page) => (
            <motion.button
              key={page}
              aria-label={`Go to page ${page + 1}`}
              onClick={() => goToPage(page)}
              style={projectsStyles.dot}
              animate={{
                width: page === currentPage ? 28 : 10,
                backgroundColor: page === currentPage ? '#99c9d9' : 'rgba(153, 201, 217, 0.3)'
              }}
            />
          ))}
          <span style={projectsStyles.counter}>
            {currentIndex + 1}-{Math.min(currentIndex + PAGE_SIZE, projects.length)} / {projects.length}
          </span>
        </div>
      </div>
    </section>
  );
}
