import { useQuery } from '@tanstack/react-query';
import { QUERY_N_MUTATION_KEYS } from '@business-layer/business-logic/configs';
import {
  CategoryService,
  getCategoryDetailPropsType,
  getServiceDetailPropsType,
} from '@business-layer/services';

const categoryService = new CategoryService();

export const useGetAllCategoriesQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_ALL_CATEGORIES],
    queryFn: () => categoryService.getAllCategory({ token }),
  });
};
export const useGetCategoryDetailQuery = (
  props: getCategoryDetailPropsType
) => {
  return useQuery({
    queryKey: [
      QUERY_N_MUTATION_KEYS.GET_ALL_SERVICES_OF_CATEGORY,
      props.categoryId,
    ],
    queryFn: () => categoryService.getCategoryDetail(props),
  });
};
export const useGetServiceDetailQuery = (props: getServiceDetailPropsType) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_SERVICE_DETAIL, props.serviceId],
    queryFn: () => categoryService.getServiceDetail(props),
  });
};
