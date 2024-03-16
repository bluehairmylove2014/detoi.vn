import { windowHeight, windowWidth } from '@constants/dimension';
import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from './color';

const globalStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    minHeight: windowHeight,
    position: 'relative',
  },
  emptySpace: {
    width: windowWidth,
    height: 500,
    backgroundColor: COLOR_PALETTE.transparent,
  },
});

export { globalStyles };
