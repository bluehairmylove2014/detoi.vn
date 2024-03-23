import React, { useEffect, useState } from 'react';
import { DEV_ENVIRONMENT_CONFIG } from '../config';
import {
  useIsLogged,
  useLogin,
  useLogout,
  useVerifyOtp,
} from '@business-layer/business-logic/lib/auth';
import { Intro } from '@present-native/atoms';
import { RootStack } from './stacks';
import { useGoogleFonts } from '@business-layer/business-logic/non-service-lib/googleFont';

const GlobalLogicWrapper = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const { isLoading: isFontFetched } = useGoogleFonts();
  const isLogged = useIsLogged();

  const { onLogout } = useLogout();
  const { onCustomerLogin } = useLogin();
  const { onVerifyOtp } = useVerifyOtp();

  useEffect(() => {
    if (!DEV_ENVIRONMENT_CONFIG.SKIP_AUTHENTICATION) {
      onLogout();
      setIsAppReady(true);
      return;
    } else {
      // Simulate authentication in development mode by setting the user as logged in and verified.
      onCustomerLogin({
        phone: DEV_ENVIRONMENT_CONFIG.DEFAULT_AUTHENTICATION_PHONE_NUMBER,
      })
        .then((res) =>
          onVerifyOtp({
            otp: DEV_ENVIRONMENT_CONFIG.DEFAULT_AUTHENTICATION_OTP,
            phoneNumber:
              DEV_ENVIRONMENT_CONFIG.DEFAULT_AUTHENTICATION_PHONE_NUMBER,
          })
        )
        .then((res) => {
          // TODO
        })
        .catch((error) => {
          console.error('ERROR SKIP AUTHENTICATION: ', error);
        })
        .finally(() => {
          setIsAppReady(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isAppReady && !isFontFetched && isLogged !== undefined ? (
    <RootStack isLogged={isLogged} />
  ) : (
    <Intro />
  );
};

export default GlobalLogicWrapper;
