import React from 'react';
import { ContextProvider } from './ContextProvider';

export type realtimeProviderType = {
  children: React.ReactNode;
};
export const RealtimeProvider: React.FC<realtimeProviderType> = ({
  children,
}) => {
  return <ContextProvider>{children}</ContextProvider>;
};
