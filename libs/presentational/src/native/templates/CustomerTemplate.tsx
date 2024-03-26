import { StatusBar, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { BlurTheme, PrimaryScrollView } from '@present-native/atoms';
import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';
import { useIsLogged } from '@business-layer/business-logic/lib/auth';
import NeedLoginBottomTab from '@present-native/molecules/bottomTab/NeedLoginBottomTab';

const CustomerTemplate = ({ children }: { children: React.ReactNode }) => {
  const { state } = useBlurTheme();
  const isLogged = useIsLogged();

  return (
    <FAProvider>
      <StatusBar hidden />
      <BlurTheme isOpen={state['isOpened']} />

      <View style={globalStyles.container}>
        <PrimaryScrollView direction="vertical">{children}</PrimaryScrollView>
        {isLogged ? null : <NeedLoginBottomTab />}
      </View>
    </FAProvider>
  );
};

export default CustomerTemplate;
