// Importing necessary modules and functions
import { useResendOtpMutation } from '../../fetching/mutation';
import { useAuthContext } from '../context';

type useResendOtpType = {
  onResendOtp: () => Promise<string>;
  isLoading: boolean;
};
export const useResendOtp = (): useResendOtpType => {
  const resendOtpMutation = useResendOtpMutation();
  const { state } = useAuthContext();

  const onResendOtp = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const phone = state.onOtpPhoneNumber;
      if (phone) {
        resendOtpMutation
          .mutateAsync({ phone })
          .then((res) => {
            resolve(res.message);
          })
          .catch((error) => {
            // Rejecting the promise in case of an error
            reject(error);
          });
      } else {
        reject(new Error('Phone number is not valid'));
      }
    });
  };

  // Returning the onLogin function and the loading state
  return {
    onResendOtp,
    isLoading: resendOtpMutation.isPending,
  };
};
