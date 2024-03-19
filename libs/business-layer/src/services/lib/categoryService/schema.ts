import {
  CategorySchema,
  UIAdditionServiceRequirementSchema,
  UIServiceRequirementSchema,
  ServiceSchema,
} from '@business-layer/services/entities';
import z from 'zod';

const getAllCategoryResponseSchema = z.array(CategorySchema);

const getCategoryDetailResponseSchema = CategorySchema.and(
  z.object({
    serviceTypes: z.array(ServiceSchema),
  })
);

const getServiceDetailResponseSchema = ServiceSchema.and(
  z.object({
    requirements: z.array(UIServiceRequirementSchema),
    additionalRequirements: z.array(UIAdditionServiceRequirementSchema),
  })
);
export {
  getAllCategoryResponseSchema,
  getCategoryDetailResponseSchema,
  getServiceDetailResponseSchema,
};
