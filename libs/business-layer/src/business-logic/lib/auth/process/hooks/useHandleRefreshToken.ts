// Importing necessary constants
import { authConfig } from '@business-layer/business-logic/configs';
import { COOKIE_KEYS } from '../../../../configs/constants';
import { TOKEN_EXPIRY_DAYS } from '../../constants';
// Importing authentication context
import { useAuthContext } from '../context';

const { getter, setter, remover } = authConfig.authStorage;

type RefreshTokenHook = {
  getRefreshToken: () => Promise<string | null>;
  setRefreshToken: (newToken: string) => void;
  deleteRefreshToken: () => void;
};

// Function to get the token
export const getRefreshToken = (): Promise<string | null> => {
  return getter(COOKIE_KEYS.REFRESH_TOKEN);
};

export const useHandleRefreshToken = (): RefreshTokenHook => {
  // Getting the dispatch function from the authentication context
  const { dispatch } = useAuthContext();

  // Function to set the token
  const setRefreshToken = (newToken: string): void => {
    const date = new Date();
    setter(COOKIE_KEYS.REFRESH_TOKEN, newToken, {
      expires: date.setTime(
        date.getTime() + TOKEN_EXPIRY_DAYS.REMEMBER * 60 * 60 * 1000
      ),
    });
    // Dispatch the new token to the context
    dispatch({
      type: 'SET_REFRESH_ACTION',
      payload: newToken,
    });
  };

  // Function to delete the token
  const deleteRefreshToken = (): void => {
    remover(COOKIE_KEYS.REFRESH_TOKEN);
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
