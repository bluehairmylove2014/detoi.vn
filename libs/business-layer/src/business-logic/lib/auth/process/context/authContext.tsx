import React from 'react';
import { useContext } from 'react';
import { AuthContextType } from '.';

export const AuthContext = React.createContext<AuthContextType>({
  state: {
    token: null,
    refreshToken: null,
    onOtpPhoneNumber: null,
  },
  dispatch: () => undefined,
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};
