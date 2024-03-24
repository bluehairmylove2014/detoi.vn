import { useAccessToken } from './useAccessToken';
import { useHandleRefreshToken } from './useHandleRefreshToken';

type UseLogoutType = {
  onLogout: () => boolean;
};
export const useLogout = (): UseLogoutType => {
  const { deleteToken } = useAccessToken();
  const { deleteRefreshToken } = useHandleRefreshToken();

  const onLogout = () => {
    try {
      // Logout success
      deleteToken();
      deleteRefreshToken();
      return true;
    } catch (error) {
      // If any error occurs in logout process, return false
      return false;
    }
  };

  return {
    onLogout,
  };
};
