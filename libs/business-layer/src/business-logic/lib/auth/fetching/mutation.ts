import {
  AuthService,
  authenticationResponseType,
  loginParamsType,
  refreshTokenResponseType,
  SocialService,
  messageResponseType,
  changePasswordParamsType,
  forgotPasswordParamsType,
  verifyPasswordOtpParamsType,
  resetPasswordParamsType,
  registerResponseType,
  registerParamsType,
} from '@business-layer/services';
import { useMutation } from '@tanstack/react-query';
import { mutationConfig } from '@business-layer/business-logic/configs';
import {
  getFBAccessTokenParamsType,
  getFBAccessTokenResponseType,
  getGithubAccessTokenParamsType,
  getGithubAccessTokenResponseType,
  getGithubUserInfoResponseType,
  getUserInfoResponseType,
  updateAccountParamsType,
  updateAccountResponseType,
} from '@business-layer/services/lib/socialService/type';

// Initialize the AuthService
const authService = new AuthService();
const socialService = new SocialService();

/**
 * Use this mutation to login
 */
export const useLoginMutation = () => {
  return useMutation<
    authenticationResponseType,
    Error,
    loginParamsType,
    unknown
  >({
    mutationFn: authService.login,
  });
};
export const useRegisterMutation = () => {
  return useMutation<registerResponseType, Error, registerParamsType, unknown>({
    mutationFn: authService.register,
  });
};

export const useRefreshTokenMutation = () => {
  return useMutation<refreshTokenResponseType, Error, string, unknown>({
    mutationFn: authService.refreshToken,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useUpdateAccountMutation = () => {
  return useMutation<
    updateAccountResponseType,
    Error,
    updateAccountParamsType,
    unknown
  >({
    mutationFn: socialService.updateAccount,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useGetFBAccessTokenMutation = () => {
  return useMutation<
    getFBAccessTokenResponseType,
    Error,
    getFBAccessTokenParamsType,
    unknown
  >({
    mutationFn: socialService.getFBAccessToken,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useGetFBUserInfoMutation = () => {
  return useMutation<getUserInfoResponseType, Error, string, unknown>({
    mutationFn: socialService.getFBUserInfo,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useGetGithubAccessTokenMutation = () => {
  return useMutation<
    getGithubAccessTokenResponseType,
    Error,
    getGithubAccessTokenParamsType,
    unknown
  >({
    mutationFn: socialService.getGithubAccessToken,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useGetGithubUserInfoMutation = () => {
  return useMutation<getGithubUserInfoResponseType, Error, string, unknown>({
    mutationFn: socialService.getGithubUserInfo,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useChangePasswordMutation = () => {
  return useMutation<
    messageResponseType,
    Error,
    changePasswordParamsType,
    unknown
  >({
    mutationFn: authService.changePassword,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation<
    messageResponseType,
    Error,
    forgotPasswordParamsType,
    unknown
  >({
    mutationFn: authService.forgotPassword,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useVerifyPasswordOtpMutation = () => {
  return useMutation<
    messageResponseType,
    Error,
    verifyPasswordOtpParamsType,
    unknown
  >({
    mutationFn: authService.verifyPasswordOtp,
    retry: mutationConfig.MUTATION_RETRY,
  });
};

export const useResetPasswordMutation = () => {
  return useMutation<
    messageResponseType,
    Error,
    resetPasswordParamsType,
    unknown
  >({
    mutationFn: authService.resetPassword,
    retry: mutationConfig.MUTATION_RETRY,
  });
};
