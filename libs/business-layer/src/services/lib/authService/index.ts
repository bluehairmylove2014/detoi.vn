import {
  loginEndpoint,
  officerChangePasswordEndpoint,
  officerForgotPasswordEndpoint,
  officerResetPasswordEndpoint,
  verifyOtpEndpoint,
  refreshTokenEndpoint,
  registerEndpoint,
} from '../../config/apis';
import { Services } from '../../service';
import {
  loginResponseSchema,
  messageResponseSchema,
  refreshTokenResponseSchema,
  registerResponseSchema,
  verifyOtpResponseSchema,
} from './schema';
import {
  loginParamsType,
  loginResponseType,
  verifyOtpParamsType,
  verifyOtpResponseType,
  refreshTokenResponseType,
  changePasswordParamsType,
  messageResponseType,
  forgotPasswordParamsType,
  resetPasswordParamsType,
  registerParamsType,
  registerResponseType,
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

  register = async ({
    data,
    token,
  }: registerParamsType): Promise<registerResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof registerResponseSchema,
        registerResponseType
      >({
        method: 'POST',
        url: registerEndpoint,
        schema: registerResponseSchema,
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  changePassword = async ({
    data,
    token,
  }: changePasswordParamsType): Promise<messageResponseType> => {
    this.abortController = new AbortController();
    try {
      if (token) {
        const response = await this.fetchApi<
          typeof messageResponseSchema,
          messageResponseType
        >({
          method: 'POST',
          url: officerChangePasswordEndpoint,
          schema: messageResponseSchema,
          data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: this.abortController.signal,
          transformResponse: (res) => res,
        });
        return response;
      } else {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      throw this.handleError(error);
    }
  };

  forgotPassword = async (
    data: forgotPasswordParamsType
  ): Promise<messageResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof messageResponseSchema,
        messageResponseType
      >({
        method: 'POST',
        url: officerForgotPasswordEndpoint,
        schema: messageResponseSchema,
        data,
        signal: this.abortController.signal,
        transformResponse: (res) => res,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  };

  resetPassword = async (
    data: resetPasswordParamsType
  ): Promise<messageResponseType> => {
    this.abortController = new AbortController();
    try {
      const response = await this.fetchApi<
        typeof messageResponseSchema,
        messageResponseType
      >({
        method: 'POST',
        url: officerResetPasswordEndpoint,
        schema: messageResponseSchema,
        data,
        signal: this.abortController.signal,
        transformResponse: (res) => res,
      });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  };
}
