import { Text } from 'react-native';
import React from 'react';
import {
  blackParagraphStyles,
  primaryParagraphStyles,
} from '@presentational/native/styles';

const PrimaryParagraph = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof primaryParagraphStyles;
}) => <Text style={primaryParagraphStyles[theme]}>{children}</Text>;

const BlackParagraph = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof blackParagraphStyles;
}) => <Text style={blackParagraphStyles[theme]}>{children}</Text>;

export { PrimaryParagraph, BlackParagraph };
