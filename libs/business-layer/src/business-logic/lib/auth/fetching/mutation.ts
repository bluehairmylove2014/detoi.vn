import {
  AuthService,
  loginResponseType,
  loginParamsType,
  refreshTokenResponseType,
  verifyOtpParamsType,
  verifyOtpResponseType,
} from '@business-layer/services';
import { useMutation } from '@tanstack/react-query';
import { mutationConfig } from '@business-layer/business-logic/configs';

// Initialize the AuthService
const authService = new AuthService();

/**
 * Use this mutation to login
 */
export const useLoginMutation = () => {
  return useMutation<loginResponseType, Error, loginParamsType, unknown>({
    mutationFn: authService.login,
  });
};
export const useRefreshTokenMutation = () => {
  return useMutation<refreshTokenResponseType, Error, string, unknown>({
    mutationFn: authService.refreshToken,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation<
    verifyOtpResponseType,
    Error,
    verifyOtpParamsType,
    unknown
  >({
    mutationFn: authService.verifyPasswordOtp,
    retry: mutationConfig.MUTATION_RETRY,
  });
};
