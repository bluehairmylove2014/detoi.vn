// Importing necessary modules and functions
import { forgotPasswordParamsType } from '@business-layer/services';
import { useForgotPasswordMutation } from '../../fetching/mutation';
import { setEmail } from '../helper/forgotPasswordEmailLS';

type useForgotPasswordType = {
  onForgotPassword: ({ email }: forgotPasswordParamsType) => Promise<string>;
  isLoading: boolean;
};
export const useForgotPassword = (): useForgotPasswordType => {
  const forgotPasswordMutation = useForgotPasswordMutation();

  const onForgotPassword = ({
    email,
  }: forgotPasswordParamsType): Promise<string> => {
    return new Promise((resolve, reject) => {
      forgotPasswordMutation
        .mutateAsync({
          email,
        })
        .then((response) => {
          resolve(response.message);
          setEmail(email);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    onForgotPassword,
    isLoading: forgotPasswordMutation.isPending,
  };
};
