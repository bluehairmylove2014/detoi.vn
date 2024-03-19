import z from 'zod';

const ratingOrderResponseTypeSchema = z.object({
  message: z.string(),
});

export { ratingOrderResponseTypeSchema };
