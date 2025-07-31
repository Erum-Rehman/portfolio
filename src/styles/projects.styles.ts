import { CSSProperties } from 'react';

export const projectsStyles: { [key: string]: CSSProperties } = {
  section: {
    padding: '80px 0',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  highlight: {
    color: '#99c9d9',
  },
  navigation: {
    display: 'flex',
    gap: '20px',
  },
  navButton: {
    backgroundColor: 'rgba(153, 201, 217, 0.1)',
    border: '1px solid rgba(153, 201, 217, 0.2)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#99c9d9',
  },
  slider: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },
  project: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    border: '1px solid rgba(153, 201, 217, 0.1)',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
  },
  content: {
    padding: '24px',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '12px',
  },
  description: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
  },
  tech: {
    backgroundColor: 'rgba(153, 201, 217, 0.1)',
    color: '#99c9d9',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '0.8rem',
  },
  links: {
    display: 'flex',
    gap: '16px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#99c9d9',
    textDecoration: 'none',
  },
}; 