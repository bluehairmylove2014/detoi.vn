/* eslint-disable react-hooks/exhaustive-deps */
// Importing necessary libraries and services
import { useEffect, useMemo, useState } from 'react';
import { useAuthContext } from '../context';
import { useAccessToken } from './useAccessToken';

// True: User is logged in and has a valid token
// False: User is NOT logged in or has an invalid (or expired) token
// Hook to check if the user is logged in
export const useIsLogged = () => {
  const { state } = useAuthContext();
  const { getToken } = useAccessToken();
  const [isLogged, setIsLogged] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    console.log('RUN');
    if (state.token) {
      setIsLogged(true);
    } else {
      getToken()
        .then((token) => {
          if (token) {
            setIsLogged(true);
          } else {
            setIsLogged(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [state.token]);

  return useMemo(() => isLogged, [isLogged]);
};
