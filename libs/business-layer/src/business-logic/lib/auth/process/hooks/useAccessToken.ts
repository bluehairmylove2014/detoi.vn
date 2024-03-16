// Importing necessary constants

import { IToken } from '@business-layer/services/entities';
import { COOKIE_KEYS } from '../../../../configs/constants';
// Importing authentication context
import { useAuthContext } from '../context';
import {
  removeSecureStorageItem,
  setSecureStorageItem,
  getSecureStorageItem,
} from '@business-layer/business-logic/helper/secureStorage';

type AccessTokenHook = {
  getToken: () => Promise<string | null>;
  setToken: (newToken: IToken) => void;
  deleteToken: () => void;
};

// Function to get the token
export const getToken = async (): Promise<string | null> => {
  return getSecureStorageItem(COOKIE_KEYS.ACCESS_TOKEN);
};

export const useAccessToken = (): AccessTokenHook => {
  // Getting the dispatch function from the authentication context
  const { dispatch } = useAuthContext();

  // Function to set the token
  const setToken = (newToken: IToken): void => {
    const date = new Date();
    // setSecureStorageItem(COOKIE_KEYS.ACCESS_TOKEN, newToken.value);
    setSecureStorageItem(
      COOKIE_KEYS.ACCESS_TOKEN,
      newToken.value,
      new Date(newToken.expires)
    );
    // Dispatch the new token to the context
    dispatch({
      type: 'SET_TOKEN',
      payload: newToken.value,
    });
  };

  // Function to delete the token
  const deleteToken = (): void => {
    removeSecureStorageItem(COOKIE_KEYS.ACCESS_TOKEN);
    // Remove the token from the context
    dispatch({
      type: 'SET_TOKEN',
      payload: null,
    });
  };

  // Returning the hook functions
  return {
    getToken,
    setToken,
    deleteToken,
  };
};
