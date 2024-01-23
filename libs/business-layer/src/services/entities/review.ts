import { IImageMedia } from './image';

export interface IReviewBase {
  id: number;
  avt: string;
  name: string;
  content: string;
  ratingPoint: string;
  reviewDate: string;
}

export interface ICustomerReview extends IReviewBase {
  images: IImageMedia;
}
