import { StyleSheet } from 'react-native';
import { colors } from './color';

const primaryTitleStyles = StyleSheet.create({
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
const whiteTitleStyle = StyleSheet.create({
  categoryName: {
    color: colors.white,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
});

const primaryParagraphStyles = StyleSheet.create({
  small: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 13,
    color: colors.primary,
    userSelect: 'none',
  },
  smallBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 13,
    color: colors.primary,
    userSelect: 'none',
  },
  light: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: colors.primary,
    userSelect: 'none',
  },
});

export { primaryTitleStyles, primaryParagraphStyles, whiteTitleStyle };
