import z from 'zod';

const getAllCategoryResponseSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    description: z.string(),
  })
);
export { getAllCategoryResponseSchema };
