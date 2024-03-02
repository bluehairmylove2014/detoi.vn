import { Text } from 'react-native';
import React from 'react';
import {
  blackParagraphStyles,
  primaryParagraphStyles,
  roseParagraphStyles,
  whiteParagraphStyles
} from '@presentational/native/styles';

const PrimaryParagraph = ({
  children,
  theme,
  align = 'left'
}: {
  children: React.ReactNode;
  theme: keyof typeof primaryParagraphStyles;
  align?: 'left' | 'right' | 'center';
}) => <Text style={[primaryParagraphStyles[theme], {textAlign: align}]}>{children}</Text>;

const BlackParagraph = ({
  children,
  theme,
  align = 'left'
}: {
  children: React.ReactNode;
  theme: keyof typeof blackParagraphStyles;
  align?: 'left' | 'right' | 'center';
}) => <Text style={[blackParagraphStyles[theme], {textAlign: align}]}>{children}</Text>;

const WhiteParagraph = ({
  children,
  theme,
  align = 'left'
}: {
  children: React.ReactNode;
  theme: keyof typeof whiteParagraphStyles;
  align?: 'left' | 'right' | 'center';
}) => <Text style={[whiteParagraphStyles[theme], {textAlign: align}]}>{children}</Text>;

const RoseParagraph = ({
  children,
  theme,
  align = 'left'
}: {
  children: React.ReactNode;
  theme: keyof typeof roseParagraphStyles;
  align?: 'left' | 'right' | 'center';
}) => <Text style={[roseParagraphStyles[theme], {textAlign: align}]}>{children}</Text>;

export { PrimaryParagraph, BlackParagraph, RoseParagraph, WhiteParagraph };
