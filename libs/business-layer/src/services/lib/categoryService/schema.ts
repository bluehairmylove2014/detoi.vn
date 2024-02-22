import z from 'zod';

const getAllCategoryResponseSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
    description: z.string(),
  })
);
export { getAllCategoryResponseSchema };
