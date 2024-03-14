import { isDevelopment } from './axios';
import { authServiceConfig } from './config';

const IPv4_ADDRESS = process.env.EXPO_PUBLIC_IPv4_ADDRESS;

const serverApi = 'http://localhost:8000';
const localApi = `http://${IPv4_ADDRESS}:8000`;

export const getApiUrl = (isProduction?: boolean) => {
  if (!IPv4_ADDRESS) {
    console.log(
      'IPv4_ADDRESS is not found, please check your .env file. Current value is ',
      `"${IPv4_ADDRESS}"`
    );
  }
  return !isDevelopment() || !authServiceConfig.isMockApi || isProduction
    ? serverApi
    : localApi;
};
