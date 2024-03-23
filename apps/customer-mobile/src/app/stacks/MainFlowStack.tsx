import React from 'react';
import TabBarIcon from '@present-native/molecules/bottomTab/TabBarIcon';
import {
  AccountStack,
  EndowStack,
  HomeStack,
  MessagesStack,
  OrdersStack,
} from './flows';
import { COLOR_PALETTE } from '@present-native/styles';
import { windowWidth } from '@constants/dimension';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { customerBottomTabChildStacks } from '@constants/customerStacks';

export const Tab = createBottomTabNavigator<customerBottomTabChildStacks>();
export const MainFlowStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarStyle: {
          // display: isLogged ? 'flex' : 'none',
          display: 'none',
          flexDirection: 'row',
          width: windowWidth,
          paddingTop: 'auto',
          paddingBottom: 'auto',
          backgroundColor: COLOR_PALETTE.white,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Group key={'bottom-tab-non-auth'}>
        <Tab.Screen
          name="HomeStack"
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon focused={focused} tabName="home" />
            ),
          }}
        >
          {() => <HomeStack isLogged={isLogged} />}
        </Tab.Screen>
      </Tab.Group>
      <Tab.Group key={'bottom-tab-auth'}>
        <Tab.Screen
          name="EndowStack"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon focused={focused} tabName="endow" />
            ),
          }}
        >
          {() => <EndowStack isLogged={isLogged} />}
        </Tab.Screen>
        <Tab.Screen
          name="MessagesStack"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                tabName="messages"
                notification={true}
              />
            ),
          }}
        >
          {() => <MessagesStack isLogged={isLogged} />}
        </Tab.Screen>
        <Tab.Screen
          name="OrdersStack"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon focused={focused} tabName="orders" />
            ),
          }}
        >
          {() => <OrdersStack isLogged={isLogged} />}
        </Tab.Screen>
        <Tab.Screen
          name="AccountStack"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon focused={focused} tabName="account" />
            ),
          }}
        >
          {() => <AccountStack isLogged={isLogged} />}
        </Tab.Screen>
      </Tab.Group>
    </Tab.Navigator>
  );
};
