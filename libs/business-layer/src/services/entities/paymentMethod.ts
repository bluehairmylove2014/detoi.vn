import { z } from 'zod';

export interface IPaymentMethod {
  id: string;
  name: string;
  logo: string;
  title: string;
}
export const PaymentMethodSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
  title: z.string(),
});
