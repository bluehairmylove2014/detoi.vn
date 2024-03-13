import { TouchableOpacity } from 'react-native';
import {
  baseButtonRadius,
  baseButtonSizeStyle,
  commonButtonStyles,
} from '@present-native/styles';
import { Paragraph } from '../text';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { BaseButton } from './BaseButton';

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
      <Paragraph theme="baseBold">{title}</Paragraph>
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
      <Paragraph theme="smallBold">{title}</Paragraph>
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
      <Paragraph theme="smallBold">{title}</Paragraph>
    </TouchableOpacity>
  );
};

type commonButtonProps = {
  title: string;
  radius?: keyof typeof baseButtonRadius;
  size?: keyof typeof baseButtonSizeStyle;
  iconName?: nativeIconNameType;
  iconPosition?: 'left' | 'right';
  onPress: () => void;
};

const PrimaryButton_new = ({
  title,
  radius = 'square',
  size = 'base',
  iconName,
  iconPosition,
  onPress,
}: commonButtonProps) => {
  return (
    <BaseButton
      title={title}
      theme="primary"
      radius={radius}
      size={size}
      iconName={iconName}
      iconPosition={iconPosition}
      onPress={onPress}
    />
  );
};

const SecondaryButton = ({
  title,
  radius = 'square',
  size = 'base',
  iconName,
  iconPosition,
  onPress,
}: commonButtonProps) => {
  return (
    <BaseButton
      title={title}
      theme="primary"
      radius={radius}
      size={size}
      iconName={iconName}
      iconPosition={iconPosition}
      onPress={onPress}
    />
  );
};

const OnlyBorderButton = ({
  title,
  radius = 'square',
  size = 'base',
  iconName,
  iconPosition,
  onPress,
}: commonButtonProps) => {
  return (
    <BaseButton
      title={title}
      theme="only_border"
      radius={radius}
      size={size}
      iconName={iconName}
      iconPosition={iconPosition}
      onPress={onPress}
    />
  );
};

export {
  PrimaryButton,
  SmallPrimaryButton,
  BorderButton,
  PrimaryButton_new,
  SecondaryButton,
  OnlyBorderButton,
};
