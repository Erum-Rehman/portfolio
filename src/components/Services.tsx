'use client';

import { servicesStyles } from '@/styles/services.styles';
import { Code, Terminal, Blocks, Database, ShieldCheck, MessageSquare, FlaskConical, LayoutDashboard, Smartphone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building fast, modern and responsive interfaces with React.js and Next.js. Component-based architecture, state management, server-side rendering, SEO-friendly routing and smooth animations.",
    icon: <Code size={40} />
  },
  {
    id: 2,
    title: "Fullstack Web Applications",
    description: "End-to-end web solutions using the MERN stack, Supabase and Firebase. Frontend and backend development, database design, API integration and deployment with focus on scalability.",
    icon: <Blocks size={40} />
  },
  {
    id: 3,
    title: "Authentication & SSO Integration",
    description: "Implementing secure login flows, single sign-on, OAuth/OpenID, session handling and role-based access control for web applications and government-grade portals.",
    icon: <ShieldCheck size={40} />
  },
  {
    id: 4,
    title: "Chat & AI Integration",
    description: "Building real-time chat interfaces and integrating AI assistants into web platforms, from customer conversations to automated ordering and support workflows.",
    icon: <MessageSquare size={40} />
  },
  {
    id: 5,
    title: "Firebase & Supabase Backends",
    description: "Setting up realtime databases, authentication, storage, hosting and serverless logic with Firebase and Supabase for quick, reliable and scalable backends.",
    icon: <Database size={40} />
  },
  {
    id: 6,
    title: "API Development",
    description: "Creating robust and secure RESTful APIs using Node.js and Express. Authentication, data validation, error handling and best practices for API design.",
    icon: <Terminal size={40} />
  },
  {
    id: 7,
    title: "Testing & QA Automation",
    description: "Writing end-to-end and regression tests with Playwright to catch bugs early, protect critical user flows and keep releases stable and reliable.",
    icon: <FlaskConical size={40} />
  },
  {
    id: 8,
    title: "Dashboards & Admin Panels",
    description: "Designing data-heavy dashboards and admin panels with reporting, transaction management and reconciliation workflows for accounting and e-commerce operations.",
    icon: <LayoutDashboard size={40} />
  },
  {
    id: 9,
    title: "Mobile Applications",
    description: "Developing cross-platform mobile applications using React Native with native-like interfaces, device features and smooth performance across platforms.",
    icon: <Smartphone size={40} />
  }
];

const INITIAL_COUNT = 6;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Cards enter from left, bottom and right in turn
const item = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 3 === 0 ? -40 : i % 3 === 2 ? 40 : 0,
    y: i % 3 === 1 ? 40 : 0,
    scale: 0.95
  }),
  show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.5 } },
  hover: {
    scale: 1.03,
    borderColor: 'rgba(153, 201, 217, 0.5)',
    boxShadow: '0 0 30px rgba(153, 201, 217, 0.2)',
    transition: { duration: 0.3 }
  }
};

const iconVariants = {
  show: { rotate: 0, scale: 1 },
  hover: { rotate: [0, -12, 12, 0], scale: 1.2, transition: { duration: 0.5 } }
};

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);

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
          {visibleServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              style={servicesStyles.card}
              custom={index}
              variants={item}
              {...(index >= INITIAL_COUNT && { initial: 'hidden', animate: 'show' })}
              whileHover="hover"
            >
              <motion.div style={servicesStyles.icon} variants={iconVariants}>
                {service.icon}
              </motion.div>
              <h3 style={servicesStyles.cardTitle}>{service.title}</h3>
              <p style={servicesStyles.description}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {services.length > INITIAL_COUNT && (
          <div style={servicesStyles.moreWrapper}>
            <motion.button
              style={servicesStyles.moreButton}
              onClick={() => setShowAll((prev) => !prev)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : `Show All Services (${services.length})`}
              <motion.span
                style={{ display: 'flex' }}
                animate={{ rotate: showAll ? 180 : 0 }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
