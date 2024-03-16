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
  const { data, refetch } = useGetAllCategoriesQuery();
  return {
    data,
    refetch,
  };
};
