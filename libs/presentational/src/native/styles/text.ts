import { StyleSheet } from 'react-native';
import { colors } from './color';

const titleStyles = StyleSheet.create({
  event: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    userSelect: 'none',
  },
  primary: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    userSelect: 'none',
  },
});

const paragraphStyles = StyleSheet.create({
  small: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    color: colors.primary,
    userSelect: 'none',
  },
  lightPrimary: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: colors.primary,
    userSelect: 'none',
  },
});

export { titleStyles, paragraphStyles };
