import React from 'react';
import { useContext } from 'react';
import { GeocodeContextType } from '.';

export const GeocodeContext = React.createContext<GeocodeContextType>({
  state: {
    currentOrderAddress: null,
  },
  dispatch: () => undefined,
});

export const useGeocodeContext = () => {
  const context = useContext(GeocodeContext);
  if (context === undefined) {
    throw new Error('useGeocodeContext must be used within a GeocodeProvider');
  }
  return context;
};
