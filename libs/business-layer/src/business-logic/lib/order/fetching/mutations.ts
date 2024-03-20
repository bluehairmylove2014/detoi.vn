import { useMutation } from '@tanstack/react-query';
import {
  OrderService,
  cancelOrderPropsType,
  cancelOrderResponseType,
  createOrderPropsType,
  createOrderResponseType,
  selectFreelancerForOrderPropsType,
  selectFreelancerForOrderResponseType,
} from '@business-layer/services';

const service = new OrderService();

export const useCreateOrderMutation = () => {
  return useMutation<
    createOrderResponseType,
    Error,
    createOrderPropsType,
    unknown
  >({
    mutationFn: service.createOrder,
  });
};
export const useCancelOrderMutation = () => {
  return useMutation<
    cancelOrderResponseType,
    Error,
    cancelOrderPropsType,
    unknown
  >({
    mutationFn: service.cancelOrder,
  });
};
export const useSelectFreelancerForOrderMutation = () => {
  return useMutation<
    selectFreelancerForOrderResponseType,
    Error,
    selectFreelancerForOrderPropsType,
    unknown
  >({
    mutationFn: service.selectFreelancerForOrder,
  });
};
