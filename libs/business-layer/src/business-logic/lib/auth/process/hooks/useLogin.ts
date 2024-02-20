// Importing necessary modules and functions
import { loginResponseType, loginParamsType } from '../../../../../services';
import { useLoginMutation } from '../../fetching/mutation';

type UseLoginType = {
  onLogin: (params: loginParamsType) => Promise<string>;
  isLoading: boolean;
};
export const useLogin = (): UseLoginType => {
  // Defining the login mutation
  const loginMutation = useLoginMutation();

  const onLogin = ({ phone }: loginParamsType): Promise<string> => {
    return new Promise((resolve, reject) => {
      loginMutation
        .mutateAsync({ phone })
        .then((response: loginResponseType) => {
          resolve(response.message);
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
