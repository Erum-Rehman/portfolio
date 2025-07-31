import { CSSProperties } from 'react';

export const aboutStyles: { [key: string]: CSSProperties } = {
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
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '20px',
  },
  columns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px',
    alignItems: 'start',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#99c9d9',
    marginBottom: '20px',
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: '30px',
    borderLeft: '2px solid rgba(153, 201, 217, 0.2)',
  },
  dot: {
    position: 'absolute',
    left: '-6px',
    top: '5px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#99c9d9',
  },
  timelineContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid rgba(153, 201, 217, 0.1)',
  },
  year: {
    color: '#99c9d9',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '8px',
    display: 'block',
  },
  degree: {
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '8px',
  },
  position: {
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '8px',
  },
  institution: {
    color: '#94a3b8',
    fontSize: '0.9rem',
  },
  company: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    marginBottom: '8px',
  },
  description: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
}; 