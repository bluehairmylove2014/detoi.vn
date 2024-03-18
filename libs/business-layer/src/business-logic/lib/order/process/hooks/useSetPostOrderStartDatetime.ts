import { OrderState, useOrderContext } from '../context';

type useSetPostOrderStartDatetimeReturnType = {
  onSetPostOrderStartDatetime: ({
    dateTime,
  }: {
    dateTime: OrderState['postOrderStartDatetime'];
  }) => void;
};
export const useSetPostOrderStartDatetime =
  (): useSetPostOrderStartDatetimeReturnType => {
    const { dispatch } = useOrderContext();
    const onSetPostOrderStartDatetime = ({
      dateTime,
    }: {
      dateTime: OrderState['postOrderStartDatetime'];
    }) => {
      dispatch({
        type: 'SET_POST_ORDER_DATE_TIME_START',
        payload: dateTime,
      });
    };
    return {
      onSetPostOrderStartDatetime,
    };
  };
