import { StyleSheet } from "react-native";

import { Colors } from "@presentational-mobile/style";

export default StyleSheet.create({
  default: {
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    margin: 6,
    borderWidth: 1.5,
  },
  selected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  unselected: {
    backgroundColor: Colors.grey10,
    borderColor: Colors.black,
  },
});
