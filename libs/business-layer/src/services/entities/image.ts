import { z } from 'zod';

export interface IImageMedia {
  id: string;
  image: string;
}
export const ImageMediaSchema = z.object({
  id: z.string(),
  image: z.string(),
});
