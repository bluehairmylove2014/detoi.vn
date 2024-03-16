import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';
import { windowWidth } from '@constants/dimension';
import { screenHorizontalPadding } from '@present-native/styles';

export const BarIconSectionStyle = StyleSheet.create({
  icon_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },

  iconLabel: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 8,
  },

  new_notif: {
    position: 'absolute',
    right: '12.5%',
    backgroundColor: COLOR_PALETTE.rose,
    minWidth: 5,
    minHeight: 5,
    borderRadius: 999,
  },
});
export const needLoginBottomTabStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 80,
    overflow: 'hidden',
    backgroundColor: COLOR_PALETTE.white,
  },
  buttonWrapper: {
    height: '100%',
    flexShrink: 1,
  },
  innerPadding: {
    width: '100%',
    paddingHorizontal: screenHorizontalPadding,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: 20,
  },
});
