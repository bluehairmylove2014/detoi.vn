import { z } from 'zod';

export interface IOption {
  id: string;
  name: string;
  description: string;
}
export const OptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});
