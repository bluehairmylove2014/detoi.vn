import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

const commonDividerStyles = StyleSheet.create({
  horizontalDivider: {
    height: 0.7,
  },
  verticalDivider: {
    flex: 1,
    width: 0.7,
  },
});

const colorDivider = StyleSheet.create({
  primary: {
    backgroundColor: COLOR_PALETTE.primary,
  },
  gray: {
    backgroundColor: COLOR_PALETTE.gray,
  },
  black: {
    backgroundColor: COLOR_PALETTE.black,
  },
});

export { commonDividerStyles, colorDivider };
