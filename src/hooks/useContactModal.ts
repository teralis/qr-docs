import { useState } from 'react';

export type ContactModalState = {
  isOpen: boolean;
  title: string;
};

export function useContactModal() {
  const [modalState, setModalState] = useState<ContactModalState>({
    isOpen: false,
    title: '',
  });

  const openModal = (title: string) => {
    setModalState({ isOpen: true, title });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, title: '' });
  };

  return {
    modalState,
    openModal,
    closeModal,
  };
} 