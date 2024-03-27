import { KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
import {
  BlurTheme,
  PrimaryScrollView,
  TransparentView,
} from '@present-native/atoms';
import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';

const FreelancerTemplate = ({ children }: { children: React.ReactNode }) => {
  const { state } = useBlurTheme();

  return (
    <FAProvider>
      <StatusBar hidden />
      <BlurTheme isOpen={state['isOpened']} />

      <View style={globalStyles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <PrimaryScrollView direction="vertical">
            {children}
            <TransparentView theme="vertical" />
          </PrimaryScrollView>
        </KeyboardAvoidingView>
      </View>
    </FAProvider>
  );
};

export default FreelancerTemplate;
