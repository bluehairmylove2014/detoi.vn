'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from 'react';
import { PaginationContext } from '../context/paginationContext';
import { paginationReducer } from '../context/reducer';

type ContextProviderType = {
  children: React.ReactNode;
};
export const ContextProvider: React.FC<ContextProviderType> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(paginationReducer, {
    data: {
      currentPage: -1,
      maxPage: -1,
      maxElementPerPage: -1,
      dataLength: -1,
    },
  });

  return (
    <PaginationContext.Provider value={{ state, dispatch }}>
      {children}
    </PaginationContext.Provider>
  );
};
