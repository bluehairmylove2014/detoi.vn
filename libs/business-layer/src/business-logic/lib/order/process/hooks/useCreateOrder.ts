import { useCurrentOrderCategory } from '@business-layer/business-logic/lib/category';
import { OrderState, useOrderContext } from '../context';
import { useCreateOrderMutation } from '../../fetching/mutations';
import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';

type useCreateOrderReturnType = {
  onCreateOrder: (
    startDate: string,
    startTime: string,
    note: string
  ) => Promise<string>;
  isLoading: boolean;
};
export const useCreateOrder = (): useCreateOrderReturnType => {
  const {
    state: {
      postOrderAddress,
      postOrderServiceContent,
      // postOrderStartDatetime,
    },
  } = useOrderContext();
  const { currentOrderCategory } = useCurrentOrderCategory();
  const createOrderMutation = useCreateOrderMutation();
  const {
    state: { token },
  } = useAuthContext();

  function onCreateOrder(
    startDate: string,
    startTime: string,
    note: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!currentOrderCategory) {
        reject(new Error('No category selected'));
        return;
      } else if (!postOrderAddress) {
        reject(new Error('Post Order Address is not valid'));
        return;
      } else if (!postOrderServiceContent) {
        reject(new Error('Post Order Service Content is not valid'));
        return;
      } else {
        createOrderMutation
          .mutateAsync({
            address: postOrderAddress,
            startTime: startTime,
            startDate: startDate,
            services: { ...postOrderServiceContent, note },
            token,
          })
          .then((res) => {
            resolve(res.message);
          })
          .catch((error) => {
            console.error(error);
            reject(Error('Failed to Create Order'));
          });
      }
    });
  }
  return {
    onCreateOrder,
    isLoading: createOrderMutation.isPending,
  };
};
