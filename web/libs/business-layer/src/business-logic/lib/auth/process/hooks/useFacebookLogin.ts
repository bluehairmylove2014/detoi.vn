/* eslint-disable react-hooks/exhaustive-deps */
// Importing necessary libraries and services
import { useMemo } from 'react';
import { facebookConfig } from '../../../../configs';
import { BROADCAST_MESSAGE } from '../../constants';
import {
  useGetFBAccessTokenMutation,
  useGetFBUserInfoMutation,
  useUpdateAccountMutation,
} from '../../fetching/mutation';
import { getRedirectUri } from '../helper/uriHelper';
import { getCodeFromUrl } from '../helper/urlSearchParamsHelper';
import { useAccessToken } from './useAccessToken';
import { useHandleRefreshToken } from './useHandleRefreshToken';

const failedMessage = 'Login failed';

const fbAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID ?? '';
const fbAppSecret = process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET ?? '';

/**
 * ---HOW TO USE---
 * 1. button onClick={onFacebookLogin()} in your login with facebook button
 * 2. Call onCheckFacebookLogin().then(msg => ...).catch(err => ...) in
 * your redirect page (login page => facebook api page => redirect page)
 * 3. You should change your redirect page url in /auth/config/index.ts
 */
export const useFacebookLogin = () => {
  const redirectUri = useMemo(
    () => getRedirectUri() + facebookConfig.REDIRECT_URI_PATH,
    []
  );
  const facebookAuthUrl = useMemo(
    () =>
      facebookConfig.AUTH_URI +
      `?client_id=${fbAppId}` +
      `&redirect_uri=${getRedirectUri() + facebookConfig.REDIRECT_URI_PATH}` +
      `&scope=${facebookConfig.SCOPE}` +
      `&response_type=code` +
      `&state={"${facebookConfig.STATE}"}`,
    []
  );
  const getFBAccessTokenMutation = useGetFBAccessTokenMutation();
  const getFBUserInfoMutation = useGetFBUserInfoMutation();
  const updateAccountMutation = useUpdateAccountMutation();

  // Get the setToken function from useAccessToken
  const { setToken } = useAccessToken();
  const { setRefreshToken } = useHandleRefreshToken();

  const onCheckFacebookLogin = () => {
    return new Promise((resolve, reject) => {
      const code = getCodeFromUrl();
      if (code) {
        // get token by 'code'
        getFBAccessTokenMutation
          .mutateAsync({
            clientId: fbAppId,
            clientSecret: fbAppSecret,
            redirectUri: redirectUri,
            code: code,
          })
          .then((data) => {
            getFBUserInfoMutation
              .mutateAsync(data.access_token)
              .then((res) => {
                // Update account on server
                updateAccountMutation
                  .mutateAsync({
                    email: res.email,
                    fullName: res.firstName + ' ' + res.lastName,
                  })
                  .then((res) => {
                    setToken(res.token);
                    setRefreshToken(res.refreshToken);
                    postMessage({
                      message: BROADCAST_MESSAGE.SEND_TOKEN,
                      token: res.token,
                      refreshToken: res.refreshToken,
                    });
                    resolve(res.message);
                  })
                  .catch((error) => {
                    console.error(error);
                    reject(error);
                  });
              })
              .catch((error) => {
                console.error(error);
                reject(new Error(failedMessage));
              });
          })
          .catch((error) => {
            console.error(error);
            reject(new Error(failedMessage));
          });
      } else {
        reject(new Error(failedMessage));
      }
    });
  };

  const onFacebookLogin = () => {
    if (typeof window !== 'undefined') {
      window.location.href = facebookAuthUrl;
    } else {
      console.error('ERROR initialize window');
    }
  };
  return { onFacebookLogin, onCheckFacebookLogin };
};
