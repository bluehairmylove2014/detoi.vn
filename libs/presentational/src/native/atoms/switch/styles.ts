import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

export const serviceRequirementsSwitchStyle = StyleSheet.create({
  container: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  labelContainer: {
    flexDirection: 'row',
    marginRight: 60,
    alignItems: 'center',
    alignSelf: 'flex-start',
    flex: 1,
  },

  switchButton: {
    width: 58,
    height: 26,
    borderRadius: 16,
    backgroundColor: COLOR_PALETTE.zinc,
    padding: 4,
    justifyContent: 'center',
  },

  switchButtonActive: {
    backgroundColor: COLOR_PALETTE.secondary,
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: COLOR_PALETTE.white,
    shadowColor: COLOR_PALETTE.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
  },

  circleActive: {
    transform: [{ translateX: 30 }],
    shadowColor: COLOR_PALETTE.yellow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
  },
});
