import z from 'zod';

const forwardGeocodingResponseSchema = z.array(
  z.object({
    lat: z.number(),
    lon: z.number(),
    display_name: z.string(),
    amenity: z.string().nullable(),
    house_number: z.string().nullable(),
    road: z.string().nullable(),
    ward: z.string().nullable(),
    district: z.string().nullable(),
    province: z.string().nullable(),
    country: z.string().nullable(),
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
