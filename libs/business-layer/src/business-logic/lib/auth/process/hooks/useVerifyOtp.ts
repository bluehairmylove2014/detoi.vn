// Importing necessary modules and functions
import { verifyOtpParamsType } from '@business-layer/services';
import { useVerifyOtpMutation } from '../../fetching/mutation';
import { useAccessToken } from './useAccessToken';
import { useHandleRefreshToken } from './useHandleRefreshToken';

type useVerifyPasswordOtpType = {
  onVerifyPasswordOtp: ({ phone, otp }: verifyOtpParamsType) => Promise<string>;
  isLoading: boolean;
};
export const useVerifyPasswordOtp = (): useVerifyPasswordOtpType => {
  const verifyOtpMutation = useVerifyOtpMutation();
  const { setToken } = useAccessToken();
  const { setRefreshToken } = useHandleRefreshToken();

  const onVerifyPasswordOtp = ({
    phone,
    otp,
  }: verifyOtpParamsType): Promise<string> => {
    return new Promise((resolve, reject) => {
      verifyOtpMutation
        .mutateAsync({ phone, otp })
        .then(({ token, refreshToken, message }) => {
          setToken(token);
          setRefreshToken(refreshToken);
          resolve(message);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    onVerifyPasswordOtp,
    isLoading: verifyOtpMutation.isPending,
  };
};
