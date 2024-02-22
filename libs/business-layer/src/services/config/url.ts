import { isDevelopment } from './axios';
import { authServiceConfig } from './config';
import { IPv4_ADDRESS } from '@env';

const serverApi = 'http://localhost:8000';
const localApi = `http://${IPv4_ADDRESS}:8000`;

export const getApiUrl = (isProduction?: boolean) => {
  return !isDevelopment() || !authServiceConfig.isMockApi || isProduction
    ? serverApi
    : localApi;
};
