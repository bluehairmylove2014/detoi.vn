import { useMutation } from '@tanstack/react-query';
import {
  AccountService,
  modifyAccountInfoParamsType,
  modifyAccountInfoResponseType,
  unitModifyAccountParamsType,
  unitModifyAccountResponseType,
} from '@business-layer/services';

const accountService = new AccountService();

export const useModifyAccountInfoMutation = () => {
  return useMutation<
    modifyAccountInfoResponseType,
    Error,
    modifyAccountInfoParamsType,
    unknown
  >({
    mutationFn: accountService.modifyAccountInfo,
  });
};

export const useUnitModifyAccountMutation = () => {
  return useMutation<
    unitModifyAccountResponseType,
    Error,
    unitModifyAccountParamsType,
    unknown
  >({
    mutationFn: accountService.unitModifyAccount,
  });
};
