import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";

import { Text } from "@presentational-mobile/atoms"; 
import { Layout, Colors, ComponentsStyle } from "@presentational-mobile/style";

const navigationOptions = (): StackNavigationOptions => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTintColor: Colors.grey100,
  headerBackTitleVisible: false,
  headerTitle: () => (
    <Text.Header style={Layout.androidNavTitle}>ABOUT_SCREEN_TITLE</Text.Header>
  ),
});

export default navigationOptions;
