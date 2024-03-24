import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { btnBoxColors } from '@styles/color';

export type baseBoxProps = {
  title?: string;
  message: string;
  isActive: boolean;
  confirmTitle: string;
  cancelTitle?: string;
  onPressConfirm: () => void;
  onPressCancel?: () => void;
};
