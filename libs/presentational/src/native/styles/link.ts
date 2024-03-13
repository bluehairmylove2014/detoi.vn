import { StyleSheet } from 'react-native';

export const linkStyle = StyleSheet.create({
  subtitleLink: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
});
export const commonLinkThemes = StyleSheet.create({
  underline: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  italic: {
    fontFamily: 'Montserrat_500Medium_Italic',
  },
  normal: {},
});
export const commonLinkFontSize = StyleSheet.create({
  extraSmallBold: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
  },
  small: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
  },
  base: {
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  large: {
    fontSize: 18,
    fontFamily: 'Montserrat_500Medium',
  },
});
export const commonLinkAlign = StyleSheet.create({
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});
