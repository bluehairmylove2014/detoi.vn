'use client';

import { useEffect } from 'react';
import { BROADCAST_MESSAGE } from '../../constants';
import { useIsLogged } from '../hooks';
import { useAuthBroadcastChannel } from '../hooks/useAuthBroadcastChannel';
import { useAccessToken } from '../hooks/useAccessToken';
import { useAuthContext } from '../context';
import { useHandleRefreshToken } from '../hooks/useHandleRefreshToken';

type BroadcastProviderType = {
  children: React.ReactNode;
};
export const BroadcastProvider: React.FC<BroadcastProviderType> = ({
  children,
}) => {
  // Getting the instance of the Auth Broadcast channel
  const { postMessage } = useAuthBroadcastChannel();
  const isLogin = useIsLogged();
  const { getToken } = useAccessToken();
  const { getRefreshToken } = useHandleRefreshToken();
  const { dispatch } = useAuthContext();

  useEffect(() => {
    if (!isLogin) {
      const token = getToken();
      const refreshToken = getRefreshToken();
      if (token) {
        dispatch({
          type: 'SET_ALL_ACTION',
          payload: {
            token,
            refreshToken,
          },
        });
      }
      // Posting a message to request the access token
      postMessage({
        message: BROADCAST_MESSAGE.NEED_TOKEN,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin, dispatch, getToken, postMessage]);

  return <>{children}</>;
};
