// Import necessary modules and functions
import { useUnitModifyAccountMutation } from '../../fetching/mutation';
import { getToken } from '@business-layer/business-logic/lib/auth/process/hooks/useAccessToken';
import { IAccountDetail } from '@business-layer/services/entities';

type useUnitModifyAccountReturnType = {
  onUnitModifyAccount: (data: IAccountDetail) => Promise<string>;
  isLoading: boolean;
};
export const useUnitModifyAccount = (): useUnitModifyAccountReturnType => {
  const unitModifyAccountMutation = useUnitModifyAccountMutation();

  const onUnitModifyAccount = (data: IAccountDetail): Promise<string> => {
    return new Promise((resolve, reject) => {
      unitModifyAccountMutation
        .mutateAsync({ data, token: getToken() })
        .then((data) => resolve(data.message))
        .catch((error) => reject(error));
    });
  };

  return {
    onUnitModifyAccount,
    isLoading: unitModifyAccountMutation.isPending,
  };
};
