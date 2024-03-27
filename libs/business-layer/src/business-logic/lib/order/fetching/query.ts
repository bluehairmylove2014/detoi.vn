import { useQuery } from '@tanstack/react-query';
import { QUERY_N_MUTATION_KEYS } from '@business-layer/business-logic/configs';
import {
  OrderService,
  getMarketplaceOrdersPropsType,
} from '@business-layer/services';

const service = new OrderService();

export const useGetMatchingOrderDetailQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_MATCHING_ORDER_DETAIL, token],
    queryFn: () => service.getMatchingOrderDetail(token),
  });
};
export const useGetOrderDetailQuery = (
  orderId: string,
  token: string | null
) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_ORDER_DETAIL, token, orderId],
    queryFn: () => service.getOrderDetail({ orderId, token }),
  });
};
export const useGetFreelancerIncomingOrdersQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_FREELANCER_INCOMING_ORDERS, token],
    queryFn: () => service.getFreelancerIncomingOrders({ token }),
  });
};
export const useGetMarketplaceOrdersQuery = (
  data: getMarketplaceOrdersPropsType
) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_MARKETPLACE_ORDERS, data],
    queryFn: () => service.getMarketplaceOrders(data),
  });
};
