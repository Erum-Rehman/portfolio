import { CSSProperties } from 'react';

export const footerStyles: Record<string, CSSProperties> = {
  footer: {
    backgroundColor: '#0B1120',
    padding: '2rem 0',
    textAlign: 'center' as const,
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },

  name: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: 'white'
  },

  highlight: {
    color: '#99c9d9'
  },

  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },

  socialIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#1A1F2E',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },

  email: {
    color: '#9CA3AF',
    fontSize: '1rem',
    marginBottom: '1rem'
  },

  copyright: {
    color: '#9CA3AF',
    fontSize: '0.875rem'
  }
}; 