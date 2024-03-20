import { useMutation } from '@tanstack/react-query';
import {
  RatingService,
  ratingOrderPropsType,
  ratingOrderResponseType,
} from '@business-layer/services';

const sv = new RatingService();

export const useRatingOrderMutation = () => {
  return useMutation<
    ratingOrderResponseType,
    Error,
    ratingOrderPropsType,
    unknown
  >({
    mutationFn: sv.ratingOrder,
  });
};
