import { windowWidth } from '@constants/dimension';
import {
  COLOR_PALETTE,
  HEADER_HEIGHT,
  screenHorizontalPadding,
} from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const authHeaderStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
});

export const headerWithOrderStyles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PALETTE.soft,
    width: windowWidth,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: screenHorizontalPadding,
  },
  safeContainer: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 30,
  },
  orderDetailContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 14,
    flexGrow: 1,
  },
  orderDetailTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    flexShrink: 1,
  },
  imageContainer: {
    width: 60,
  },
  cancelOrderBtnContainer: {
    flexShrink: 1,
  },
});
