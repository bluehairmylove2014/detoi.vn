import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetServiceDetailQuery } from '../../fetching/query';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { getServiceDetailResponseType } from '@business-layer/services';

type useGetServiceDetailType = {
  data: getServiceDetailResponseType | undefined;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<getServiceDetailResponseType, Error>>;
};
export const useGetServiceDetail = (
  serviceId: string
): useGetServiceDetailType => {
  const { state } = useAuthContext();
  const { data, refetch } = useGetServiceDetailQuery({
    token: state.token,
    serviceId,
  });
  return {
    data,
    refetch,
  };
};
