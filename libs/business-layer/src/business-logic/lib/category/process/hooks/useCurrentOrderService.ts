import { useCategoryContext } from '../context';
import { useMemo } from 'react';
import { IService } from '@business-layer/services/entities/service';

type useCurrentOrderServiceReturnType = {
  currentOrderService: IService | null;
  setCurrentOrderService: ({ service }: { service: IService }) => void;
};
export const useCurrentOrderService = (): useCurrentOrderServiceReturnType => {
  const { state, dispatch } = useCategoryContext();

  function setCurrentOrderService({ service }: { service: IService }) {
    dispatch({
      type: 'SET_CURRENT_ORDER_SERVICE',
      payload: service,
    });
  }

  return {
    currentOrderService: useMemo(
      () => state.currentOrderService,
      [state.currentOrderService]
    ),
    setCurrentOrderService,
  };
};
