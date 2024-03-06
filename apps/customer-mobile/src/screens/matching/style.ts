import { windowHeight } from "@constants/dimension";
import { colors, } from "@present-native/styles";
import { StyleSheet } from "react-native";

export const matchingScreenStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: windowHeight
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
        flex: 1,
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

export const matchingLoading = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
}
})