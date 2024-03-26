import { COLOR_PALETTE, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const BookingDetailStyle = StyleSheet.create({
  safeAreaStyle: {
    height: windowHeight,
  },

  container: {
    width: windowWidth,
    height: '100%',
    paddingVertical: screenVerticalPadding,
    paddingHorizontal: 20,
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_PALETTE.zinc,
  },

  serviceInfoContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_PALETTE.zinc,
  },

  serviceInfoContentContainer: {
    flexDirection: 'row',
  },

  serviceDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export { BookingDetailStyle };
