import { View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles';
import { useGoogleFonts } from '@business-layer/business-logic/non-service-lib/googleFont';
import { Intro } from '../atoms/loading';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';

const CustomerTemplate = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useGoogleFonts();

  if (isLoading) {
    return <Intro />;
  }
  return (
    <FAProvider appType="native">
      <View style={globalStyles.container}>{children}</View>
    </FAProvider>
  );
};

export default CustomerTemplate;
