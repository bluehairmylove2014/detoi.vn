import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TabBarIcon } from "components";
import { t } from "utils";
import { Colors } from "style";
 
import BudgetNavigator from "./BottomTab/BudgetNavigator"; 

const BottomTab = createBottomTabNavigator();

const BudgetOptions = {
  tabBarLabel: t("BUDGET_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-calculator"} />,
};

const BottomTabNavigator = (): React.ReactElement => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomTab.Navigator
      initialRouteName={"BudgetNavigator"}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
        tabBarBadgeStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 2,
          borderTopColor: Colors.primary,
          paddingBottom: bottom / 2 + 6,
        },
      }}
    >
      <BottomTab.Screen
        name="BudgetNavigator"
        options={BudgetOptions}
        component={BudgetNavigator}
      />  
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
