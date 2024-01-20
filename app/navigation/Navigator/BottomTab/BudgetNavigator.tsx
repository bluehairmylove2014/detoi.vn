import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BudgetScreen from "../../../screens/Budget";

const Stack = createStackNavigator();

const BudgetNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Example"
      options={BudgetScreen.navigationOptions}
      component={BudgetScreen}
    />
  </Stack.Navigator>
);

export default BudgetNavigator;
