import { PaginationAction, PaginationState } from '.';

export const paginationReducer = (
  state: PaginationState,
  action: PaginationAction
): PaginationState => {
  try {
    switch (action.type) {
      case 'SET_PAGINATION_DATA':
        return {
          ...state,
          data: action.payload,
        };
      case 'SET_CURRENT_PAGE':
        return {
          ...state,
          data: { ...state.data, currentPage: action.payload },
        };
      default:
        return state;
    }
  } catch (error) {
    console.error('Error in paginationReducer: ', error);
    return state;
  }
};
