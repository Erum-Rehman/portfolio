import { CSSProperties } from 'react';

export const heroStyles: Record<string, CSSProperties> = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '120px 0 80px',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center'
  },

  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem'
  },

  subtitle: {
    fontSize: '1.5rem',
    color: '#99c9d9',
    fontWeight: '600'
  },

  title: {
    fontSize: '3.5rem',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '1rem'
  },

  highlight: {
    background: 'linear-gradient(135deg, #99c9d9 0%, #0099cc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },

  description: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    lineHeight: '1.7',
    marginBottom: '2rem'
  },

  buttons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem'
  },

  primaryButton: {
    background: 'linear-gradient(135deg, #99c9d9 0%, #0099cc 100%)',
    color: '#000',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease'
  },

  secondaryButton: {
    background: 'transparent',
    color: '#99c9d9',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    border: '2px solid #99c9d9',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease'
  },

  socialLinks: {
    display: 'flex',
    gap: '1rem'
  },

  socialLink: {
    color: '#94a3b8',
    transition: 'all 0.3s ease'
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  profileImage: {
    width: '350px',
    height: '350px',
    background: 'linear-gradient(135deg, #99c9d9 0%, #0099cc 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    fontWeight: '700',
    color: '#000',
    position: 'relative' as const
  },

  imageGlow: {
    position: 'absolute' as const,
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    background: 'linear-gradient(135deg, #99c9d9 0%, #0099cc 100%)',
    borderRadius: '50%',
    filter: 'blur(20px)',
    opacity: '0.3',
    zIndex: -1
  }
}; 