import { StyleSheet } from 'react-native';
import { colors } from './color';

const titleStyles = StyleSheet.create({
  primary: {
    color: colors.primary,
    fontSize: 16,
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
});

export { titleStyles, paragraphStyles };
