import { StyleSheet } from "react-native";

import { Layout } from "@presentational-mobile/style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  monthlyBudgetButton: {
    marginVertical: 6,
  },
});
