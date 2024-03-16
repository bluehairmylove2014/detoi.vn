import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from './color';

export const commonShadow = StyleSheet.create({
  top: {
    shadowColor: COLOR_PALETTE.gray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,

    elevation: 5,
  },
});
