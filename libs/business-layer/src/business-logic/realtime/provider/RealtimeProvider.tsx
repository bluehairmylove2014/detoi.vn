import React from 'react';
import { ContextProvider } from './ContextProvider';
import 'react-native-url-polyfill/auto';

export type realtimeProviderType = {
  children: React.ReactNode;
};
export const RealtimeProvider: React.FC<realtimeProviderType> = ({
  children,
}) => {
  return <ContextProvider>{children}</ContextProvider>;
};
