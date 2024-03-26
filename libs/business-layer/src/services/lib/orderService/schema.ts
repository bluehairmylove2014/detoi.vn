import { OrderDetailSchema } from '@business-layer/services/entities';
import z from 'zod';

const createOrderResponseTypeSchema = z.object({
  message: z.string(),
});
const getMatchingOrderDetailResponseSchema = OrderDetailSchema;
const cancelOrderResponseSchema = z.object({
  message: z.string(),
});
const selectFreelancerForOrderResponseSchema = z.object({
  message: z.string(),
});
const getOrderDetailResponseSchema = OrderDetailSchema;
const getFreelancerIncomingOrdersResponseSchema = z.array(OrderDetailSchema);

const getMarketplaceOrdersSchema = z.array(OrderDetailSchema);

export {
  createOrderResponseTypeSchema,
  getMatchingOrderDetailResponseSchema,
  cancelOrderResponseSchema,
  selectFreelancerForOrderResponseSchema,
  getOrderDetailResponseSchema,
  getFreelancerIncomingOrdersResponseSchema,
  getMarketplaceOrdersSchema,
};
