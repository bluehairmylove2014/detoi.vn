import { Platform, StyleSheet } from 'react-native';

export function generateBoxShadowStyle(
  xOffset: number,
  yOffset: number,
  shadowColorIos: string,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
  shadowColorAndroid: string
) {
  if (Platform.OS === 'ios') {
    return StyleSheet.create({
      boxShadow: {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      },
    });
  } else if (Platform.OS === 'android') {
    return StyleSheet.create({
      boxShadow: {
        elevation,
        shadowColor: shadowColorAndroid,
      },
    });
  } else {
    return StyleSheet.create({
      boxShadow: {},
    });
  }
}
