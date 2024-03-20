import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetOrderDetailQuery } from '../../fetching/query';

export const useGetOrderDetail = (orderId: string) => {
  const {
    state: { token },
  } = useAuthContext();
  const { data, refetch } = useGetOrderDetailQuery(orderId, token);
  return { data, refetch };
};
