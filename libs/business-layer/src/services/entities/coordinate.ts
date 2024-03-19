import { z } from 'zod';

export interface ICoordinate {
  lat: number;
  lon: number;
}
export const CoordinateSchema = z.object({
  lat: z.number(),
  lon: z.number(),
});
