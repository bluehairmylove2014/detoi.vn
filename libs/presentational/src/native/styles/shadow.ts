import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from './color';

export const elevationType = {
  sm: 5,
  md: 8,
  lg: 15,
};

export const commonShadow = StyleSheet.create({
  shadowSm: {
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: elevationType.sm,
  },

  shadowMd: {
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: elevationType.md,
  },

  shadowLg: {
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: elevationType.lg,
  },
});
