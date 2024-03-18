import { OrderAction, OrderState } from '.';

export const orderReducer = (
  state: OrderState,
  action: OrderAction
): OrderState => {
  try {
    switch (action.type) {
      case 'SET_POST_ORDER_ADDRESS':
        return {
          ...state,
          postOrderAddress: action.payload,
        };
      case 'SET_POST_ORDER_DATE_TIME_START':
        return {
          ...state,
          postOrderStartDatetime: action.payload,
        };
      case 'SET_POST_ORDER_SERVICE_CONTENT':
        return {
          ...state,
          postOrderServiceContent: action.payload,
        };
      default:
        return state;
    }
  } catch (error) {
    console.error('Error in Order Reducer: ', error);
    return state;
  }
};
