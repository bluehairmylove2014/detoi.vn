import React, { useReducer } from 'react';
import { BlurThemeContext } from '../context/context';
import { blurThemeReducer } from '../context/reducer';

type ContextProviderType = {
  children: React.ReactNode;
};
export const ContextProvider: React.FC<ContextProviderType> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(blurThemeReducer, {
    isOpened: false,
  });

  return (
    <BlurThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </BlurThemeContext.Provider>
  );
};
