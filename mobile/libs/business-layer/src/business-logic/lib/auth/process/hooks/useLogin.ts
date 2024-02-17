// Importing necessary modules and functions
import {
  authenticationResponseType,
  loginParamsType,
} from '../../../../../services';
import { BROADCAST_MESSAGE } from '../../constants';
import { useLoginMutation } from '../../fetching/mutation';
import { useAccessToken } from './useAccessToken';
import { useAuthBroadcastChannel } from './useAuthBroadcastChannel';
import { useHandleRefreshToken } from './useHandleRefreshToken';

type UseLoginType = {
  onLogin: (params: loginParamsType) => Promise<string>;
  isLoading: boolean;
};
export const useLogin = (): UseLoginType => {
  const { postMessage } = useAuthBroadcastChannel();
  // Defining the login mutation
  const loginMutation = useLoginMutation();

  // Getting the setToken function from useAccessToken
  const { setToken } = useAccessToken();
  const { setRefreshToken } = useHandleRefreshToken();

  const onLogin = ({ email, password }: loginParamsType): Promise<string> => {
    return new Promise((resolve, reject) => {
      loginMutation
        .mutateAsync({ email, password })
        .then((response: authenticationResponseType) => {
          if (response.token) {
            setToken(response.token);
            setRefreshToken(response.refreshToken);
            // Broadcasting the login message
            postMessage({
              message: BROADCAST_MESSAGE.SEND_TOKEN,
              token: response.token,
              refreshToken: response.refreshToken,
            });
            // Resolving the promise with the response
            resolve(response.message);
          } else {
            reject(new Error(response.message));
          }
        })
        .catch((error) => {
          // Rejecting the promise in case of an error
          reject(error);
        });
    });
  };

  // Returning the onLogin function and the loading state
  return {
    onLogin,
    isLoading: loginMutation.isPending,
  };
};
