import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { PrimaryScrollView, TransparentView } from '@present-native/atoms';

const CustomerTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <FAProvider>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
          <PrimaryScrollView direction="vertical">
            {children}
            <TransparentView theme="vertical" />
          </PrimaryScrollView>
        </View>
      </TouchableWithoutFeedback>
    </FAProvider>
  );
};

export default CustomerTemplate;
