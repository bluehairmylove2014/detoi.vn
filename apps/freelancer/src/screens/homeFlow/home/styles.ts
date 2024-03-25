import { windowWidth } from '@constants/dimension';
import {
  COLOR_PALETTE,
  screenHorizontalPadding,
  screenVerticalPadding,
} from '@presentational/native/styles';
import { StyleSheet } from 'react-native';

const homeScreenStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 'auto',
    paddingVertical: screenVerticalPadding,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  interactionView: {
    width: '100%',
    paddingHorizontal: screenHorizontalPadding,
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceView: {
    height: '100%',
    flexGrow: 1,
    display: 'flex',
    backgroundColor: COLOR_PALETTE.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  balanceViewColumn: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  jobSettingView: {
    height: '100%',
    flexShrink: 1,
    display: 'flex',
    backgroundColor: COLOR_PALETTE.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  jobSettingRowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  innerContentWrapper: {
    paddingHorizontal: screenHorizontalPadding,
    width: '100%',
  },
});

export { homeScreenStyle };
