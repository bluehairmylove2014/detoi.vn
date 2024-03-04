import { StyleSheet } from 'react-native';
import { colors } from './color';

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
    backgroundColor: colors.primary,
  },
  gray: {
    backgroundColor: colors.gray,
  },
  black: {
    backgroundColor: colors.black,
  },
});

export { commonDividerStyles, colorDivider };
