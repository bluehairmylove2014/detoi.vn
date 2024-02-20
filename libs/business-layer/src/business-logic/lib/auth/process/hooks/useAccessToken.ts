// Importing necessary constants
import { authConfig } from '@business-layer/business-logic/configs';
import { COOKIE_KEYS } from '../../../../configs/constants';
import { TOKEN_EXPIRY_DAYS } from '../../constants';
// Importing authentication context
import { useAuthContext } from '../context';

const { getter, setter, remover } = authConfig.authStorage;

type AccessTokenHook = {
  getToken: () => Promise<string | null>;
  setToken: (newToken: string) => void;
  deleteToken: () => void;
};

// Function to get the token
export const getToken = (): Promise<string | null> => {
  return getter(COOKIE_KEYS.ACCESS_TOKEN);
};

export const useAccessToken = (): AccessTokenHook => {
  // Getting the dispatch function from the authentication context
  const { dispatch } = useAuthContext();

  // Function to set the token
  const setToken = (newToken: string): void => {
    const date = new Date();
    setter(COOKIE_KEYS.ACCESS_TOKEN, newToken, {
      expires: date.setTime(
        date.getTime() + TOKEN_EXPIRY_DAYS.REMEMBER * 60 * 60 * 1000
      ),
    });
    // Dispatch the new token to the context
    dispatch({
      type: 'SET_ACTION',
      payload: newToken,
    });
  };

  // Function to delete the token
  const deleteToken = (): void => {
    remover(COOKIE_KEYS.ACCESS_TOKEN);
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
