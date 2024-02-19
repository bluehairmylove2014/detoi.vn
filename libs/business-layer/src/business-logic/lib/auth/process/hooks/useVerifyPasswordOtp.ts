// Importing necessary modules and functions
import { verifyPasswordOtpParamsType } from '@business-layer/services';
import { useVerifyPasswordOtpMutation } from '../../fetching/mutation';
import { getEmail } from '../helper/forgotPasswordEmailLS';

type useVerifyPasswordOtpType = {
  onVerifyPasswordOtp: ({
    email,
    otp,
  }: verifyPasswordOtpParamsType) => Promise<string>;
  isLoading: boolean;
};
export const useVerifyPasswordOtp = (): useVerifyPasswordOtpType => {
  const verifyPasswordOtpMutation = useVerifyPasswordOtpMutation();

  const onVerifyPasswordOtp = ({
    otp,
  }: Pick<verifyPasswordOtpParamsType, 'otp'>): Promise<string> => {
    return new Promise((resolve, reject) => {
      const forgotPasswordEmail = getEmail();
      if (!forgotPasswordEmail) {
        reject(
          new Error('Không tìm thấy email, vui lòng quay lại bước nhập email!')
        );
      } else {
        verifyPasswordOtpMutation
          .mutateAsync({ email: forgotPasswordEmail, otp })
          .then((response) => {
            resolve(response.message);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  };

  return {
    onVerifyPasswordOtp,
    isLoading: verifyPasswordOtpMutation.isPending,
  };
};
