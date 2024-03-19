import { useRatingOrderMutation } from '../../fetching/mutation';
import { ratingOrderPropsType } from '@business-layer/services';
import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';

type useRatingOrderReturnType = {
  onRatingOrder: ({
    orderId,
    rating,
    comment,
  }: Omit<ratingOrderPropsType, 'token'>) => Promise<string>;
};
export const useRatingOrder = (): useRatingOrderReturnType => {
  const ratingOrderMutation = useRatingOrderMutation();
  const {
    state: { token },
  } = useAuthContext();

  function onRatingOrder({
    orderId,
    rating,
    comment,
  }: Omit<ratingOrderPropsType, 'token'>): Promise<string> {
    return new Promise((resolve, reject) => {
      ratingOrderMutation
        .mutateAsync({ orderId, rating, comment, token })
        .then((res) => resolve(res.message))
        .catch((error) => {
          console.error(error);
          reject(new Error('Failed to rate the order'));
        });
    });
  }

  return {
    onRatingOrder,
  };
};
