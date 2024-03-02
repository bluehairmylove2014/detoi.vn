import { View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles';
import { useGoogleFonts } from '@business-layer/business-logic/non-service-lib/googleFont';
import { Intro } from '../atoms/loading';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { PrimaryScrollView, TransparentView } from '@present-native/atoms';

const CustomerTemplate = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useGoogleFonts();

  if (isLoading) {
    return <Intro />;
  }
  return (
    <FAProvider>
      <View style={globalStyles.container}>
        <PrimaryScrollView direction="vertical">
          {children}
          <TransparentView theme="vertical" />
        </PrimaryScrollView>
      </View>
    </FAProvider>
  );
};

export default CustomerTemplate;
