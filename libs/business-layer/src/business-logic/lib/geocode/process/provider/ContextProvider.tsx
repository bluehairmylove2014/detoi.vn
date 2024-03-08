// Importing necessary libraries and modules
import React, { useReducer } from 'react';
import { GeocodeContext } from '../context/context';
import { geocodeReducer } from '../context/reducer';

type geocodeProviderType = {
  children: React.ReactNode;
};
export const GeocodeContextProvider: React.FC<geocodeProviderType> = ({
  children,
}) => {
  const initialState = {
    currentOrderAddress: null,
  };
  const [state, dispatch] = useReducer(geocodeReducer, initialState);

  return (
    <GeocodeContext.Provider value={{ state, dispatch }}>
      {children}
    </GeocodeContext.Provider>
  );
};
