import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

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

const textColorStyles = StyleSheet.create({
  primary: {
    color: COLOR_PALETTE.primary,
  },
  black: {
    color: COLOR_PALETTE.black,
  },
  rose: {
    color: COLOR_PALETTE.rose,
  },
  white: {
    color: COLOR_PALETTE.white,
  },
  gray: {
    color: COLOR_PALETTE.gray,
  },
  yellow: {
    color: COLOR_PALETTE.yellow,
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
    flexShrink: 1,
  },
});

const staticServiceRequirementDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export {
  paragraphFontStyles,
  titleFontStyles,
  textColorStyles,
  textAlignStyles,
  textCommonStyles,
  textDecorationStyles,
  staticServiceRequirementDetailStyles,
};
