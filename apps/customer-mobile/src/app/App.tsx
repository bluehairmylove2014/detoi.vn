/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { ACTIVE_MODULES_LIST } from '../../constants/modules';
import { BusinessLogicProvider } from '@business-layer/business-logic/provider';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { View, StatusBar } from 'react-native';
import * as Sentry from 'sentry-expo';
import ExpoClientConfig from 'expo-constants';
import Budget from '../screens/Budget';

export const App = () => {
  const [ready, setReady] = useState(false);
  const release = ExpoClientConfig.revisionId || '0.0.0';

  if (!__DEV__) {
    /* TODO: change secret.dsn to Constants.manifest.extra.sentryPublicDsn */
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      enableInExpoDevelopment: false,
      debug: true,
      release,
    });
  }

  let body = <View />;

  setTimeout(() => {
    setReady(true);
  }, 3000);

  if (ready) {
    body = (
      <BusinessLogicProvider activeModules={ACTIVE_MODULES_LIST}>
        <FAProvider appType="customer-mobile-app">
          {__DEV__ ? <Budget /> : <Budget />}
          {/* AppNavigator */}
        </FAProvider>
      </BusinessLogicProvider>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="dark" />
      {body}
    </>
  );
};

export default App;
