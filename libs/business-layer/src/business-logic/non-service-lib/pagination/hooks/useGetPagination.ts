import { IPagination } from '@business-layer/services/entities';
import { usePaginationContext } from '../context';
import { useMemo } from 'react';

export const useGetPagination = (): IPagination => {
  const { state } = usePaginationContext();
  return useMemo(() => state.data, [state.data]);
};
