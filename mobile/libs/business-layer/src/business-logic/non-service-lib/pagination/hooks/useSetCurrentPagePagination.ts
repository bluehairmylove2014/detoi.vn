import { usePaginationContext } from '../context';

type useSetCurrentPagePaginationReturnType = {
  handleChangeCurrentPage: (pageNumber: number) => void;
};
export const useSetCurrentPagePagination =
  (): useSetCurrentPagePaginationReturnType => {
    const { dispatch } = usePaginationContext();

    const handleChangeCurrentPage = (pageNumber: number): void => {
      dispatch({
        type: 'SET_CURRENT_PAGE',
        payload: pageNumber,
      });
    };

    return {
      handleChangeCurrentPage,
    };
  };
