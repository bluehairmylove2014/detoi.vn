import { Text } from 'react-native';
import React from 'react';
import {
  blackParagraphStyles,
  primaryParagraphStyles,
  roseParagraphStyles,
  whiteParagraphStyles,
  textAlignStyles,
  textColorStyles,
  textDecorationStyles,
  textCommonStyles,
  paragraphFontStyles,
} from '@presentational/native/styles';

const Paragraph = ({
  children,
  theme,
  align = 'left',
}: {
  children: React.ReactNode;
  theme: keyof typeof primaryParagraphStyles;
  align?: 'left' | 'right' | 'center';
}) => (
  lineNumber,
  color = 'black',
  align = 'left',
  decoration = 'normal',
}: {
  children: React.ReactNode;
  theme: keyof typeof paragraphFontStyles;
  lineNumber?: number;
  color?: 'primary' | 'black' | 'rose' | 'white';
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

const BlackParagraph = ({
  children,
  theme,
  align = 'left',
  decoration = 'none',
  limitLineNumber = undefined,
}: {
  children: React.ReactNode;
  theme: keyof typeof blackParagraphStyles;
  align?: 'left' | 'right' | 'center';
  decoration?: 'underline' | 'line-through' | 'none';
  limitLineNumber?: number | undefined;
}) => (
  <Text
    style={[
      blackParagraphStyles[theme],
      { textAlign: align, textDecorationLine: decoration },
    ]}
    numberOfLines={limitLineNumber}
  >
    {children}
  </Text>
);

const WhiteParagraph = ({
  children,
  theme,
  align = 'left',
}: {
  children: React.ReactNode;
  theme: keyof typeof whiteParagraphStyles;
  align?: 'left' | 'right' | 'center';
}) => (
  <Text style={[whiteParagraphStyles[theme], { textAlign: align }]}>
    {children}
  </Text>
);

const RoseParagraph = ({
  children,
  theme,
  align = 'left',
}: {
  children: React.ReactNode;
  theme: keyof typeof roseParagraphStyles;
  align?: 'left' | 'right' | 'center';
}) => (
  <Text style={[roseParagraphStyles[theme], { textAlign: align }]}>
    {children}
  </Text>
);

export { PrimaryParagraph, BlackParagraph, RoseParagraph, WhiteParagraph };
export { Paragraph };
