import { Text } from 'react-native';
import React from 'react';
import { titleStyles } from '@presentational/native/styles';

const PrimaryTitle = ({ children }: { children: React.ReactNode }) => (
  <Text style={titleStyles.primary}>{children}</Text>
);

export { PrimaryTitle };
