import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { COLOR_PALETTE, globalStyles } from '../styles';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
import {
  BlurTheme,
  PrimaryScrollView,
  TransparentView,
} from '@present-native/atoms';
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

      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
      <View style={globalStyles.container}>
        <KeyboardAvoidingView>
          <PrimaryScrollView direction="vertical">
            {children}
            <TransparentView theme="vertical" />
          </PrimaryScrollView>
        </KeyboardAvoidingView>
        {isLogged ? null : <NeedLoginBottomTab />}
      </View>
      {/* </TouchableWithoutFeedback> */}
    </FAProvider>
  );
};

export default CustomerTemplate;
