import { z } from 'zod';

export interface IForwardGeocode {
  lat: number;
  lon: number;
  display_name: string;
  amenity: string | null;
  house_number: string | null;
  road: string | null;
  ward: string;
  district: string;
  province: string;
  country: string;
}
export const ForwardGeocodeSchema = z.object({
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

export interface IReverseGeocode {
  lat: number;
  lon: number;
  display_name: string; // Ex: Combination of all below
  amenity: string | null; // Ex: Hospital, School,...
  house_number: string | null;
  road: string | null;
  ward: string;
  district: string;
  province: string;
  country: string;
}
export const ReverseGeocodeSchema = z.object({
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
