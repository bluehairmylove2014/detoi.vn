// Importing necessary modules and functions
import { resetPasswordParamsType } from '@business-layer/services';
import { useResetPasswordMutation } from '../../fetching/mutation';
import { deleteEmail, getEmail } from '../helper/forgotPasswordEmailLS';

type useResetPasswordType = {
  onResetPassword: ({
    email,
    password,
  }: resetPasswordParamsType) => Promise<string>;
  isLoading: boolean;
};
export const useResetPassword = (): useResetPasswordType => {
  const resetPasswordMutation = useResetPasswordMutation();

  const onResetPassword = ({
    password,
  }: Pick<resetPasswordParamsType, 'password'>): Promise<string> => {
    return new Promise((resolve, reject) => {
      const forgotPasswordEmail = getEmail();
      if (!forgotPasswordEmail) {
        reject(
          new Error('Không tìm thấy email, vui lòng quay lại bước nhập email!')
        );
      } else {
        resetPasswordMutation
          .mutateAsync({ email: forgotPasswordEmail, password })
          .then((response) => {
            resolve(response.message);
            deleteEmail();
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  };

  return {
    onResetPassword,
    isLoading: resetPasswordMutation.isPending,
  };
};
