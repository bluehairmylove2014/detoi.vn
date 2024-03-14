import {
  COLOR_PALETTE,
  screenHorizontalPadding,
  screenVerticalPadding,
} from '@presentational/native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const iamgeDetailScreenStyle = StyleSheet.create({
  imageSection: {
    width: windowWidth,
    height: windowHeight - windowHeight / 3,
    paddingHorizontal: screenHorizontalPadding,
    paddingVertical: screenVerticalPadding,
  },
  descriptionSection: {
    height: windowHeight / 3,
    backgroundColor: COLOR_PALETTE.black,
  },
});

export { iamgeDetailScreenStyle };
