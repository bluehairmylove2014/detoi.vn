import { useQuery } from '@tanstack/react-query';
import { QUERY_N_MUTATION_KEYS } from '@business-layer/business-logic/configs';
import { OrderService } from '@business-layer/services';

const service = new OrderService();

export const useGetMatchingOrderDetailQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_MATCHING_ORDER_DETAIL, token],
    queryFn: () => service.getMatchingOrderDetail(token),
  });
};
