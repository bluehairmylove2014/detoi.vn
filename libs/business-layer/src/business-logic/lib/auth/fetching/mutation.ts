import {
  AuthService,
  loginResponseType,
  loginParamsType,
  refreshTokenResponseType,
  verifyOtpParamsType,
  verifyOtpResponseType,
  resendOtpResponseType,
  resendOtpParamsType,
} from '@business-layer/services';
import { useMutation } from '@tanstack/react-query';
import { mutationConfig } from '@business-layer/business-logic/configs';

// Initialize the AuthService
const authService = new AuthService();

export const useLoginMutation = () => {
  return useMutation<loginResponseType, Error, loginParamsType, unknown>({
    mutationFn: authService.login,
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation<
    verifyOtpResponseType,
    Error,
    verifyOtpParamsType,
    unknown
  >({
    mutationFn: authService.verifyOtp,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useResendOtpMutation = () => {
  return useMutation<
    resendOtpResponseType,
    Error,
    resendOtpParamsType,
    unknown
  >({
    mutationFn: authService.resendOtp,
  });
};

export const useRefreshTokenMutation = () => {
  return useMutation<refreshTokenResponseType, Error, string, unknown>({
    mutationFn: authService.refreshToken,
    retry: mutationConfig.MUTATION_RETRY,
  });
};
