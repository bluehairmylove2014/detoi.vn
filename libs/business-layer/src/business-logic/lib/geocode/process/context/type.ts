import { IForwardGeocode } from '@business-layer/services/entities';

export interface GeocodeState {
  currentOrderAddress: IForwardGeocode | null;
}

export type GeocodeAction = {
  type: 'SET_CURRENT_ORDER_ADDRESS';
  payload: GeocodeState['currentOrderAddress'];
};

export type GeocodeContextType = {
  state: GeocodeState;
  dispatch: React.Dispatch<GeocodeAction>;
};
