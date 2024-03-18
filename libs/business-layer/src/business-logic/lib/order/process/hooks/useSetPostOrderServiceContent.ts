import { OrderState, useOrderContext } from '../context';

type useSetPostOrderServiceContentReturnType = {
  onSetPostOrderServiceContent: ({
    serviceContent,
  }: {
    serviceContent: OrderState['postOrderServiceContent'];
  }) => void;
};
export const useSetPostOrderServiceContent =
  (): useSetPostOrderServiceContentReturnType => {
    const { dispatch } = useOrderContext();
    const onSetPostOrderServiceContent = ({
      serviceContent,
    }: {
      serviceContent: OrderState['postOrderServiceContent'];
    }) => {
      dispatch({
        type: 'SET_POST_ORDER_SERVICE_CONTENT',
        payload: serviceContent,
      });
    };
    return {
      onSetPostOrderServiceContent,
    };
  };
