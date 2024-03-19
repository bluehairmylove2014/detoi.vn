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
});
