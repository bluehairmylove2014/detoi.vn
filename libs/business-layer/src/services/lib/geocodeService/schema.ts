import z from 'zod';

const forwardGeocodingResponseSchema = z.array(
  z.object({
    boundingbox: z.array(z.number()),
    lat: z.number(),
    lon: z.number(),
    display_name: z.string(),
    importance: z.number(), // Precision of the result
  })
);
const reverseGeocodingResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  display_name: z.string(),
  amenity: z.string().nullable(),
  house_number: z.string().nullable(),
  road: z.string().nullable(),
  ward: z.string(),
  district: z.string(),
  province: z.string(),
  country: z.string(),
});

export { forwardGeocodingResponseSchema, reverseGeocodingResponseSchema };
