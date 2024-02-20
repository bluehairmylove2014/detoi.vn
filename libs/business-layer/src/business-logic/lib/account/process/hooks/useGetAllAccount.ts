// Import necessary modules and functions
import { useGetAllAccountsQuery } from '../../fetching/query';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { getAllAccountResponseType } from '@business-layer/services';
import { getToken } from '@business-layer/business-logic/lib/auth/process/hooks/useAccessToken';

type useGetAllAccountReturnType = {
  data: getAllAccountResponseType | undefined;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<getAllAccountResponseType, Error>>;
};
export const useGetAllAccount = (): useGetAllAccountReturnType => {
  const { data, refetch } = useGetAllAccountsQuery(getToken());
  return { data, refetch };
};
