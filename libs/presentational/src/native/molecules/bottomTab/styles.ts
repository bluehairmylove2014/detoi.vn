import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

export const BarIconSectionStyle = StyleSheet.create({
  active_icon_container: {
    borderWidth: 1.5,
    borderRadius: 999,
    // Not in color.ts
    borderColor: '#C89300',
    padding: 18,
    backgroundColor: COLOR_PALETTE.white,
    marginBottom: 25,
  },

  inactive_icon_container: {
    alignItems: 'center',
    gap: 3,
  },

  label: {
    // Not in color.ts
    color: '#595753',
    fontSize: 11,
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
