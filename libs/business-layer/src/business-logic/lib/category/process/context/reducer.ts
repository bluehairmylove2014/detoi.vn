import { CategoryAction, CategoryState } from '.';

export const categoryReducer = (
  state: CategoryState,
  action: CategoryAction
): CategoryState => {
  try {
    switch (action.type) {
      case 'SET_CATEGORIES':
        return {
          ...state,
          categories: action.payload,
        };
      case 'SET_CURRENT_ORDER_CATEGORY':
        return {
          ...state,
          currentOrderCategory: action.payload,
        };
      case 'SET_CURRENT_ORDER_SERVICE':
        return {
          ...state,
          currentOrderService: action.payload,
        };
      default:
        return state;
    }
  } catch (error) {
    console.error('Error in Category Reducer: ', error);
    return state;
  }
};
