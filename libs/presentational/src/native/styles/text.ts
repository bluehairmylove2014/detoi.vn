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
  primaryBold: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
    userSelect: 'none',
  }
});
const whiteTitleStyle = StyleSheet.create({
  categoryName: {
    color: colors.white,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
});

const blackTitleStyles = StyleSheet.create({
  largeBold: {
    color: colors.black,
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    userSelect: 'none',
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
  baseMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: colors.primary,
    userSelect: 'none',
  },
  baseBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: colors.primary,
    userSelect: 'none',
  },
});

const whiteParagraphStyles = StyleSheet.create({
  normalMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: colors.white,
    userSelect: 'none',
    textAlign: 'center'
  },
  normalBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: colors.white,
    userSelect: 'none',
  },
});

const blackParagraphLimitLineStyles = StyleSheet.create({
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
  normalMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: colors.primary,
    userSelect: 'none',
  },
  normalBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: colors.primary,
    userSelect: 'none',
  },
});

const blackParagraphStyles = StyleSheet.create({
  largeBold: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: colors.black,
    userSelect: 'none',
  },
  largeMedium: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    userSelect: 'none',
  },

  baseMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: colors.black,
    userSelect: 'none',
  },
  baseBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: colors.black,
    userSelect: 'none',
  },

  smallMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 13,
    color: colors.black,
    userSelect: 'none',
  },
  smallBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 12,
    color: colors.black,
    userSelect: 'none',
  },
});

const roseParagraphStyles = StyleSheet.create({
  largeMedium: {
    color: colors.rose,
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    userSelect: 'none',
  },
  baseMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: colors.rose,
    userSelect: 'none',
  },
});

export { primaryTitleStyles, whiteTitleStyle, blackTitleStyles };
export { primaryParagraphStyles, blackParagraphStyles, roseParagraphStyles, blackParagraphLimitLineStyles, whiteParagraphStyles };
