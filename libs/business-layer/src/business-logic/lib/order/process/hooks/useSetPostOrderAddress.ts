import { OrderState, useOrderContext } from '../context';

type useSetPostOrderAddressReturnType = {
  onSetPostOrderAddress: ({
    addressData,
  }: {
    addressData: OrderState['postOrderAddress'];
  }) => void;
};
export const useSetPostOrderAddress = (): useSetPostOrderAddressReturnType => {
  const { dispatch } = useOrderContext();
  const onSetPostOrderAddress = ({
    addressData,
  }: {
    addressData: OrderState['postOrderAddress'];
  }) => {
    dispatch({
      type: 'SET_POST_ORDER_ADDRESS',
      payload: addressData,
    });
  };
  return {
    onSetPostOrderAddress,
  };
};
