// Import necessary modules and functions
import { useModifyAccountInfoMutation } from '../../fetching/mutation';
import { accountInfoToModifyType } from '@business-layer/services';
import { getToken } from '@business-layer/business-logic/lib/auth/process/hooks/useAccessToken';

type useModifyAccountInfoReturnType = {
  onModifyAccountInfo: (data: accountInfoToModifyType) => Promise<string>;
  isLoading: boolean;
};
export const useModifyAccountInfo = (): useModifyAccountInfoReturnType => {
  const modifyAccountInfoMutation = useModifyAccountInfoMutation();

  const onModifyAccountInfo = (
    data: accountInfoToModifyType
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      modifyAccountInfoMutation
        .mutateAsync({ data, token: getToken() })
        .then((data) => resolve(data.message))
        .catch((error) => reject(error));
    });
  };

  return {
    onModifyAccountInfo,
    isLoading: modifyAccountInfoMutation.isPending,
  };
};
