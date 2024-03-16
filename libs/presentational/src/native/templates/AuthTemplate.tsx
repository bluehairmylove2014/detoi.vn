import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { globalStyles } from '../styles';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { BlurTheme, PrimaryScrollView } from '@present-native/atoms';
import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  const { state } = useBlurTheme();

  return (
    <FAProvider>
      <StatusBar hidden />
      <BlurTheme isOpen={state['isOpened']} />

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
          <PrimaryScrollView direction="vertical">{children}</PrimaryScrollView>
        </View>
      </TouchableWithoutFeedback>
    </FAProvider>
  );
};

export default AuthTemplate;
