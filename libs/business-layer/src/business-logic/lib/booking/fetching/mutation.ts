import { useMutation } from '@tanstack/react-query';
import {
  OrderService,
  serviceBookingPropsType,
  serviceBookingResponseType,
} from '@business-layer/services';

const orderService = new OrderService();

export const useServiceBookingMutation = () => {
  return useMutation<
    serviceBookingResponseType,
    Error,
    serviceBookingPropsType,
    unknown
  >({
    mutationFn: orderService.serviceBooking,
  });
};
