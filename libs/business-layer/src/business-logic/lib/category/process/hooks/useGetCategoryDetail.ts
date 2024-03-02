import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetCategoryDetailQuery } from '../../fetching/query';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { getCategoryDetailResponseType } from '@business-layer/services';

type useGetCategoryDetailType = {
  data: getCategoryDetailResponseType | undefined;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<getCategoryDetailResponseType, Error>>;
};
export const useGetCategoryDetail = (
  categoryId: string
): useGetCategoryDetailType => {
  const { state } = useAuthContext();
  const { data, refetch } = useGetCategoryDetailQuery({
    token: state.token,
    categoryId,
  });
  return {
    data,
    refetch,
  };
};
