'use client';

import { servicesStyles } from '@/styles/services.styles';
import { Code, Terminal, Blocks, Database, Rocket, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "React.js Website",
    description: "Building modern and interactive web applications using React.js. Specializing in component-based architecture, state management, and creating responsive user interfaces with smooth animations.",
    icon: <Code size={40} />
  },
  {
    id: 2,
    title: "Next.js Website",
    description: "Developing high-performance websites with Next.js framework. Implementing server-side rendering, static site generation, and optimized routing for better SEO and user experience.",
    icon: <Terminal size={40} />
  },
  {
    id: 3,
    title: "Fullstack Website",
    description: "Creating end-to-end web solutions using the MERN stack. Handling both frontend and backend development, database design, API integration, and deployment with focus on scalability.",
    icon: <Blocks size={40} />
  },
  {
    id: 4,
    title: "Mobile Applications",
    description: "Developing cross-platform mobile applications using React Native. Building native-like user interfaces, implementing device features, and ensuring smooth performance across different platforms.",
    icon: <Smartphone size={40} />
  },
  {
    id: 5,
    title: "API Development",
    description: "Creating robust and secure RESTful APIs using Node.js and Express. Implementing authentication, data validation, error handling, and following best practices for API design.",
    icon: <Database size={40} />
  },
  {
    id: 6,
    title: "Web Development",
    description: "Full web development services from concept to deployment. Including custom website design, responsive layouts, performance optimization, and ongoing maintenance and support.",
    icon: <Rocket size={40} />
  }
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

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section id="services" style={servicesStyles.section}>
      <div style={servicesStyles.container}>
        <motion.div 
          style={servicesStyles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={servicesStyles.title}>
            POPULAR SERVICES
          </h2>
          <h3 style={servicesStyles.title}>
            My Special <span style={servicesStyles.highlight}>Services</span> For You
          </h3>
        </motion.div>

        <motion.div 
          style={servicesStyles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              style={servicesStyles.card}
              variants={item}
              whileHover={{ scale: 1.02, borderColor: 'rgba(153, 201, 217, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div style={servicesStyles.icon}>{service.icon}</div>
              <h3 style={servicesStyles.cardTitle}>{service.title}</h3>
              <p style={servicesStyles.description}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
