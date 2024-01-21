import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";

import { Text } from "@presentational-mobile/atoms";

import { Layout, ComponentsStyle } from "@presentational-mobile/style";

const navigationOptions = (): StackNavigationOptions => ({
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitle: null,
  headerTitle: () => <Text.H1 style={Layout.androidNavTitle}>BUDGET_SCREEN_TITLE</Text.H1>,
});

export default navigationOptions;
