import {
  loginEndpoint,
  verifyOtpEndpoint,
  refreshTokenEndpoint,
} from '../../config/apis';
import { Services } from '../../service';
import {
  loginResponseSchema,
  refreshTokenResponseSchema,
  verifyOtpResponseSchema,
} from './schema';
import {
  loginParamsType,
  loginResponseType,
  verifyOtpParamsType,
  verifyOtpResponseType,
  refreshTokenResponseType,
} from './type';

export * from './type';
export class AuthService extends Services {
  login = async (data: loginParamsType): Promise<loginResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof loginResponseSchema,
        loginResponseType
      >({
        method: 'POST',
        url: loginEndpoint,
        schema: loginResponseSchema,
        data,
        signal: this.abortController.signal,
        transformResponse: (res) => res,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  };

  verifyPasswordOtp = async (
    data: verifyOtpParamsType
  ): Promise<verifyOtpResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof verifyOtpResponseSchema,
        verifyOtpResponseType
      >({
        method: 'POST',
        url: verifyOtpEndpoint,
        schema: verifyOtpResponseSchema,
        data,
        signal: this.abortController.signal,
        transformResponse: (res) => res,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  };

  refreshToken = async (
    refreshToken: string
  ): Promise<refreshTokenResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof refreshTokenResponseSchema,
        refreshTokenResponseType
      >({
        method: 'POST',
        url: refreshTokenEndpoint,
        schema: refreshTokenResponseSchema,
        data: { refreshToken },
        signal: this.abortController.signal,
        transformResponse: (res) => res,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  };
}
