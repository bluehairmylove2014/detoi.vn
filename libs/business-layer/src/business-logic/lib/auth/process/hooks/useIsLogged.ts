// Importing necessary libraries and services
import { useEffect, useMemo, useState } from 'react';
import { useAuthContext } from '../context';
import { useAccessToken } from './useAccessToken';

// Hook to check if the user is logged in
export const useIsLogged = () => {
  const {
    state: { token },
  } = useAuthContext();
  const { getToken } = useAccessToken();
  const [isLogged, setIsLogged] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        setIsLogged(true);
      } else {
        try {
          const fetchedToken = await getToken();
          setIsLogged(Boolean(fetchedToken));
        } catch (error) {
          console.error(error);
          setIsLogged(false);
        }
      }
    };

    checkToken();
  }, [token, getToken]); // Adding getToken to the dependency array

  return useMemo(() => isLogged, [isLogged]);
};
