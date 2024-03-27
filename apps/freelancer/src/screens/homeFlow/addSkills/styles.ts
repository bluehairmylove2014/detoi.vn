import { windowHeight } from '@constants/dimension';
import {
  COLOR_PALETTE,
  screenHorizontalPadding,
  screenVerticalPadding,
} from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const addSkillsStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    height: windowHeight,
    backgroundColor: COLOR_PALETTE.soft,
  },
  contentContainer: {
    paddingVertical: screenVerticalPadding,
    paddingHorizontal: screenHorizontalPadding,
  },
});
