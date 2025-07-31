import { CSSProperties } from 'react';

export const servicesStyles: Record<string, CSSProperties> = {
  section: {
    padding: '4rem 0',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },

  header: {
    textAlign: 'center' as const,
    marginBottom: '3rem'
  },

  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '1rem'
  },

  highlight: {
    color: '#99c9d9'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px'
  },

  card: {
    backgroundColor: '#000000',
    borderRadius: '0.5rem',
    padding: '0rem 2rem 2rem 2rem',
    border: '1px solid #1a1a1a',
    minHeight: '320px',
    position: 'relative' as const,
    overflow: 'hidden',
    textAlign: 'center' as const
  },

  icon: {
    color: '#99c9d9',
    marginTop: '2rem',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '1rem'
  },

  description: {
    color: '#f2f5f6e8',
    lineHeight: '1.6',
    fontSize: '0.875rem'
  }
}; 