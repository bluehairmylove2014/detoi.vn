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
    gap: 20,
    marginBottom: 30,
    flexWrap: 'nowrap',
  },
  imageContainer: {
    width: 70,
  },
  orderDetailTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    flexGrow: 1,
  },
  cancelOrderBtnContainer: {
    flexShrink: 1,
    width: 30,
  },
});

export const freelancerHeaderStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    paddingHorizontal: screenHorizontalPadding,
  },
  nameView: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 5,
  },
  avatarView: {
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
  avatarWrapper: {
    width: 60,
  },
});


export const headerWithTitleStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});