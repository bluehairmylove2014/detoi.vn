import { TouchableOpacity, View } from 'react-native';
import { Paragraph } from '../text';
import {
  baseButtonRadius,
  baseButtonSizeStyle,
  baseButtonThemeStyle,
  baseIconTextButton,
  paragraphFontStyles,
  textColorStyles,
} from '@present-native/styles';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { FAIcon } from '../icon';

const textSize: Record<
  keyof typeof baseButtonSizeStyle,
  keyof typeof paragraphFontStyles
> = {
  small: 'smallBold',
  base: 'baseBold',
};

const textColor: Record<
  keyof typeof baseButtonThemeStyle,
  keyof typeof textColorStyles
> = {
  primary: 'black',
  secondary: 'black',
  only_border: 'black',
};

const iconSize: Record<keyof typeof baseButtonSizeStyle, number> = {
  small: 18.5,
  base: 20,
};

type baseButtonProps = {
  title: string;
  radius?: keyof typeof baseButtonRadius;
  theme: keyof typeof baseButtonThemeStyle;
  size?: keyof typeof baseButtonSizeStyle;
  iconName?: nativeIconNameType;
  iconPosition?: 'left' | 'right';
  onPress: () => void;
};

export const BaseButton = ({
  title,
  radius = 'square',
  theme = 'primary',
  size = 'base',
  iconName,
  iconPosition = 'left',
  onPress,
}: baseButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...baseButtonThemeStyle[theme],
        ...baseButtonSizeStyle[size],
        ...baseButtonRadius[radius],
      }}
    >
      {iconName ? (
        <View
          style={{
            ...baseIconTextButton.container,
            ...baseIconTextButton[iconPosition],
          }}
        >
          <FAIcon iconName={iconName} size={iconSize[size]} />
          <Paragraph theme={textSize[size]} color={textColor[theme]}>
            {title}
          </Paragraph>
        </View>
      ) : (
        <Paragraph theme={textSize[size]} color={textColor[theme]}>
          {title}
        </Paragraph>
      )}
    </TouchableOpacity>
  );
};
