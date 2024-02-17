import { BROADCAST_MESSAGE } from "../../constants";
import { useAccessToken } from "./useAccessToken";
import { useAuthBroadcastChannel } from "./useAuthBroadcastChannel";
import { useHandleRefreshToken } from "./useHandleRefreshToken";

type UseLogoutType = {
  onLogout: () => boolean;
};
export const useLogout = (): UseLogoutType => {
  const { postMessage } = useAuthBroadcastChannel();
  const { deleteToken } = useAccessToken();
  const { deleteRefreshToken } = useHandleRefreshToken();

  const onLogout = () => {
    try {
      // Logout success
      deleteToken();
      deleteRefreshToken();
      // Broadcast logout message
      postMessage({
        message: BROADCAST_MESSAGE.NEED_LOGOUT,
      });
      return true;
    } catch (error) {
      // If any error occurs in logout process, return false to client
      return false;
    }
  };

  return {
    onLogout,
  };
};
