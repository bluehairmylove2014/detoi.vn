import { isDevelopment } from './axios';
import { authServiceConfig } from './config';

const serverApi = 'https://urashima-ads.azurewebsites.net';
const localApi = 'http://localhost:666/api';

export const getApiUrl = (isProduction?: boolean) => {
  return !isDevelopment() || !authServiceConfig.isMockApi || isProduction
    ? serverApi
    : localApi;
};
