/* eslint-disable react-hooks/exhaustive-deps */
// Importing the SESSION_STORAGE_KEY from constants
import { authConfig } from "../../../../configs";
import { useCallback, useEffect } from "react";
import { BROADCAST_CHANNEL, BROADCAST_MESSAGE } from "../../constants";
import { useAuthContext } from "../context";
import { useAccessToken } from "./useAccessToken";
import { useHandleRefreshToken } from "./useHandleRefreshToken";

let bc: BroadcastChannel | null = null;

export const useAuthBroadcastChannel = () => {
  const tokenController = useAccessToken();
  const { setRefreshToken, deleteRefreshToken, getRefreshToken } =
    useHandleRefreshToken();
  const { state } = useAuthContext();

  // Method to post messages
  const postMessage = useCallback(
    (message: {
      token?: string | null;
      refreshToken?: string | null;
      message: string;
    }): void => {
      bc && bc.postMessage(message);
    },
    []
  );

  useEffect(() => {
    if (authConfig.isNeedBroadcast && !bc) {
      bc = new BroadcastChannel(BROADCAST_CHANNEL.AUTH_CHANNEL);
    }
    // Method to handle incoming messages
    const handleMessage = (event: MessageEvent) => {
      if (typeof window !== "undefined" && event.source !== window.self) {
        switch (event.data.message) {
          case BROADCAST_MESSAGE.SEND_TOKEN:
            // If the token is present and different from the current one, update it
            if (event.data.token && state.token !== event.data.token) {
              tokenController.setToken(event.data.token);
              setRefreshToken(event.data.refreshToken);
            }
            break;
          case BROADCAST_MESSAGE.NEED_TOKEN: {
            const token = tokenController.getToken();
            const refreshToken = getRefreshToken();
            if (token) {
              postMessage({
                message: BROADCAST_MESSAGE.SEND_TOKEN,
                token,
                refreshToken,
              });
            }
            break;
          }
          case BROADCAST_MESSAGE.NEED_LOGOUT:
            tokenController.deleteToken();
            deleteRefreshToken();
            break;
          default:
            break;
        }
      }
    };

    bc && authConfig.isNeedBroadcast && (bc.onmessage = handleMessage);
  }, []);

  return { postMessage };
};
