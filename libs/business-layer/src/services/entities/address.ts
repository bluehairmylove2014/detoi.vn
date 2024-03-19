import { z } from 'zod';

export interface IAddress {
  id: string;
  addressLine: string;
  ward: string;
  district: string;
  province: string;
  country: string;
  lat: number;
  lon: number;
}
export const AddressSchema = z.object({
  id: z.string(),
  addressLine: z.string(),
  ward: z.string(),
  district: z.string(),
  province: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
});
