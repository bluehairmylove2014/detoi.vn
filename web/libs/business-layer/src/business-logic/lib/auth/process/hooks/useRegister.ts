// Importing necessary modules and functions
import {
  registerDataType,
  registerParamsType,
  registerResponseType,
} from '../../../../../services';
import { useRegisterMutation } from '../../fetching/mutation';
import { getToken } from './useAccessToken';

type useRegisterType = {
  onRegister: (data: registerDataType) => Promise<string>;
  isLoading: boolean;
};
export const useRegister = (): useRegisterType => {
  const registerMutation = useRegisterMutation();

  const onRegister = (data: registerDataType): Promise<string> => {
    return new Promise((resolve, reject) => {
      const token = getToken();
      if (!token) {
        reject(new Error('Unauthorized'));
      } else {
        registerMutation
          .mutateAsync({ data, token })
          .then((response: registerResponseType) => {
            resolve(response.message);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  };

  return {
    onRegister,
    isLoading: registerMutation.isPending,
  };
};
