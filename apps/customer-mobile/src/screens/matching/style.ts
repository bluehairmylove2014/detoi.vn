import { windowWidth } from "@constants/dimension";
import { colors, screenHorizontalPadding } from "@present-native/styles";
import { StyleSheet } from "react-native";

export const matchingScreenStyle = StyleSheet.create({
    container: {
    flex: 1,
    height: 'auto',
    backgroundColor: colors.softBg,
  },
})

export const topLabelStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 220,
  },
  event: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: windowWidth,
    height: '75%',
    backgroundColor: colors.soft,
    paddingHorizontal: screenHorizontalPadding,
  },
})