import React from 'react';
import { useContext } from 'react';
import { OrderContextType } from '.';

export const OrderContext = React.createContext<OrderContextType>({
  state: {
    postOrderAddress: null,
    postOrderStartDatetime: null,
    postOrderServiceContent: null,
  },
  dispatch: () => undefined,
});

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrderContext must be used within a OrderProvider');
  }
  return context;
};
