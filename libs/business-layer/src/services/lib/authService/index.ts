import {
  customerLoginEndpoint,
  verifyOtpEndpoint,
  refreshTokenEndpoint,
  resendOtpEndpoint,
  freelancerLoginEndpoint,
} from '../../config/apis';
import { Services } from '../../service';
import {
  loginResponseSchema,
  refreshTokenResponseSchema,
  resendOtpResponseSchema,
  verifyOtpResponseSchema,
} from './schema';
import {
  loginParamsType,
  loginResponseType,
  verifyOtpParamsType,
  verifyOtpResponseType,
  refreshTokenResponseType,
  resendOtpResponseType,
  resendOtpParamsType,
  roles,
} from './type';

export * from './type';
export class AuthService extends Services {
  login = async ({
    phone,
    role,
  }: loginParamsType): Promise<loginResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof loginResponseSchema,
        loginResponseType
      >({
        method: 'POST',
        url:
          role === 'customer' ? customerLoginEndpoint : freelancerLoginEndpoint,
        schema: loginResponseSchema,
        data: { phone },
        signal: this.abortController.signal,
        transformResponse: (res) => res,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  };

  verifyOtp = async (
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

  resendOtp = async (
    data: resendOtpParamsType
  ): Promise<resendOtpResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof resendOtpResponseSchema,
        resendOtpResponseType
      >({
        method: 'POST',
        url: resendOtpEndpoint,
        schema: resendOtpResponseSchema,
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
