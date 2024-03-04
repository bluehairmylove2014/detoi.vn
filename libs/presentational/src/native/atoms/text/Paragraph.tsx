import { Text } from 'react-native';
import React from 'react';
import {
  blackParagraphStyles,
  grayParagraphStyles,
  primaryParagraphStyles,
  roseParagraphStyles,
  secondaryParagraphStyles,
  whiteParagraphStyles,
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
  align,
}: {
  children: React.ReactNode;
  theme: keyof typeof blackParagraphStyles;
  align?: 'center' | 'left' | 'right';
}) => {
  const textStyle = [
    blackParagraphStyles[theme],
    align && { textAlign: align },
  ];

  return <Text style={textStyle}>{children}</Text>;
};

const GrayParagraph = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof grayParagraphStyles;
}) => <Text style={grayParagraphStyles[theme]}>{children}</Text>;

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

const SecondaryParagraph = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: keyof typeof secondaryParagraphStyles;
}) => <Text style={secondaryParagraphStyles[theme]}>{children}</Text>;

export {
  PrimaryParagraph,
  BlackParagraph,
  RoseParagraph,
  SecondaryParagraph,
  GrayParagraph,
  WhiteParagraph,
};
