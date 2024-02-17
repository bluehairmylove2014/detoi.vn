'use client';

// Importing necessary libraries and modules
import React, { useReducer } from 'react';
import { AuthContext } from '../context/authContext';
import { authReducer } from '../context/reducer';
import { useAccessToken } from '../hooks/useAccessToken';

type AuthProviderType = {
  children: React.ReactNode;
};
// Defining the AuthContextProvider component
// This component creates a context provider for the authentication state
// It also initializes and listens to the Auth Broadcast channel
// It posts a message to request the access token
export const AuthContextProvider: React.FC<AuthProviderType> = ({
  children,
}) => {
  const { getToken } = useAccessToken();
  // Using the reducer to manage the authentication state
  const initialState = { token: getToken(), refreshToken: null };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Returning the context provider with the current state and dispatch function
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
