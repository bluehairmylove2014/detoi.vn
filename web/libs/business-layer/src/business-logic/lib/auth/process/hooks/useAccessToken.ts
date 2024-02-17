// Importing necessary constants
import { COOKIE_KEYS } from '../../../../configs/constants';
import { TOKEN_EXPIRY_DAYS } from '../../constants';
// Importing authentication context
import { useAuthContext } from '../context';
// Importing cookie helper functions
import { deleteCookie, getCookie, setCookie } from '../helper/cookieHelper';

type AccessTokenHook = {
  getToken: () => string | null;
  setToken: (newToken: string) => void;
  deleteToken: () => void;
};

// Function to get the token
export const getToken = (): string | null => {
  return getCookie(COOKIE_KEYS.ACCESS_TOKEN);
};

export const useAccessToken = (): AccessTokenHook => {
  // Getting the dispatch function from the authentication context
  const { dispatch } = useAuthContext();

  // Function to set the token
  const setToken = (newToken: string): void => {
    setCookie(COOKIE_KEYS.ACCESS_TOKEN, newToken, TOKEN_EXPIRY_DAYS.REMEMBER);
    // Dispatch the new token to the context
    dispatch({
      type: 'SET_ACTION',
      payload: newToken,
    });
  };

  // Function to delete the token
  const deleteToken = (): void => {
    deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);
    // Remove the token from the context
    dispatch({
      type: 'SET_ACTION',
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
