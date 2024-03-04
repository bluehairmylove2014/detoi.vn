import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';
import { screenHorizontalPadding } from '@present-native/styles';

const chooseLocationScreenStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    zIndex: 1,
  },
  bodyContainer: {
    paddingHorizontal: screenHorizontalPadding,
  },
});

export { chooseLocationScreenStyle };
