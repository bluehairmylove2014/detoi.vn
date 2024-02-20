import { Text } from 'react-native';
import React from 'react';
import { titleStyles } from '@presentational/native/styles';

const EventTitle = ({ children }: { children: React.ReactNode }) => (
  <Text style={titleStyles.event}>{children}</Text>
);
const PrimaryTitle = ({ children }: { children: React.ReactNode }) => (
  <Text style={titleStyles.primary}>{children}</Text>
);

export { PrimaryTitle, EventTitle };
