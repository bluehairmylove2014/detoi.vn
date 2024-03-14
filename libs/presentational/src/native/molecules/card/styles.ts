import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

export const ServiceCardSectionStyle = StyleSheet.create({
  card: {
    backgroundColor: COLOR_PALETTE.soft,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 7,
    borderRadius: 5,
  },

  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});
