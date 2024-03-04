import z from 'zod';

const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
});
const getAllCategoryResponseSchema = z.array(categorySchema);

const selectOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});
const validationSchema = z.union([
  z.object({
    id: z.string(),
    name: z.literal('required'),
    value: z.null(),
    message: z.string(),
  }),
  z.object({
    id: z.string(),
    name: z.literal('min'),
    value: z.number(),
    message: z.string(),
  }),
  z.object({
    id: z.string(),
    name: z.literal('max'),
    value: z.number(),
    message: z.string(),
  }),
]);
const inputMethodType = z.union([
  z.object({ name: z.literal('input') }),
  z.object({
    name: z.literal('select'),
    options: z.array(selectOptionSchema).optional(),
  }),
]);

const serviceRequirementsInputMethodType = z.object({
  dataType: z.union([z.literal('number'), z.literal('text')]),
  method: inputMethodType,
  validation: z.array(validationSchema),
});

const serviceRequirementSchema = z.object({
  id: z.string(),
  inputMethod: serviceRequirementsInputMethodType,
  label: z.string(),
  labelIcon: z.string().nullable(),
  placeholder: z.string(),
});

const additionServiceRequirementSchema = z.object({
  id: z.string(),
  icon: z.string(),
  label: z.string(),
  autoSelect: z.boolean(),
});

const serviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  basePrice: z.number(),
  description: z.string(),
  image: z.string(),
});

const getCategoryDetailResponseSchema = categorySchema.and(
  z.object({
    serviceTypes: z.array(serviceSchema),
  })
);

const getServiceDetailResponseSchema = serviceSchema.and(
  z.object({
    requirements: z.array(serviceRequirementSchema),
    additionalRequirements: z.array(additionServiceRequirementSchema),
  })
);
export {
  getAllCategoryResponseSchema,
  getCategoryDetailResponseSchema,
  getServiceDetailResponseSchema,
};
