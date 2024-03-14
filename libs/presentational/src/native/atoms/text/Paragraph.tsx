import { Text } from 'react-native';
import React from 'react';
import {
  textAlignStyles,
  textColorStyles,
  textDecorationStyles,
  textCommonStyles,
  paragraphFontStyles,
} from './styles';

const Paragraph = ({
  children,
  theme,
  lineNumber,
  color = 'black',
  align = 'left',
  decoration = 'normal',
}: {
  children: React.ReactNode;
  theme: keyof typeof paragraphFontStyles;
  lineNumber?: number;
  color?: 'primary' | 'black' | 'rose' | 'white' | 'gray' | 'yellow' | 'white';
  align?: 'left' | 'right' | 'center' | 'justify';
  decoration?: 'underline' | 'normal' | 'lineThrough';
}) => (
  <Text
    style={[
      paragraphFontStyles[theme],
      textColorStyles[color],
      textAlignStyles[align],
      textDecorationStyles[decoration],
      textCommonStyles.behavior,
    ]}
    numberOfLines={lineNumber}
  >
    {children}
  </Text>
);

export { Paragraph };
