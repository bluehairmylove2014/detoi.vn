import { windowHeight, windowWidth } from '@constants/dimension';
import { StyleSheet } from 'react-native';
import { colors } from './color';

const globalStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    minHeight: windowHeight,
  },
  emptySpace: {
    width: windowWidth,
    height: 500,
    backgroundColor: colors.transparent,
  },
});

export { globalStyles };
