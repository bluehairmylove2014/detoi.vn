import { z } from 'zod';
import { IService, ServiceSchema } from './service';

export interface ICategory {
  id: string;
  name: string;
  image: string;
  description: string;
  serviceClassName: string;
}
export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  serviceClassName: z.string(),
});

export interface ICategoryDetail extends ICategory {
  serviceTypes: IService[];
}
export const CategoryDetailSchema = CategorySchema.extend({
  serviceTypes: z.array(ServiceSchema),
});
