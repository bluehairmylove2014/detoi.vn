import { baseButtonRadius, baseButtonSizeStyle } from '@present-native/styles';
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

type commonButtonProps = {
  title: string;
  radius?: keyof typeof baseButtonRadius;
  size?: keyof typeof baseButtonSizeStyle;
  iconName?: nativeIconNameType;
  iconPosition?: 'left' | 'right';
  onPress: () => void;
  color?: 'black';
};

const PrimaryButton = ({
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
  color,
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

export { PrimaryButton, SecondaryButton, OnlyBorderButton };
