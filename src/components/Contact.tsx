'use client';

import { useState } from 'react';
import { contactStyles } from '@/styles/contact.styles';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("PlocIOi4ObUy4PYDh");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_h483bv4',
        'template_pqi1ayg',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={contactStyles.formContainer}>
          <div style={contactStyles.headerContainer}>
            <h2 style={contactStyles.headerTitle}>Reach Out</h2>
            <p style={contactStyles.headerSubtitle}>
              Wanna ask something?? Write here...
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label style={contactStyles.labelStyles}>NAME*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={contactStyles.inputStyles}
                required
              />
            </div>
            <div>
              <label style={contactStyles.labelStyles}>EMAIL*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={contactStyles.inputStyles}
                required
              />
            </div>
            <div>
              <label style={contactStyles.labelStyles}>MESSAGE*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here..."
                rows={6}
                style={contactStyles.textareaStyles}
                required
              />
            </div>
            <button
              type="submit"
              style={contactStyles.buttonStyles}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
