import { IImageMedia } from './image';

export interface IReviewBase {
  id: string;
  avt: string;
  name: string;
  content: string;
  ratingPoint: number;
  reviewDate: string;
}

export interface ICustomerReview extends IReviewBase {
  images: IImageMedia;
}
