import React from 'react';
import { useContext } from 'react';
import { CategoryContextType } from '.';

export const CategoryContext = React.createContext<CategoryContextType>({
  state: {
    categories: null,
  },
  dispatch: () => undefined,
});

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error(
      'useCategoryContext must be used within a CategoryProvider'
    );
  }
  return context;
};
