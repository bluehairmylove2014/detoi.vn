import { useQuery } from '@tanstack/react-query';
import { QUERY_N_MUTATION_KEYS } from '@business-layer/business-logic/configs';
import { CategoryService } from '@business-layer/services';

const categoryService = new CategoryService();

export const useGetAllCategoriesQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_ALL_CATEGORIES, token],
    queryFn: () => categoryService.getAllCategory({ token }),
  });
};
