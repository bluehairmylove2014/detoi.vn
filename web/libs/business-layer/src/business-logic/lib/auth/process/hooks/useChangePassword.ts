// Importing necessary modules and functions
import { changePasswordParamsType } from '@business-layer/services';
import { useChangePasswordMutation } from '../../fetching/mutation';
import { getToken } from './useAccessToken';

type useChangePasswordType = {
  onChangePassword: ({
    oldPassword,
    password,
  }: {
    oldPassword: string;
    password: string;
  }) => Promise<string>;
  isLoading: boolean;
};
export const useChangePassword = (): useChangePasswordType => {
  const changePasswordMutation = useChangePasswordMutation();

  const onChangePassword = ({
    oldPassword,
    password,
  }: {
    oldPassword: string;
    password: string;
  }): Promise<string> => {
    return new Promise((resolve, reject) => {
      changePasswordMutation
        .mutateAsync({ data: { oldPassword, password }, token: getToken() })
        .then((response) => {
          resolve(response.message);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    onChangePassword,
    isLoading: changePasswordMutation.isPending,
  };
};
