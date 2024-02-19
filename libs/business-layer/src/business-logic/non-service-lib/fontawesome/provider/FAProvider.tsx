import React from 'react';
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import { NATIVE_ICONS, WEB_ICONS } from '../config';

function getIconListByAppType(appType: string): {
  [key: string]: IconDefinition;
} {
  switch (appType) {
    case 'native':
      return NATIVE_ICONS;
    case 'web':
      return WEB_ICONS;
    default:
      return {};
  }
}

export type APP_TYPE = 'native' | 'web';
export type faProviderType = {
  children: React.ReactNode;
  appType: APP_TYPE;
};
export const FAProvider: React.FC<faProviderType> = ({ children, appType }) => {
  library.add(...Object.values(getIconListByAppType(appType)));
  return <>{children}</>;
};
