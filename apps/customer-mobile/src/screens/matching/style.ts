import { windowHeight } from "@constants/dimension";
import { colors, } from "@present-native/styles";
import { StyleSheet } from "react-native";

export const matchingScreenStyle = StyleSheet.create({
    container: {
    flex: 1,
    height: 'auto',
    backgroundColor: colors.softBg,
  },
})

export const serviceInfo = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    padding: 20,
    overflow: 'hidden',
    backgroundColor: colors.soft,
    display: 'flex',
    justifyContent: "flex-end",

  },
})

export const matchingResultStyle = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        overflow: 'hidden',
  },

  filter_container: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  button_filter: {
    minWidth: 50
  }
})