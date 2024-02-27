import { Text } from 'react-native';
import React from 'react';
import {
  blackParagraphStyles,
  primaryParagraphStyles,
  roseParagraphStyles,
  paragraphStyles
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

const RoseParagraph = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof roseParagraphStyles;
}) => <Text style={roseParagraphStyles[theme]}>{children}</Text>;

const Paragraph = ({ ...props }) => {
  const { children, numberLine,...restProps } = props;
  const primaryStyles = { ...paragraphStyles.primary, ...restProps };
  return <Text style={primaryStyles} numberOfLines={numberLine}>{children}</Text>;
};

export { PrimaryParagraph, BlackParagraph, RoseParagraph, Paragraph };
