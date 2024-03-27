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
import { useSocketConnect } from '@business-layer/business-logic/realtime';

const INTRO_MEDIA_TIME = 6000; // 6s

const GlobalLogicWrapper = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const { isLoading: isFontFetched } = useGoogleFonts();
  const isLogged = useIsLogged();
  const [isIntroMediaTimeout, setIsIntroMediaTimeout] =
    useState<boolean>(false);

  const { onLogout } = useLogout();
  const { onLogin } = useLogin();
  const { onVerifyOtp } = useVerifyOtp();
  const { handleConnect } = useSocketConnect();

  useEffect(() => {
    handleConnect(DEV_ENVIRONMENT_CONFIG.DEFAULT_AUTHENTICATION_PHONE_NUMBER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsIntroMediaTimeout(true);
    }, INTRO_MEDIA_TIME);
    if (!DEV_ENVIRONMENT_CONFIG.SKIP_AUTHENTICATION) {
      onLogout();
      setIsAppReady(true);
      return;
    } else {
      // Simulate authentication in development mode by setting the user as logged in and verified.
      onLogin({
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

  return isAppReady &&
    !isFontFetched &&
    isLogged !== undefined &&
    isIntroMediaTimeout ? (
    <RootStack isLogged={isLogged} />
  ) : (
    <Intro />
  );
};

export default GlobalLogicWrapper;
