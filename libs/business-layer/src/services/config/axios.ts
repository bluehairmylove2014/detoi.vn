import axiosLib, { isAxiosError, AxiosError } from 'axios';

function isDevelopment(): boolean {
  return !process.env['NODE_ENV'] || process.env['NODE_ENV'] === 'development';
}

const axiosInstance = axiosLib.create();

const isCancel = (error: any): boolean => {
  return axiosLib.isCancel(error);
};

export {
  axiosInstance as axios,
  AxiosError,
  isCancel,
  isAxiosError,
  isDevelopment,
};
