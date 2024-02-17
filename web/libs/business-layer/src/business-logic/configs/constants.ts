// import { generateSecureHash } from '../helper';

import { generateSecureHash } from '../helper';

export const LOCAL_STORAGE_KEYS = {
  AD_REPORT: generateSecureHash('AD_REPORT_LOCAL'),
  LOCATION_REPORT: generateSecureHash('LOCATION_REPORT_LOCAL'),
  FORGOT_PSW_EMAIL: generateSecureHash('FPSWEMAIL'),
  REGIONS: generateSecureHash('regions'),
};
export const COOKIE_KEYS = {
  ACCESS_TOKEN: generateSecureHash('token'),
  REFRESH_TOKEN: generateSecureHash('refresh_token'),
  REGIONS: generateSecureHash('regions'),
};
export enum QUERY_N_MUTATION_KEYS {
  GET_ALL_PRODUCTS,
  GET_ALL_ADS,
  GET_IP_LOCATION,
  GET_ALL_OFFICER_ADS,
  GET_OFFICER_AD_DETAIL,
  GET_REGIONS,
  GET_ALL_AD_MODIFICATION_REQUESTS,
  GET_ALL_AD_CREATION_REQUESTS,
  GET_ALL_ACCOUNTS,
  GET_PERSONAL_INFO,
  GET_ALL_OFFICER_REPORT,
  GET_ALL_OFFICER_AD_BOARD,
}
