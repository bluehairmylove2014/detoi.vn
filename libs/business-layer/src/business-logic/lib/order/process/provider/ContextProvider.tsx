// Importing necessary libraries and modules
import React, { useReducer } from 'react';
import { CategoryContext } from '../context/context';
import { categoryReducer } from '../context/reducer';

type categoryProviderType = {
  children: React.ReactNode;
};
export const CategoryContextProvider: React.FC<categoryProviderType> = ({
  children,
}) => {
  const initialState = {
    categories: null,
  };
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};
