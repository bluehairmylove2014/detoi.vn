import { GeocodeAction, GeocodeState } from './type';

export const geocodeReducer = (
  state: GeocodeState,
  action: GeocodeAction
): GeocodeState => {
  try {
    switch (action.type) {
      case 'SET_CURRENT_ORDER_ADDRESS':
        return {
          ...state,
          currentOrderAddress: action.payload,
        };
      default:
        return state;
    }
  } catch (error) {
    console.error('Error in Geocode Reducer: ', error);
    return state;
  }
};
