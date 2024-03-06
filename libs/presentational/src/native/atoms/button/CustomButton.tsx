import { TouchableOpacity, View } from 'react-native';
import { Paragraph } from '../text';
import {
  customButtonRadius,
  customButtonSizeStyle,
  customButtonThemeStyle,
  customIconTextButton,
  paragraphFontStyles,
} from '@present-native/styles';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { FAIcon } from '../icon';

const textSize: Record<
  keyof typeof customButtonSizeStyle,
  keyof typeof paragraphFontStyles
> = {
  small: 'baseSemibold',
  base: 'largeBold',
};

const textColor: Record<
  keyof typeof customButtonThemeStyle,
  'primary' | 'black' | 'rose' | 'white'
> = {
  primary: 'black',
  secondary: 'white',
  outlined: 'black',
};

const iconSize: Record<keyof typeof customButtonSizeStyle, number> = {
  small: 18.5,
  base: 20,
};

type customButtonProps = {
  title: string;
  radius?: keyof typeof customButtonRadius;
  theme: keyof typeof customButtonThemeStyle;
  size: keyof typeof customButtonSizeStyle;
  iconName?: nativeIconNameType;
  onPress: () => void;
};

// type textButtonProps = customButtonProps & {
//   type: 'text';
// };

// type iconTextButtonProps = customButtonProps & {
//   type: 'icon_text';
// };

export const CustomButton = ({
  title,
  radius = 'square',
  theme = 'primary',
  size,
  iconName,
  onPress,
}: customButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...customButtonThemeStyle[theme],
        ...customButtonSizeStyle[size],
        ...customButtonRadius[radius],
      }}
    >
      {iconName ? (
        <View style={customIconTextButton.container}>
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
