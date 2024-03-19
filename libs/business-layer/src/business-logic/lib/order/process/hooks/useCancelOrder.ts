import { useCancelOrderMutation } from '../../fetching/mutations';
import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';

type useCancelOrderReturnType = {
  onCancelOrder: (orderId: string) => Promise<string>;
  isLoading: boolean;
};
export const useCancelOrder = (): useCancelOrderReturnType => {
  const cancelOrderMutation = useCancelOrderMutation();
  const {
    state: { token },
  } = useAuthContext();

  function onCancelOrder(orderId: string): Promise<string> {
    return new Promise((resolve, reject) => {
      cancelOrderMutation
        .mutateAsync({
          orderId,
          token,
        })
        .then((res) => {
          resolve(res.message);
        })
        .catch((error) => {
          console.error(error);
          reject(Error('Failed to Cancel Order'));
        });
    });
  }
  return {
    onCancelOrder,
    isLoading: cancelOrderMutation.isPending,
  };
};
