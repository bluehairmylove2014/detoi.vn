import React from 'react';
import { ContextProvider } from './ContextProvider';

export type paginationProviderType = {
  children: React.ReactNode;
};
export const PaginationProvider: React.FC<paginationProviderType> = ({
  children,
}) => {
  return <ContextProvider>{children}</ContextProvider>;
};
