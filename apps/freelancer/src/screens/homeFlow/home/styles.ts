import { windowWidth } from '@constants/dimension';
import {
  COLOR_PALETTE,
  screenVerticalPadding,
} from '@presentational/native/styles';
import { StyleSheet } from 'react-native';

const homeScreenStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 'auto',
    backgroundColor: COLOR_PALETTE.softBg,
    paddingVertical: screenVerticalPadding,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export { homeScreenStyle };
