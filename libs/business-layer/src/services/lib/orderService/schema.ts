import { OrderDetailSchema } from '@business-layer/services/entities';
import z from 'zod';

const createOrderResponseTypeSchema = z.object({
  message: z.string(),
});
const getMatchingOrderDetailResponseSchema = OrderDetailSchema;

export { createOrderResponseTypeSchema, getMatchingOrderDetailResponseSchema };
