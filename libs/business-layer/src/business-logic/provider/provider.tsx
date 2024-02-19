'use client';
import React from 'react';
import { moduleKeyList, providerConfig } from '../configs';
import QueryProvider from './ReactQueryProvider';

type BusinessLogicProviderType = {
  children: React.ReactNode;
  activeModules: moduleKeyList[];
};
export const BusinessLogicProvider: React.FC<BusinessLogicProviderType> = ({
  children,
  activeModules,
}) => {
  // Create an array includes active providers
  const activeProviders = providerConfig.filter((config) =>
    activeModules.includes(config.key)
  );
  // Wrap children inside active provider
  const renderProviders = (children: React.ReactNode) => {
    return activeProviders.reduce((prevChildren, config) => {
      const Provider = config.provider;
      return <Provider>{prevChildren}</Provider>;
    }, children);
  };

  return <QueryProvider>{renderProviders(children)}</QueryProvider>;
};
