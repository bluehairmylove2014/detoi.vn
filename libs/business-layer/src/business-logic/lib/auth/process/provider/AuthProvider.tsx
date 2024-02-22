// import { axios } from '../../../../../services';
// import { useRefreshToken } from '../hooks/useRefreshToken';
// import { useLogout } from '../hooks';
// import { useHandleRefreshToken } from '../hooks/useHandleRefreshToken';
import { AuthContextProvider } from './ContextProvider';

export type AuthProviderType = {
  children: React.ReactNode;
};
// This is the AuthProvider for the entire app
export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  // Get the resetToken and getToken functions from useAccessToken
  // const { getRefreshToken } = useHandleRefreshToken();
  // const { onRefreshToken } = useRefreshToken();
  // const { onLogout } = useLogout();

  // Use axios interceptor to handle response
  // axios.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   async (error) => {
  //     if (
  //       error.response?.status === 401 &&
  //       error.response.data?.message === 'Invalid credential'
  //     ) {
  //       getRefreshToken()
  //         .then(async (refreshToken) => {
  //           if (refreshToken) {
  //             try {
  //               const res = await onRefreshToken(refreshToken);
  //               if (!res.token) {
  //                 return Promise.reject(error);
  //               }
  //               error.config.headers['Authorization'] = 'Bearer ' + res.token;
  //               return axios(error.config);
  //             } catch (err) {
  //               // onLogout();
  //             }
  //           } else {
  //             // onLogout();
  //           }
  //         })
  //         .catch((error) =>
  //           console.error('Cannot get refresh token in Auth Provider')
  //         );
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  // Return the AuthContextProvider and BroadcastProvider with children
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
