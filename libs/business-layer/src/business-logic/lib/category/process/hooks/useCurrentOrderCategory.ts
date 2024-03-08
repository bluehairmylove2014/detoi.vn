import { ICategory } from '@business-layer/services/entities';
import { useCategoryContext } from '../context';
import { useMemo } from 'react';

type useCurrentOrderCategoryReturnType = {
  currentOrderCategory: ICategory | null;
  setCurrentOrderCategory: ({ category }: { category: ICategory }) => void;
};
export const useCurrentOrderCategory =
  (): useCurrentOrderCategoryReturnType => {
    const { state, dispatch } = useCategoryContext();

    function setCurrentOrderCategory({ category }: { category: ICategory }) {
      dispatch({
        type: 'SET_CURRENT_ORDER_CATEGORY',
        payload: category,
      });
    }

    return {
      currentOrderCategory: useMemo(
        () => state.currentOrderCategory,
        [state.currentOrderCategory]
      ),
      setCurrentOrderCategory,
    };
  };
