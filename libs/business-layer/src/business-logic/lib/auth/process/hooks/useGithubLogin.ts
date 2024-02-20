/* eslint-disable react-hooks/exhaustive-deps */
import { SocialService } from '@business-layer/services';
import { useMemo } from 'react';
import { githubConfig } from '../../../../configs';
import {
  useGetGithubUserInfoMutation,
  useUpdateAccountMutation,
} from '../../fetching/mutation';
import { getRedirectUri } from '../helper/uriHelper';
import {
  getCodeFromUrl,
  getTokenFromUrl,
} from '../helper/urlSearchParamsHelper';
import { useAccessToken } from './useAccessToken';
import { useHandleRefreshToken } from './useHandleRefreshToken';
import { useGetGithubAccessTokenMutation } from './../../fetching/mutation';

const failedMessage = 'Login failed';
const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID ?? '';
const githubClientSecret = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET ?? '';

/**
 * ---HOW TO USE---
 * 1. button onClick={onGithubLogin()} in your login with Github button
 * 2. Call onCheckGithubLogin().then(msg => ...).catch(err => ...) in
 * your redirect page (login page => Github api page => redirect page)
 * 3. You should change your redirect page url in /auth/config/index.ts
 */

export const useGithubLogin = () => {
  // Configure auth url
  const redirectUri = useMemo(
    () => getRedirectUri() + githubConfig.REDIRECT_URI_PATH,
    []
  );
  const githubAuthUrl = useMemo(
    () =>
      `${githubConfig.AUTH_URI}` +
      `?client_id=${githubClientId}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(githubConfig.SCOPE)}` +
      `&state=1983gr7fwbkd2014dat28dep08trai1987rdb`,
    []
  );

  const socialService = new SocialService();
  const getGitAccessTokenMutation = useGetGithubAccessTokenMutation();
  const getGitUserInfoMutation = useGetGithubUserInfoMutation();
  const updateAccountMutation = useUpdateAccountMutation();

  // Get the setToken function from useAccessToken
  const { setToken } = useAccessToken();
  const { setRefreshToken } = useHandleRefreshToken();

  const onCheckGithubLogin = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const code = getCodeFromUrl();
      if (code) {
        // get token by 'code'
        getGitAccessTokenMutation
          .mutateAsync({
            clientId: githubClientId,
            clientSecret: githubClientSecret,
            redirectUri: redirectUri,
            code: code,
          })
          .then((data) => {
            getGitUserInfoMutation
              .mutateAsync(data.access_token)
              .then((res) => {
                // Update account on server
                updateAccountMutation
                  .mutateAsync({
                    email: res.email ? res.email : res.login + '@gmail.com',
                    fullName: res.name,
                  })
                  .then((res) => {
                    setToken(res.token);
                    setRefreshToken(res.refreshToken);
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

  const onGithubLogin = () => {
    if (typeof window !== 'undefined') {
      window.location.href = githubAuthUrl;
    } else {
      console.error('ERROR initialize window');
    }
  };

  return { onGithubLogin, onCheckGithubLogin };
};
