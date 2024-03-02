import z from 'zod';

const serviceBookingResponseTypeSchema = z.object({
  message: z.string(),
});

export { serviceBookingResponseTypeSchema };
