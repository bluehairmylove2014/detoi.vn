import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { WEB_ICONS } from '../config';

export type faProviderType = {
  children: React.ReactNode;
};
export const FAProvider: React.FC<faProviderType> = ({ children }) => {
  library.add(...Object.values(WEB_ICONS));
  return <>{children}</>;
};
