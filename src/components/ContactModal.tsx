import React from 'react';
import { createPortal } from 'react-dom';
import styles from './ContactModal.module.css';
import ContactForm from './ContactForm';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export default function ContactModal({ isOpen, onClose, title }: ContactModalProps) {
  if (!isOpen) return null;

  // Only render in browser environment
  if (typeof window === 'undefined') return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>{title}</h2>
        <ContactForm />
      </div>
    </div>,
    document.body
  );
} 