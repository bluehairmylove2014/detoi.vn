import { windowHeight, windowWidth } from '@constants/dimension';
import { COLOR_PALETTE } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const onServiceScreenStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    minHeight: windowHeight,
    height: 'auto',
    position: 'relative',
  },

  billWrapper: {
    width: '100%',
    paddingHorizontal: 15,
  },
  billContainer: {
    padding: 20,
    backgroundColor: COLOR_PALETTE.white,
    borderRadius: 20,
  },

  infoBillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    width: '100%',
    overflow: 'hidden',
    gap: 20,
  },

  infoEmployee: {
    flexDirection: 'row',
    flexShrink: 1,
    overflow: 'hidden',
  },
  infoPrice: {
    flexDirection: 'column',
    flexGrow: 1,
  },

  avatarContainer: {
    width: 50,
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
  },

  mapStyle: {
    width: '100%',
    height: '100%',
  },

  chatBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    flexGrow: 1,
    backgroundColor: COLOR_PALETTE.softBg,
    borderRadius: 5,
    paddingHorizontal: 20,
    height: '100%',
  },

  popupWrapper: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: 10,
  },

  backButton: {
    borderRadius: 999,
    width: 40,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: COLOR_PALETTE.white,
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
