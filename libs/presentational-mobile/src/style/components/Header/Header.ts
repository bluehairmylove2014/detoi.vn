import { StyleSheet } from "react-native";

import { Colors } from "@presentational-mobile/style";

export default StyleSheet.create({
  header: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    shadowColor: "transparent",
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
