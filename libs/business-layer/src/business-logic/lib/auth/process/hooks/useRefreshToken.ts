// Importing necessary modules and functions
import { refreshTokenResponseType } from '../../../../../services';
import { useRefreshTokenMutation } from '../../fetching/mutation';
import { useAccessToken } from './useAccessToken';
import { useHandleRefreshToken } from './useHandleRefreshToken';

type UseRefreshTokenType = {
  onRefreshToken: (oldToken: string) => Promise<refreshTokenResponseType>;
  isLoading: boolean;
};
// The useLogin hook
export const useRefreshToken = (): UseRefreshTokenType => {
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
