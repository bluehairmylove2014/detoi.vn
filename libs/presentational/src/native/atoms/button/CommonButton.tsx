import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, commonButtonStyles } from '@present-native/styles';
import { BlackParagraph } from '../text';

const themeList = {
  'square-rounded-bold': { borderRadius: 5 },
  'full-rounded-bold': { borderRadius: 999 },
};
type commonButtonPros = {
  title: string;
  theme: 'square-rounded-bold' | 'full-rounded-bold';
  onPress: () => void;
};

const PrimaryButton = ({
  title,
  theme = 'square-rounded-bold',
  onPress,
}: commonButtonPros) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...commonButtonStyles.primaryButton,
        ...themeList[theme],
      }}
    >
      <BlackParagraph theme="baseBold">{title}</BlackParagraph>
    </TouchableOpacity>
  );
};

const SmallPrimaryButton = ({
  title,
  theme = 'square-rounded-bold',
  onPress,
}: commonButtonPros) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...commonButtonStyles.smallPrimaryButton,
        ...themeList[theme],
      }}
    >
      <BlackParagraph theme="smallBold">{title}</BlackParagraph>
    </TouchableOpacity>
  );
};

const BorderButton = ({
  title,
  theme = 'square-rounded-bold',
  onPress,
}: commonButtonPros) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...commonButtonStyles.borderButton,
        ...themeList[theme],
      }}
    >
      <BlackParagraph theme="smallBold">{title}</BlackParagraph>
    </TouchableOpacity>
  );
};

export { PrimaryButton, SmallPrimaryButton, BorderButton };
