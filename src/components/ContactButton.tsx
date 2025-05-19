import React from 'react';
import clsx from 'clsx';
import { useContactModal } from '../hooks/useContactModal';
import ContactModal from './ContactModal';

type ContactButtonProps = {
  title: string;
  buttonText: string;
  className?: string;
  primary?: boolean;
};

export default function ContactButton({ 
  title, 
  buttonText, 
  className,
  primary = true,
}: ContactButtonProps) {
  const { modalState, openModal, closeModal } = useContactModal();

  return (
    <>
      <button
        className={clsx(
          'button',
          primary ? 'button--primary' : 'button--secondary',
          className
        )}
        onClick={() => openModal(title)}
      >
        {buttonText}
      </button>
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
      />
    </>
  );
} 