/* eslint-disable react-hooks/exhaustive-deps */
import { SocialService } from '@business-layer/services';
import { useMemo } from 'react';
import { googleConfig } from '../../../../configs';
import { BROADCAST_MESSAGE } from '../../constants';
import { useUpdateAccountMutation } from '../../fetching/mutation';
import { getRedirectUri } from '../helper/uriHelper';
import { getTokenFromUrl } from '../helper/urlSearchParamsHelper';
import { useAccessToken } from './useAccessToken';
import { useAuthBroadcastChannel } from './useAuthBroadcastChannel';
import { useHandleRefreshToken } from './useHandleRefreshToken';

const failedMessage = 'Login failed';

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '';

/**
 * ---HOW TO USE---
 * 1. button onClick={onGoogleLogin()} in your login with google button
 * 2. Call onCheckGoogleLogin().then(msg => ...).catch(err => ...) in
 * your redirect page (login page => google api page => redirect page)
 * 3. You should change your redirect page url in /auth/config/index.ts
 */

export const useGoogleLogin = () => {
  // Configure auth url
  const googleAuthUrl = useMemo(
    () =>
      `${googleConfig.AUTH_URI}` +
      `?client_id=${googleClientId}` +
      `&redirect_uri=${encodeURIComponent(
        getRedirectUri() + googleConfig.REDIRECT_URI_PATH
      )}` +
      `&response_type=token` +
      `&scope=${encodeURIComponent(googleConfig.SCOPE)}`,
    []
  );

  const { postMessage } = useAuthBroadcastChannel();
  const socialService = new SocialService();
  const updateAccountMutation = useUpdateAccountMutation();

  // Get the setToken function from useAccessToken
  const { setToken } = useAccessToken();
  const { setRefreshToken } = useHandleRefreshToken();

  const onCheckGoogleLogin = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const { accessToken, error } = getTokenFromUrl();
      if (accessToken) {
        socialService
          .validateToken(accessToken)
          .then((res) => {
            socialService
              .getAccountInfo(accessToken)
              .then((data) => {
                // If web cannot get the user information
                // => do not set token, do not login, do not broadcast
                // setToken(payload.accessToken, isRememberMeDefault);
                // Send login notification message to other tabs
                // Update account on server
                updateAccountMutation
                  .mutateAsync({
                    email: data.email,
                    fullName: data.firstName + ' ' + data.lastName,
                  })
                  .then((res) => {
                    // Remove listener
                    setToken(res.token);
                    setRefreshToken(res.refreshToken);
                    postMessage({
                      message: BROADCAST_MESSAGE.SEND_TOKEN,
                      token: accessToken,
                      refreshToken: res.refreshToken,
                    });
                    resolve(res.message);
                  })
                  .catch((error) => {
                    console.error('Error update account infor: ', error);
                    reject(error);
                  });
              })
              .catch((err) => {
                console.error(err);
                reject(new Error(failedMessage));
              });
          })
          .catch((err) => {
            console.error(err);
            reject(new Error(failedMessage));
          });
      } else if (error) {
        console.error(error);
        reject(new Error(failedMessage));
      }
    });
  };

  const onGoogleLogin = () => {
    if (typeof window !== 'undefined') {
      window.location.href = googleAuthUrl;
    } else {
      console.error('ERROR initialize window');
    }
  };

  return { onGoogleLogin, onCheckGoogleLogin };
};
