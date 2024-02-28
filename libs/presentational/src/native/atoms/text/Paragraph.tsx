import { Text } from 'react-native';
import React from 'react';
import {
  blackParagraphStyles,
  primaryParagraphStyles,
  roseParagraphStyles,
  blackParagraphLimitLineStyles,
  whiteParagraphStyles
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

const WhiteParagraph = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof whiteParagraphStyles;
}) => <Text style={whiteParagraphStyles[theme]}>{children}</Text>;

const RoseParagraph = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof roseParagraphStyles;
}) => <Text style={roseParagraphStyles[theme]}>{children}</Text>;

const BlackParagraphLimitLine = ({
  children,
  theme,
  numberLine
}: {
  children: React.ReactNode;
  theme: keyof typeof blackParagraphLimitLineStyles;
  numberLine: number;
}) => <Text style={blackParagraphLimitLineStyles[theme]} numberOfLines={numberLine}>{children}</Text>;

export { PrimaryParagraph, BlackParagraph, RoseParagraph, BlackParagraphLimitLine, WhiteParagraph };
