import { Text } from 'react-native';
import React from 'react';
import {
  textAlignStyles,
  textColorStyles,
  textDecorationStyles,
  textCommonStyles,
  paragraphFontStyles,
} from './styles';
import { textColors } from '@present-native/styles';

const Paragraph = ({
  children,
  theme,
  lineNumber,
  color = 'black',
  align = 'left',
  decoration = 'normal',
  ellipsizeMode = 'tail',
}: {
  children: React.ReactNode;
  theme: keyof typeof paragraphFontStyles;
  lineNumber?: number;
  color?: keyof typeof textColors;
  align?: 'left' | 'right' | 'center' | 'justify';
  decoration?: 'underline' | 'normal' | 'lineThrough';
  ellipsizeMode?: 'tail' | 'middle' | 'clip' | 'head';
}) => (
  <Text
    style={[
      paragraphFontStyles[theme],
      textColorStyles[color],
      textAlignStyles[align],
      textDecorationStyles[decoration],
      textCommonStyles.behavior,
    ]}
    ellipsizeMode={ellipsizeMode}
    numberOfLines={lineNumber}
  >
    {children}
  </Text>
);

export { Paragraph };
