import { CSSProperties } from 'react';

export const contactStyles: Record<string, CSSProperties> = {
  formContainer: {
    border: '1px solid #726a6a',
    borderRadius: '12px',
    padding: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
    background: '#1e2025'
  },
  
  headerContainer: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  
  headerTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#99c9d9',
    marginBottom: '8px'
  },
  
  headerSubtitle: {
    color: '#9ca3af',
    fontSize: '16px'
  },
  
  inputStyles: {
    width: '100%',
    padding: '16px 24px',
    borderRadius: '16px',
    backgroundColor: '#23262b',
    color: 'white',
    border: '1px solid #374151',
    fontSize: '16px',
    marginBottom: '20px'
  },
  
  labelStyles: {
    display: 'block',
    color: '#e5e7eb',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px'
  },
  
  textareaStyles: {
    width: '100%',
    padding: '16px 24px',
    borderRadius: '16px',
    backgroundColor: '#23262b',
    color: 'white',
    border: '1px solid #374151',
    fontSize: '16px',
    marginBottom: '20px',
    resize: 'none' as const,
    minHeight: '150px'
  },
  
  buttonStyles: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#99c9d9',
    color: 'white',
    borderRadius: '16px',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px'
  }
}; 