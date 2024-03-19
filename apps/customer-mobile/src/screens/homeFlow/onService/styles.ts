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
    backgroundColor: COLOR_PALETTE.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  billContainer: {
    padding: 20,
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
    gap: 20,
  },

  mapStyle: {
    width: '100%',
    height: '100%',
  },

  freelancerDetailWrapper: {
    width: windowWidth - 40,
    borderRadius: 10,
    backgroundColor: COLOR_PALETTE.soft,
    padding: 20,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
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
});
