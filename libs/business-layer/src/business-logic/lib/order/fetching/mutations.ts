import { useMutation } from '@tanstack/react-query';
import {
  OrderService,
  createOrderPropsType,
  createOrderResponseType,
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
