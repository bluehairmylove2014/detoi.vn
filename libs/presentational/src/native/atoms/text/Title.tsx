import { Text } from 'react-native';
import React from 'react';
import {
  primaryTitleStyles,
  whiteTitleStyle,
  blackTitleStyles,
} from '@presentational/native/styles';

const PrimaryTitle = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof primaryTitleStyles;
}) => <Text style={primaryTitleStyles[theme]}>{children}</Text>;

const WhiteTitle = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof whiteTitleStyle;
}) => <Text style={whiteTitleStyle[theme]}>{children}</Text>;

const BlackTitle = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: keyof typeof blackTitleStyles;
}) => <Text style={theme ? blackTitleStyles[theme]: {}}>{children}</Text>;

export { PrimaryTitle, WhiteTitle, BlackTitle };
