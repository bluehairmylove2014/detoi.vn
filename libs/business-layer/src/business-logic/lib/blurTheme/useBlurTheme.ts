import React, { useState } from 'react';

export const useBlurTheme = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openBlurTheme = () => {
    setIsOpen(true);
  };

  const closeBlurTheme = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openBlurTheme,
    closeBlurTheme,
  };
};
