import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetFreelancerDetailQuery } from '../../fetching/query';

export const useGetFreelancerDetail = () => {
  const {
    state: { token },
  } = useAuthContext();
  const { data, refetch } = useGetFreelancerDetailQuery(token);
  return { data, refetch };
};
