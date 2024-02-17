import { IPagination } from '@business-layer/services/entities';
import { usePaginationContext } from '../context';

type useSetPaginationDataReturnType = {
  setPaginationData: (data: IPagination) => void;
};
export const useSetPaginationData = (): useSetPaginationDataReturnType => {
  const { dispatch } = usePaginationContext();

  const setPaginationData = (data: IPagination): void => {
    dispatch({
      type: 'SET_PAGINATION_DATA',
      payload: data,
    });
  };

  return {
    setPaginationData,
  };
};
