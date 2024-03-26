import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { btnBackgroundColors, btnChildColors } from '@styles/color';
import { borderBtnStyles, radiusBtnStyles } from './styles';
import { fontSizeBtnConfig } from './config';

export type baseBtnProps = {
  title: string;
  fontSize?: keyof typeof fontSizeBtnConfig;
  iconName?: nativeIconNameType;
  iconPosition?: 'left' | 'right';
  gap?: number;
  color: keyof typeof btnChildColors;
  backgroundColor: keyof typeof btnBackgroundColors;
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  border?: keyof typeof borderBtnStyles;
  borderColor?: keyof typeof btnChildColors;
  radius?: keyof typeof radiusBtnStyles;
  disabled?: boolean;
  isFitContent?: boolean;
  onPress: (...args: any[]) => void;
};
