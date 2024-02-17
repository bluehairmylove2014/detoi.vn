import { useQuery } from '@tanstack/react-query';
import { AccountService } from '@business-layer/services';
import { QUERY_N_MUTATION_KEYS } from '@business-layer/business-logic/configs/constants';
import { mutationConfig } from '@business-layer/business-logic/configs';

const accountService = new AccountService();

export const useGetAllAccountsQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_ALL_ACCOUNTS],
    queryFn: () => accountService.getAllAccounts(token),
    retry: mutationConfig.USE_QUERY_RETRY,
  });
};

export const useFetchPersonalInformationQuery = (token: string | null) => {
  return useQuery({
    queryKey: [QUERY_N_MUTATION_KEYS.GET_PERSONAL_INFO],
    queryFn: () => accountService.getAccountInfo(token),
    retry: mutationConfig.USE_QUERY_RETRY,
  });
};
