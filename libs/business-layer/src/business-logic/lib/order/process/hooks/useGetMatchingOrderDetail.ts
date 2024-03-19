import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetMatchingOrderDetailQuery } from '../../fetching/query';

export const useGetMatchingOrderDetail = () => {
  const {
    state: { token },
  } = useAuthContext();
  const { data, refetch } = useGetMatchingOrderDetailQuery(token);
  return { data, refetch };
};
