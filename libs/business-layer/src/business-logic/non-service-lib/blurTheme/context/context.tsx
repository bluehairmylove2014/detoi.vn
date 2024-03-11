import React from 'react';
import { useContext } from 'react';
import { BlurThemeContextType } from './type';

export const BlurThemeContext = React.createContext<BlurThemeContextType>({
  state: {
    isOpened: false,
  },
  dispatch: () => undefined,
});

export const useBlurThemeContext = () => {
  const context = useContext(BlurThemeContext);
  if (context === undefined) {
    throw new Error(
      'useBlurThemeContext must be used within a BlurThemeProvider'
    );
  }
  return context;
};
