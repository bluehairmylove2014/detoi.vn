import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { globalStyles } from '../styles';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
import {
  BlurTheme,
  PrimaryScrollView,
  TransparentView,
} from '@present-native/atoms';
import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';

const CustomerTemplate = ({
  children,
  isHideTransparentView = true,
}: {
  children: React.ReactNode;
  isHideTransparentView?: boolean;
}) => {
  const { state } = useBlurTheme();

  return (
    <FAProvider>
      <SafeAreaView>
        <StatusBar hidden />
        <BlurTheme isOpen={state['isOpened']} />

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={globalStyles.container}>
            <PrimaryScrollView direction="vertical">
              {children}
              {isHideTransparentView ? <TransparentView theme="vertical" /> : <></>}
            </PrimaryScrollView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </FAProvider>
  );
};

export default CustomerTemplate;
