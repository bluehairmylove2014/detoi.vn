// Importing necessary modules and functions
import { loginResponseType, loginParamsType } from '../../../../../services';
import { useLoginMutation } from '../../fetching/mutation';
import { useAuthContext } from '../context';

type UseLoginType = {
  onLogin: ({ phone }: loginParamsType) => Promise<string>;
  isLoading: boolean;
};
export const useLogin = (): UseLoginType => {
  const { dispatch } = useAuthContext();
  const loginMutation = useLoginMutation();

  const onLogin = ({ phone }: loginParamsType): Promise<string> => {
    return new Promise((resolve, reject) => {
      loginMutation
        .mutateAsync({ phone })
        .then(({ message }: loginResponseType) => {
          console.log('DISPATCH: ', dispatch, ' TO: ', phone);
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

  // Returning the onLogin function and the loading state
  return {
    onLogin,
    isLoading: loginMutation.isPending,
  };
};
