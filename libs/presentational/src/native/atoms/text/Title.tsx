import { Text } from 'react-native';
import React from 'react';
import {
  textAlignStyles,
  textColorStyles,
  textDecorationStyles,
  textCommonStyles,
  titleFontStyles,
} from './styles';
import { titleColors } from '@styles/color';

const Title = ({
  children,
  theme,
  lineNumber,
  color = 'black',
  align = 'left',
  decoration = 'normal',
}: {
  children: React.ReactNode;
  theme: keyof typeof titleFontStyles;
  lineNumber?: number;
  color?: keyof typeof titleColors;
  align?: 'left' | 'right' | 'center' | 'justify';
  decoration?: 'underline' | 'normal' | 'lineThrough';
}) => (
  <Text
    style={[
      titleFontStyles[theme],
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

export { Title };
