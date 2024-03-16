import { paragraphFontStyles } from '@present-native/atoms/text/styles';

type fontSizeKey = 'small' | 'medium' | 'large';

export const fontSizeBtnConfig: {
  [key in fontSizeKey]: {
    icon: number;
    text: keyof typeof paragraphFontStyles;
    paddingVertical: number;
    paddingHorizontal: number;
  };
} = {
  small: {
    icon: 12,
    text: 'smallBold', // Error here, 'smallBold' is not of type paragraphFontStyles
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  medium: {
    icon: 14,
    text: 'baseBold', // Error here, 'baseBold' is not of type paragraphFontStyles
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  large: {
    icon: 16,
    text: 'largeBold', // Error here, 'largeBold' is not of type paragraphFontStyles
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
};
