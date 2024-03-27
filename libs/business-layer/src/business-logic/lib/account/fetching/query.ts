import { useQuery } from '@tanstack/react-query';
import { QUERY_N_MUTATION_KEYS } from '@business-layer/business-logic/configs';
import { AccountService } from '@business-layer/services';

const service = new AccountService();

export const useGetFreelancerPreviewDataQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_FREELANCER_PREVIEW_DATA, token],
    queryFn: () => service.getFreelancerPreviewData({ token }),
  });
};
export const useGetFreelancerDetailQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_FREELANCER_DETAIL, token],
    queryFn: () => service.getFreelancerDetail({ token }),
  });
};
