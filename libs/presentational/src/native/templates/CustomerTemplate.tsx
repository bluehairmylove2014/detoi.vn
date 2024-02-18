import { View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CustomerTemplate = ({ children }: { children: React.ReactNode }) => {
  return <View style={tw`flex-1`}>{children}</View>;
};

export default CustomerTemplate;
