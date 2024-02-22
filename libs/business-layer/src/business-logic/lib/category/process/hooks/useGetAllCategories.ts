import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetAllCategoriesQuery } from '../../fetching/query';
import { ICategory } from '@business-layer/services/entities';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

type useGetAllCategoriesType = {
  data: ICategory[] | undefined;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<ICategory[], Error>>;
};
export const useGetAllCategories = (): useGetAllCategoriesType => {
  const { state } = useAuthContext();
  const { data, refetch } = useGetAllCategoriesQuery(state.token);
  return {
    data,
    refetch,
  };
};
