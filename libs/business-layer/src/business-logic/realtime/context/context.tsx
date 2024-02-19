import React from 'react';
import { useContext } from 'react';
import { RealtimeContextType } from './type';

export const RealtimeContext = React.createContext<RealtimeContextType>({
  state: {
    socket: null,
    message: [],
  },
  dispatch: () => undefined,
});

export const useRealtimeContext = () => {
  const context = useContext(RealtimeContext);
  if (context === undefined) {
    throw new Error(
      'useRealtimeContext must be used within a RealtimeProvider'
    );
  }
  return context;
};
