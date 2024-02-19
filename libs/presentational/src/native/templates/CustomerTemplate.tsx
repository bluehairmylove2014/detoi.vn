import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from '../styles';
import { useGoogleFonts } from '@business-layer/business-logic/non-service-lib/googleFont';
import { Intro } from '../atoms/loading';
import { FAProvider } from '@business-layer/business-logic/non-service-lib/fontawesome';

const CustomerTemplate = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useGoogleFonts();
  const [fakeLoading, setFakeLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false);
    }, 1000);
  }, []);

  if (fakeLoading) {
    return <Intro />;
  }
  return (
    <FAProvider appType="customer-mobile-app">
      <View style={globalStyles.container}>{children}</View>
    </FAProvider>
  );
};

export default CustomerTemplate;
