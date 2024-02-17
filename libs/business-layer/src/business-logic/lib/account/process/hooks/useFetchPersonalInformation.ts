// Import necessary modules and functions
import { useFetchPersonalInformationQuery } from '../../fetching/query';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { getToken } from '@business-layer/business-logic/lib/auth/process/hooks/useAccessToken';
import { IAccountDetail } from '@business-layer/services/entities';

type useFetchPersonalInformationReturnType = {
  data: IAccountDetail | undefined;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IAccountDetail, Error>>;
};
export const useFetchPersonalInformation =
  (): useFetchPersonalInformationReturnType => {
    const { data, refetch } = useFetchPersonalInformationQuery(getToken());
    return { data, refetch };
  };
