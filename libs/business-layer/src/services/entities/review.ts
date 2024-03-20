import { IImageMedia, ImageMediaSchema } from './image';
import { z } from 'zod';

export interface IReviewBase {
  id: string;
  avt: string;
  name: string;
  content: string;
  ratingPoint: number;
  reviewDate: string;
}
export const ReviewBaseSchema = z.object({
  id: z.string(),
  avt: z.string(),
  name: z.string(),
  content: z.string(),
  ratingPoint: z.number(),
  reviewDate: z.string(),
});

export interface ICustomerReview extends IReviewBase {
  images: IImageMedia;
}
export const CustomerReviewSchema = ReviewBaseSchema.extend({
  images: ImageMediaSchema,
});
