import { isDevelopment } from './axios';
import { authServiceConfig } from './config';

const serverApi = 'http://localhost:8000';
const localApi = 'http://192.168.1.8:8000'; // 192.168.1.8 is your IPv4

export const getApiUrl = (isProduction?: boolean) => {
  return !isDevelopment() || !authServiceConfig.isMockApi || isProduction
    ? serverApi
    : localApi;
};
