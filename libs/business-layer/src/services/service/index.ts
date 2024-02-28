import { ZodSchema } from 'zod';
import { axios, isAxiosError, isCancel } from '../config/axios';
import { getApiUrl } from '../config/url';
const unknownError: string = 'Unexpected error occurred';
export class Services {
  abortController?: AbortController;

  cancelRequest(): void {
    this.abortController && this.abortController.abort();
  }

  handleError(error: any): Error {
    // console.error('service error: ', error);
    if (isCancel(error)) {
      this.cancelRequest();
      return error;
    }
    if (error?.name && error.name === 'ZodError') {
      console.error(error);
      return new Error(unknownError);
    } else {
      return new Error(
        isAxiosError(error)
          ? error?.response?.data?.message ?? unknownError
          : unknownError
      );
    }
  }

  async fetchApi<U extends ZodSchema<any>, T>({
    method,
    url,
    schema,
    params,
    data,
    headers = {},
    signal,
    transformResponse,
    isProduction,
    isUseProxy,
    withCredentials = false,
  }: {
    method: string;
    url: string;
    schema: U;
    params?: any;
    data?: any;
    headers?: any;
    signal: AbortSignal;
    transformResponse: (res: T) => void;
    isProduction?: boolean;
    isUseProxy?: boolean;
    withCredentials?: boolean;
  }): Promise<any> {
    const mockParams = {
      method,
      url: isUseProxy ? url : getApiUrl(isProduction) + url,
      data,
      params,
      headers,
      signal,
      withCredentials,
    };
    const response = await axios(mockParams);
    console.log('RECEIVE: ', response.data.message);
    const dataResponse = schema.parse(response.data);

    return transformResponse(dataResponse);
  }
}
