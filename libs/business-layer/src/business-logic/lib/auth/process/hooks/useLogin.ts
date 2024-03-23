// Importing necessary modules and functions
import {
  loginResponseType,
  loginParamsType,
  roles,
} from '../../../../../services';
import { useLoginMutation } from '../../fetching/mutation';
import { useAuthContext } from '../context';

type UseLoginType = {
  onCustomerLogin: ({
    phone,
  }: Pick<loginParamsType, 'phone'>) => Promise<string>;
  onFreelancerLogin: ({
    phone,
  }: Pick<loginParamsType, 'phone'>) => Promise<string>;
  isLoading: boolean;
};
export const useLogin = (): UseLoginType => {
  const { dispatch } = useAuthContext();
  const loginMutation = useLoginMutation();
  const appType = process.env.EXPO_PUBLIC_APP_ROLE;
  if (typeof appType === 'undefined') {
    console.error('ERROR: Cannot find EXPO_PUBLIC_APP_ROLE');
  }

  const onLogin = ({ phone, role }: loginParamsType): Promise<string> => {
    return new Promise((resolve, reject) => {
      loginMutation
        .mutateAsync({ phone, role })
        .then(({ message }: loginResponseType) => {
          dispatch({
            type: 'SET_ON_OTP_PHONE_NUMBER',
            payload: phone,
          });
          resolve(message);
        })
        .catch((error) => {
          // Rejecting the promise in case of an error
          reject(error);
        });
    });
  };
  const onFreelancerLogin = ({ phone }: Pick<loginParamsType, 'phone'>) =>
    onLogin({ phone, role: appType as roles });
  const onCustomerLogin = ({ phone }: Pick<loginParamsType, 'phone'>) =>
    onLogin({ phone, role: appType as roles });

  return {
    onCustomerLogin,
    onFreelancerLogin,
    isLoading: loginMutation.isPending,
  };
};
