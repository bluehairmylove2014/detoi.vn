import { Text } from 'react-native';
import React from 'react';
import { titleStyles } from '@presentational/native/styles';
import { colors } from '@presentational/native/styles';;
const EventTitle = ({ children }: { children: React.ReactNode }) => (
  <Text style={titleStyles.event}>{children}</Text>
);
const PrimaryTitle = ({ children, color }: { children: React.ReactNode, color?: string }) => (
  <Text style={[titleStyles.primary, {color: color? color : colors.primary}]}>{children}</Text>
);

export { PrimaryTitle, EventTitle };
