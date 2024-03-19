import {
  ForwardGeocodeSchema,
  ReverseGeocodeSchema,
} from '@business-layer/services/entities';
import z from 'zod';

const forwardGeocodingResponseSchema = z.array(ForwardGeocodeSchema);
const reverseGeocodingResponseSchema = ReverseGeocodeSchema;

export { forwardGeocodingResponseSchema, reverseGeocodingResponseSchema };
