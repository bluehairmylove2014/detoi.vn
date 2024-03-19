import { z } from 'zod';

export interface IToken {
  value: string;
  created: string;
  expires: string;
}

export const TokenSchema = z.object({
  value: z.string(),
  created: z.string(),
  expires: z.string(),
});
