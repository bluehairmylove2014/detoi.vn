import { isDevelopment } from './axios';
import { authServiceConfig } from './config';
import Config from 'react-native-config';

const { IPv4_ADDRESS } = Config;

const serverApi = 'http://localhost:8000';
const localApi = `http://192.168.1.9:8000`;

export const getApiUrl = (isProduction?: boolean) => {
  // console.log(Config);
  // if (!IPv4_ADDRESS) {
  //   console.log(
  //     'IPv4_ADDRESS is not found, please check your .env file. Current value is ',
  //     `"${IPv4_ADDRESS}"`
  //   );
  // }
  return !isDevelopment() || !authServiceConfig.isMockApi || isProduction
    ? serverApi
    : localApi;
};
