import { SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CustomerTemplate = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView style={tw`w-full`}>{children}</SafeAreaView>;
};

export default CustomerTemplate;
