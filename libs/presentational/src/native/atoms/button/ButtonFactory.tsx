import { ReactNode } from 'react';
import {
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Paragraph } from '../text';
import { colors } from '@present-native/styles';

export type variant =
  | 'transparent'
  | 'disabled'
  | 'bordered'
  | 'fullwidth'
  | 'default';
export interface IButton {
  variant: variant;
  text?: string;
  style?: ViewStyle | ViewStyle[];
  buttonTextStyle?: TextStyle | TextStyle[];
  iconComponent?: ReactNode;
  iconStyle?: ViewStyle;
  isLoading?: boolean;
  leftIcon?: any;
  rightIcon?: any;
  textStyle?: any;
  onPress: () => void;
}

const getButtonStyles = (variant: variant) => {
  const buttonStyle: ViewStyle = {};
  const textStyle: TextStyle = {};

  switch (variant) {
    case 'fullwidth':
      buttonStyle.backgroundColor = colors.white;
      buttonStyle.borderRadius = 99;
      textStyle.color = colors.black;
      textStyle.width = '100%';
      break;
    // 	case "secondary":
    // 		buttonStyle.backgroundColor = theme.colors.shades.gray;
    // 		textStyle.color = theme.colors.shades.white;
    // 		break;
    // 	case "transparent":
    // 		buttonStyle.backgroundColor = "transparent";
    // 		textStyle.color = theme.colors.shades.gray_40;
    // 		break;
    case 'disabled':
      buttonStyle.backgroundColor = colors.gray;
      textStyle.color = colors.gray;
      break;
    // 	case "bordered":
    // 		buttonStyle.borderColor = theme.colors.shades.gray_80;
    // 		buttonStyle.borderWidth = 1;
    // 		buttonStyle.borderRadius = 100;
    // 		textStyle.fontFamily = theme.fonts.lato.semibold;
    // 		break;
    default:
      break;
  }

  return { buttonStyle, textStyle };
};

const Button = ({
  variant,
  onPress,
  text,
  style,
  buttonTextStyle,
  rightIcon,
  leftIcon,
  ...props
}: IButton) => {
  const { buttonStyle, textStyle } = getButtonStyles(variant);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        onPress();
      }}
      style={[styles.button, buttonStyle, style]}
      {...props}
    >
      {leftIcon || <></>}
      <View style={{ flex: 1, alignItems: 'center' }}>
        {text ? (
          <Paragraph color="black">{text}</Paragraph>
        ) : null}
      </View>

      {rightIcon || <></>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    maxWidth: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});

export default Button;