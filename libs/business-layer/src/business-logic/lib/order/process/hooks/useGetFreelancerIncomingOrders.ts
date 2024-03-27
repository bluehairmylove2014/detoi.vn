import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetFreelancerIncomingOrdersQuery } from '../../fetching/query';

export const useGetFreelancerIncomingOrders = () => {
  const {
    state: { token },
  } = useAuthContext();
  const { data, refetch } = useGetFreelancerIncomingOrdersQuery(token);
  return { data, refetch };
};
