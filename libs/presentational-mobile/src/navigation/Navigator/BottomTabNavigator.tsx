import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabBarIcon } from '../../atoms/index';
import { Colors } from '../../style/index';

import BudgetNavigator from './BottomTab/BudgetNavigator';

const BottomTab = createBottomTabNavigator();

interface BudgetOptionsProps {
  focused: boolean;
}

const BudgetOptions: {
  tabBarLabel: string;
  tabBarIcon: (props: BudgetOptionsProps) => JSX.Element;
} = {
  tabBarLabel: 'BUDGET_SCREEN_TAB_NAME',
  tabBarIcon: ({ focused }: BudgetOptionsProps) => (
    <TabBarIcon focused={focused} name={'md-calculator'} />
  ),
};

const BottomTabNavigator = (): React.ReactElement => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomTab.Navigator
      initialRouteName={'BudgetNavigator'}
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
