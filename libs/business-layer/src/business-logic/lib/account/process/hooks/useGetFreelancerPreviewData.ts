import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetFreelancerPreviewDataQuery } from '../../fetching/query';

export const useGetFreelancerPreviewData = () => {
  const {
    state: { token },
  } = useAuthContext();
  const { data, refetch } = useGetFreelancerPreviewDataQuery(token);
  return { data, refetch };
};
