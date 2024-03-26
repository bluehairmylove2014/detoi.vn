import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from './color';

export const commonShadow = StyleSheet.create({
  top: {
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  bottom: {
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: 0,
      height: -5, // Negative value to create a shadow below
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  left: {
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: -5, // Negative value to create a shadow on the left
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  right: {
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: 5, // Positive value to create a shadow on the right
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  around: {
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.65,
    elevation: 5,
  },
});
