import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  return (
    <form
      action="https://formspree.io/f/mnndrqqo"
      method="POST"
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
          const form = e.target as HTMLFormElement;
          const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
              Accept: 'application/json',
            },
          });
          
          if (response.ok) {
            setStatus('success');
            form.reset();
          } else {
            throw new Error('Form submission failed');
          }
        } catch (error) {
          setStatus('error');
        }
      }}
    >
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your name"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          placeholder="What's this about?"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your message..."
          rows={5}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={styles.submitButton}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className={styles.successMessage}>
          Thanks for your message! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className={styles.errorMessage}>
          Oops! There was a problem sending your message. Please try again.
        </div>
      )}
    </form>
  );
} 