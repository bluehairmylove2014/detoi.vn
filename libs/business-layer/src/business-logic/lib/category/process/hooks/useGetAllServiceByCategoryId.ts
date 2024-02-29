import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetAllServiceByCategoryIdQuery } from '../../fetching/query';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { getAllServicesOfCategoryResponseType } from '@business-layer/services';

type useGetAllServiceByCategoryIdType = {
  data: getAllServicesOfCategoryResponseType | undefined;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<
    QueryObserverResult<getAllServicesOfCategoryResponseType, Error>
  >;
};
export const useGetAllServiceByCategoryId = (
  categoryId: string
): useGetAllServiceByCategoryIdType => {
  const { state } = useAuthContext();
  const { data, refetch } = useGetAllServiceByCategoryIdQuery({
    token: state.token,
    categoryId,
  });
  return {
    data,
    refetch,
  };
};
