import { COLOR_PALETTE, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const testPreviewStyle = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: COLOR_PALETTE.soft,
    height: windowHeight,
  },

  container: {
    width: windowWidth,
    height: 'auto',
    paddingVertical: screenVerticalPadding,
    paddingHorizontal: 20,
  },

  iconContainer: {
    borderWidth: 2,
    borderRadius: 99,
    width: 40,
    height: 40,
    borderColor: COLOR_PALETTE.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexRowCenterItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loaderContain: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { testPreviewStyle };
