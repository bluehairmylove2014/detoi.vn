import {
  IUIAdditionServiceRequirement,
  IUIServiceRequirement,
  UIAdditionServiceRequirementSchema,
  UIServiceRequirementSchema,
} from './serviceRequirement';
import { z } from 'zod';

export interface IService {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  image: string;
}
export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  basePrice: z.number(),
  description: z.string(),
  image: z.string(),
});

export interface IServiceDetail extends IService {
  requirements: IUIServiceRequirement[];
  additionalRequirements: IUIAdditionServiceRequirement[];
}
export const ServiceDetailSchema = ServiceSchema.extend({
  requirements: z.array(UIServiceRequirementSchema),
  additionalRequirements: z.array(UIAdditionServiceRequirementSchema),
});
export interface IServiceStatus {
  id: string;
  name: string;
}
export const ServiceStatusSchema = z.object({
  id: z.string(),
  name: z.string(),
});
