import { StyleSheet } from 'react-native';
import { colors } from './color';

const commonButtonStyles = StyleSheet.create({
  bellIconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '100%',
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: colors.zinc,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bellIconButton_innerContainer: {
    position: 'relative',
  },
  bellIconButton_badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: colors.rose,
    width: 16,
    height: 16,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.white,
  },
  bellIconButton_badgeText: {
    color: colors.white,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 10,
  },

  primaryButton: {
    width: '100%',
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    alignItems: 'center',
  },
});
const asyncButtonStyles = StyleSheet.create({});

export { commonButtonStyles, asyncButtonStyles };
