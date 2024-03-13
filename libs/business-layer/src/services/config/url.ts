import { isDevelopment } from './axios';
import { authServiceConfig } from './config';
import { IPv4_ADDRESS } from '@env';

const serverApi = 'http://localhost:8000';
const localApi = `http://172.25.32.1:8000`;

export const getApiUrl = (isProduction?: boolean) => {
  if (!IPv4_ADDRESS) {
    console.log(
      'IPv4_ADDRESS is not found, please check your .env file. Current value is ',
      `"${IPv4_ADDRESS}"`
    );
  }
  return !isDevelopment() || !authServiceConfig.isMockApi || isProduction
    ? "http://172.25.32.1:8000"
    : "http://172.25.32.1:8000";
};
