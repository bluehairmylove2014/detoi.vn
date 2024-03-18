// Importing necessary libraries and modules
import React, { useReducer } from 'react';
import { OrderContext } from '../context/context';
import { orderReducer } from '../context/reducer';

type orderProviderType = {
  children: React.ReactNode;
};
export const OrderContextProvider: React.FC<orderProviderType> = ({
  children,
}) => {
  const initialState = {
    postOrderAddress: null,
    postOrderStartDatetime: null,
    postOrderServiceContent: null,
  };
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
