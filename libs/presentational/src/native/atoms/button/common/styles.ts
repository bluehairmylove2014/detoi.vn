import { COLOR_PALETTE } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const baseBtnStyles = StyleSheet.create({
  btn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
  },
  icon: {},
  text: {},
});
export const borderBtnStyles = StyleSheet.create({
  solid: {
    borderWidth: 1,
  },

  none: {},
});
export const radiusBtnStyles = StyleSheet.create({
  full: {
    borderRadius: 999,
  },
  square: {
    borderRadius: 5,
  },
});
