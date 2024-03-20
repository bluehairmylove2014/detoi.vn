import { z } from 'zod';

export interface ICountryCode {
  alpha2Code: string;
  name: string;
  callingCodes: string[];
  flag: string;
}
export const CountryCodeSchema = z.object({
  alpha2Code: z.string(),
  name: z.string(),
  callingCodes: z.array(z.string()),
  flag: z.string(),
});
