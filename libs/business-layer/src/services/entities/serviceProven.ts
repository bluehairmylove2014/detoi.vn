import { z } from 'zod';
export interface IServiceProven {
  id: string;
  serviceName: string;
  completedTime: string;
  price: number;
  before: string;
  after: string;
  createdAt: string;
}
export const ServiceProvenSchema = z.object({
  id: z.string(),
  serviceName: z.string(),
  completedTime: z.string(),
  price: z.number(),
  before: z.string(),
  after: z.string(),
  createdAt: z.string(),
});
