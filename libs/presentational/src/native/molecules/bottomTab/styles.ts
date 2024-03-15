import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

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
