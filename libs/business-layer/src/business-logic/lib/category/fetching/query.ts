import { useQuery } from '@tanstack/react-query';
import { QUERY_N_MUTATION_KEYS } from '@business-layer/business-logic/configs';
import {
  CategoryService,
  getAllServicesOfCategoryPropsType,
} from '@business-layer/services';

const categoryService = new CategoryService();

export const useGetAllCategoriesQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_ALL_CATEGORIES, token],
    queryFn: () => categoryService.getAllCategory({ token }),
  });
};
export const useGetAllServiceByCategoryIdQuery = (
  props: getAllServicesOfCategoryPropsType
) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_ALL_SERVICES_OF_CATEGORY, props.token],
    queryFn: () => categoryService.getAllServicesOfCategory(props),
  });
};
