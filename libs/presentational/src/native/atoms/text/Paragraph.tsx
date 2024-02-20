import { Text } from 'react-native';
import React from 'react';
import { primaryParagraphStyles } from '@presentational/native/styles';

const PrimaryParagraph = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof primaryParagraphStyles;
}) => <Text style={primaryParagraphStyles[theme]}>{children}</Text>;

export { PrimaryParagraph };
