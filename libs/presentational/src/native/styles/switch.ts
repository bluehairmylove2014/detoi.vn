import { StyleSheet } from 'react-native';
import { colors } from './color';

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
    backgroundColor: colors.zinc,
    padding: 4,
    justifyContent: 'center',
  },

  switchButtonActive: {
    backgroundColor: colors.secondary,
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: colors.white,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
  },

  circleActive: {
    transform: [{ translateX: 30 }],
    shadowColor: colors.yellow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
  },
});
