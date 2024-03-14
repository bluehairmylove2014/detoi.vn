import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { btnBackgroundColor, btnChildColor } from '@styles/color';
import { borderBtnStyles, radiusBtnStyles } from './styles';
import { fontSizeBtnConfig } from './config';

export type baseBtnProps = {
  title: string;
  fontSize?: keyof typeof fontSizeBtnConfig;
  iconName?: nativeIconNameType;
  iconPosition?: 'left' | 'right';
  gap?: number;
  color: keyof typeof btnChildColor;
  backgroundColor: keyof typeof btnBackgroundColor;
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  border?: keyof typeof borderBtnStyles;
  radius?: keyof typeof radiusBtnStyles;
  onPress: (...args: any[]) => void;
};
