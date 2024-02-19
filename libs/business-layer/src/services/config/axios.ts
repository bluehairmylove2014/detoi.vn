import axiosLib, { isAxiosError, AxiosError } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { authServiceConfig } from './config';

function isDevelopment(): boolean {
  return !process.env['NODE_ENV'] || process.env['NODE_ENV'] === 'development';
}

const MOCK_API = {
  DELAY_RESPONSE_MOCK_API: 200,
};
const axiosInstance = axiosLib.create();
const axiosMockInstance = axiosLib.create();
const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, {
  delayResponse: MOCK_API.DELAY_RESPONSE_MOCK_API,
});

const axios =
  authServiceConfig.isMockApi && isDevelopment()
    ? axiosMockInstance
    : axiosInstance;

const isCancel = (error: any): boolean => {
  return axiosLib.isCancel(error);
};

export const getAxiosNormalInstance = () => axiosInstance;

export {
  axios,
  axiosMockInstance,
  axiosMockAdapterInstance,
  AxiosError,
  isCancel,
  isAxiosError,
  isDevelopment,
};
