import { StyleSheet } from 'react-native';
import { colors } from './color';

const paragraphFontStyles = StyleSheet.create({
  smallRegular: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
  },
  smallMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
  },
  smallSemibold: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 12,
  },
  smallBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 12,
  },
  baseRegular: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
  },
  baseMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
  },
  baseSemibold: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
  },
  baseBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
  },
  largeRegular: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  largeMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
  },
  largeSemibold: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  largeBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
  },
});
const titleFontStyles = StyleSheet.create({
  baseMedium: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
  },
  baseBold: {
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
  },
  largeMedium: {
    fontSize: 20,
    fontFamily: 'Montserrat_600SemiBold',
  },
  largeBold: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
});

const whiteParagraphStyles = StyleSheet.create({
  largeBold: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    color: colors.white,
    userSelect: 'none',
  },
  largeMedium: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    userSelect: 'none',
  },

  baseMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: colors.white,
    userSelect: 'none',
  },
  baseBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: colors.white,
    userSelect: 'none',
  },
  smallMedium: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 13,
    color: colors.white,
    userSelect: 'none',
  },
  smallBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 12,
    color: colors.white,
    userSelect: 'none',
  },
  smallThin: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    color: colors.white,
    userSelect: 'none',
  }
});

const roseParagraphStyles = StyleSheet.create({
  largeMedium: {
    color: colors.rose,
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    userSelect: 'none',
const textColorStyles = StyleSheet.create({
  primary: {
    color: colors.primary,
  },
  black: {
    color: colors.black,
  },
  rose: {
    color: colors.rose,
  },
  white: {
    color: colors.white,
  },
});
const textAlignStyles = StyleSheet.create({
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  justify: {
    textAlign: 'justify',
  },
});
const textDecorationStyles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  normal: {},
});
const textCommonStyles = StyleSheet.create({
  behavior: {
    pointerEvents: 'none',
    userSelect: 'none',
  },
});

export { primaryTitleStyles, whiteTitleStyle, blackTitleStyles };

export { primaryParagraphStyles, blackParagraphStyles, roseParagraphStyles, whiteParagraphStyles };
export {
  paragraphFontStyles,
  titleFontStyles,
  textColorStyles,
  textAlignStyles,
  textCommonStyles,
  textDecorationStyles,
};
