// Importing necessary constants
import { IToken } from '@business-layer/services/entities';
import { COOKIE_KEYS } from '../../../../configs/constants';
import { useAuthContext } from '../context';

import {
  removeSecureStorageItem,
  setSecureStorageItem,
  getSecureStorageItem,
} from '@business-layer/business-logic/helper/secureStorage';

type RefreshTokenHook = {
  getRefreshToken: () => Promise<string | null>;
  setRefreshToken: (newToken: IToken) => void;
  deleteRefreshToken: () => void;
};

// Function to get the token
export const getRefreshToken = async (): Promise<string | null> => {
  return getSecureStorageItem(COOKIE_KEYS.REFRESH_TOKEN);
};

export const useHandleRefreshToken = (): RefreshTokenHook => {
  // Getting the dispatch function from the authentication context
  const { dispatch } = useAuthContext();

  // Function to set the token
  const setRefreshToken = (newToken: IToken): void => {
    const date = new Date();
    setSecureStorageItem(
      COOKIE_KEYS.REFRESH_TOKEN,
      newToken.value,
      new Date(newToken.expires)
    );
    // Dispatch the new token to the context
    dispatch({
      type: 'SET_REFRESH_TOKEN',
      payload: newToken.value,
    });
  };

  // Function to delete the token
  const deleteRefreshToken = (): void => {
    removeSecureStorageItem(COOKIE_KEYS.REFRESH_TOKEN);
    // Remove the token from the context
    dispatch({
      type: 'SET_REFRESH_TOKEN',
      payload: null,
    });
  };

  // Returning the hook functions
  return {
    getRefreshToken,
    setRefreshToken,
    deleteRefreshToken,
  };
};
