import { IForwardGeocode } from '@business-layer/services/entities';
import { useGeocodeContext } from '../context';
import { useMemo } from 'react';

type useCurrentOrderAddressReturnType = {
  currentOrderAddress: IForwardGeocode | null;
  setCurrentOrderAddress: ({
    addressGeo,
  }: {
    addressGeo: IForwardGeocode;
  }) => void;
};
export const useCurrentOrderAddress = (): useCurrentOrderAddressReturnType => {
  const { state, dispatch } = useGeocodeContext();

  function setCurrentOrderAddress({
    addressGeo,
  }: {
    addressGeo: IForwardGeocode;
  }) {
    dispatch({
      type: 'SET_CURRENT_ORDER_ADDRESS',
      payload: addressGeo,
    });
  }

  return {
    currentOrderAddress: useMemo(
      () => state.currentOrderAddress,
      [state.currentOrderAddress]
    ),
    setCurrentOrderAddress,
  };
};
