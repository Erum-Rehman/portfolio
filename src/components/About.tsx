'use client';

import { aboutStyles } from '@/styles/about.styles';
import { motion } from 'framer-motion';

const education = [
  {
    id: 1,
    year: "2020 - 2024",
    degree: "Bachelor of Computer Science",
    institution: "University Of Karachi",
  },
  {
    id: 2,
    year: "2021 - 2022",
    degree: "Diploma in Web Development",
    institution: "SMIT",
  }
];

const experience = [
  {
    id: 1,
    year: "10/2024 - Present",
    position: "Full Stack Developer",
    company: "Buraq Software",
    description: "Working on multiple Full stack projects, developing responsive web applications and RESTful APIs.",
  },
  {
    id: 2,
    year: "04/2024 - 09/2024",
    position: "Mern Stack Developer",
    company: "Waka Consulting",
    description: "Developed and maintained web applications using React.js, Node.js, and MongoDB.",
  },
  {
    id: 3,
    year: "01/2023 - 02/2024",
    position: "Frontend Developer",
    company: "Finosys",
    description: "Built scalable web applications and implemented new features using MERN stack.",
  },
  {
    id: 4,
    year: "10/2022 - 12/2022",
    position: "Frontend Developer Intern",
    company: "Stack Sense",
    description: "Gained hands-on experience in React.js development and UI/UX implementation.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <motion.section 
      id="about" 
      style={aboutStyles.section}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div style={aboutStyles.container}>
        <motion.div 
          style={aboutStyles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={aboutStyles.title}>About Me</h2>
        </motion.div>

        <div style={aboutStyles.columns}>
          <motion.div 
            style={aboutStyles.column}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 style={aboutStyles.sectionTitle}>Education</h3>
            {education.map((item) => (
              <motion.div 
                key={item.id} 
                style={aboutStyles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div style={aboutStyles.dot} />
                <div style={aboutStyles.timelineContent}>
                  <span style={aboutStyles.year}>{item.year}</span>
                  <h4 style={aboutStyles.degree}>{item.degree}</h4>
                  <p style={aboutStyles.institution}>{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            style={aboutStyles.column}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 style={aboutStyles.sectionTitle}>Experience</h3>
            {experience.map((item) => (
              <motion.div 
                key={item.id} 
                style={aboutStyles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div style={aboutStyles.dot} />
                <div style={aboutStyles.timelineContent}>
                  <span style={aboutStyles.year}>{item.year}</span>
                  <h4 style={aboutStyles.position}>{item.position}</h4>
                  <p style={aboutStyles.company}>{item.company}</p>
                  <p style={aboutStyles.description}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 