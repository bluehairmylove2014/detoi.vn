// Importing necessary modules and functions
import {
  loginResponseType,
  loginParamsType,
  roles,
} from '../../../../../services';
import { useLoginMutation } from '../../fetching/mutation';
import { useAuthContext } from '../context';

type UseLoginType = {
  onLogin: ({ phone }: Pick<loginParamsType, 'phone'>) => Promise<string>;
  isLoading: boolean;
};
export const useLogin = (): UseLoginType => {
  const { dispatch } = useAuthContext();
  const loginMutation = useLoginMutation();
  const appType: roles = process.env.EXPO_PUBLIC_APP_ROLE as roles;
  if (!appType) {
    console.error('ERROR: Cannot find EXPO_PUBLIC_APP_ROLE');
    return {
      onLogin: () => Promise.reject(new Error('Missing app role')),
      isLoading: false,
    };
  }

  const onLogin = ({
    phone,
  }: Omit<loginParamsType, 'role'>): Promise<string> => {
    return new Promise((resolve, reject) => {
      loginMutation
        .mutateAsync({ phone, role: appType })
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

  return {
    onLogin,
    isLoading: loginMutation.isPending,
  };
};
