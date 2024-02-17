// Importing necessary modules and functions
import { refreshTokenResponseType } from '../../../../../services';
import { BROADCAST_MESSAGE } from '../../constants';
import { useRefreshTokenMutation } from '../../fetching/mutation';
import { useAccessToken } from './useAccessToken';
import { useAuthBroadcastChannel } from './useAuthBroadcastChannel';
import { useHandleRefreshToken } from './useHandleRefreshToken';

type UseRefreshTokenType = {
  onRefreshToken: (oldToken: string) => Promise<refreshTokenResponseType>;
  isLoading: boolean;
};
// The useLogin hook
export const useRefreshToken = (): UseRefreshTokenType => {
  const { postMessage } = useAuthBroadcastChannel();
  // Defining the refreshTokenMutation mutation
  const refreshTokenMutation = useRefreshTokenMutation();

  // Get the resetToken and getToken functions from useAccessToken
  const { setToken } = useAccessToken();
  const { deleteRefreshToken } = useHandleRefreshToken();

  // Defining the onLogin function
  const onRefreshToken = (
    oldToken: string
  ): Promise<refreshTokenResponseType> => {
    return new Promise((resolve, reject) => {
      refreshTokenMutation
        .mutateAsync(oldToken)
        .then((res) => {
          // Check if res.token is undefined
          if (res.token) {
            // Update the new token on the client
            setToken(res.token);
            deleteRefreshToken();
            // Broadcasting the login message
            postMessage({
              message: BROADCAST_MESSAGE.SEND_TOKEN,
              token: res.token,
              refreshToken: null,
            });
            resolve(res);
          } else {
            throw new Error('Refresh Token is not found');
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  // Returning the onLogin function and the loading state
  return {
    onRefreshToken,
    isLoading: refreshTokenMutation.isPending,
  };
};
