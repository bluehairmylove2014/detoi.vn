import React from 'react';
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import {
  CWEB_ICON_LIST,
  CAPP_ICON_LIST,
  FAPP_ICON_LIST,
  AWEB_ICON_LIST,
} from '../config';

function getIconListByAppType(appType: string): {
  [key: string]: IconDefinition;
} {
  switch (appType) {
    case 'customer-web':
      return CWEB_ICON_LIST;
    case 'customer-mobile-app':
      return CAPP_ICON_LIST;
    case 'freelancer-mobile-app':
      return FAPP_ICON_LIST;
    case 'admin-web':
      return AWEB_ICON_LIST;
    default:
      return {};
  }
}

export type APP_TYPE =
  | 'customer-web'
  | 'customer-mobile-app'
  | 'freelancer-mobile-app'
  | 'admin-web';
export type faProviderType = {
  children: React.ReactNode;
  appType: APP_TYPE;
};
export const FAProvider: React.FC<faProviderType> = ({ children, appType }) => {
  library.add(...Object.values(getIconListByAppType(appType)));
  return <>{children}</>;
};
