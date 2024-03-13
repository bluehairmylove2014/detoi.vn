import React from 'react';
import { ContextProvider } from './ContextProvider';

export type blurThemeProviderType = {
  children: React.ReactNode;
};
export const BlurThemeProvider: React.FC<blurThemeProviderType> = ({
  children,
}) => {
  return <ContextProvider>{children}</ContextProvider>;
};
