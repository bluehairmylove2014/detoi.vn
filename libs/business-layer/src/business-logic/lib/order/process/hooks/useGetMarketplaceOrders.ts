import { useAuthContext } from '@business-layer/business-logic/lib/auth/process/context';
import { useGetMarketplaceOrdersQuery } from '../../fetching/query';
import { getMarketplaceOrdersPropsType } from '@business-layer/services';

export const useGetMarketplaceOrders = ({
  sortingCol,
  sortType,
  page,
  pageSize,
}: Omit<getMarketplaceOrdersPropsType, 'token'>) => {
  const {
    state: { token },
  } = useAuthContext();
  const { data, refetch } = useGetMarketplaceOrdersQuery({
    token,
    sortingCol,
    sortType,
    page,
    pageSize,
  });
  return { data, refetch };
};
