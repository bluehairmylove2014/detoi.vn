// Importing necessary modules and functions
import { useVerifyOtpMutation } from '../../fetching/mutation';
import { useAccessToken } from './useAccessToken';
import { useHandleRefreshToken } from './useHandleRefreshToken';
import { useAuthContext } from '../context';

type useVerifyPasswordOtpType = {
  onVerifyOtp: ({
    otp,
    phoneNumber,
  }: {
    otp: string;
    phoneNumber?: string;
  }) => Promise<string>;
  isLoading: boolean;
};
export const useVerifyOtp = (): useVerifyPasswordOtpType => {
  const verifyOtpMutation = useVerifyOtpMutation();
  const { setToken } = useAccessToken();
  const { setRefreshToken } = useHandleRefreshToken();
  const { state, dispatch } = useAuthContext();

  const onVerifyOtp = ({
    otp,
    phoneNumber,
  }: {
    otp: string;
    phoneNumber?: string;
  }): Promise<string> => {
    return new Promise((resolve, reject) => {
      const phone = phoneNumber ?? state.onOtpPhoneNumber;
      console.log({ phone, otp });
      if (phone) {
        verifyOtpMutation
          .mutateAsync({ phone, otp })
          .then(({ token, refreshToken, message }) => {
            setToken(token);
            setRefreshToken(refreshToken);
            dispatch({
              type: 'SET_ON_OTP_PHONE_NUMBER',
              payload: null,
            });

            resolve(message);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject(new Error('Phone number is not valid'));
      }
    });
  };

  return {
    onVerifyOtp,
    isLoading: verifyOtpMutation.isPending,
  };
};
