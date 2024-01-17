// Importing necessary constants
import { COOKIE_KEYS } from '../../../../configs/constants';
import { TOKEN_EXPIRY_DAYS } from '../../constants';
// Importing authentication context
import { useAuthContext } from '../context';
// Importing cookie helper functions
import { deleteCookie, getCookie, setCookie } from '../helper/cookieHelper';

type RefreshTokenHook = {
  getRefreshToken: () => string | null;
  setRefreshToken: (newToken: string) => void;
  deleteRefreshToken: () => void;
};

// Function to get the token
export const getRefreshToken = (): string | null => {
  return getCookie(COOKIE_KEYS.REFRESH_TOKEN);
};

export const useHandleRefreshToken = (): RefreshTokenHook => {
  // Getting the dispatch function from the authentication context
  const { dispatch } = useAuthContext();

  // Function to set the token
  const setRefreshToken = (newToken: string): void => {
    // If the user has chosen to be remembered, save the token to the cookies
    setCookie(COOKIE_KEYS.REFRESH_TOKEN, newToken, TOKEN_EXPIRY_DAYS.REMEMBER);
    // Dispatch the new token to the context
    dispatch({
      type: 'SET_REFRESH_ACTION',
      payload: newToken,
    });
  };

  // Function to delete the token
  const deleteRefreshToken = (): void => {
    deleteCookie(COOKIE_KEYS.REFRESH_TOKEN);
    // Remove the token from the context
    dispatch({
      type: 'SET_REFRESH_ACTION',
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
