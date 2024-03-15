import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { customerTabParamList } from '../../config';

// Import screen component here
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

export const Tab = createBottomTabNavigator<customerTabParamList>();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarStyle: {
            display: 'flex',
            flexDirection: 'row',
            // alignItems: 'flex-start',
            // justifyContent: 'space-between',
            width: windowWidth,
            paddingTop: 'auto',
            paddingBottom: 'auto',
            backgroundColor: COLOR_PALETTE.white,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          component={HomeStack}
          name="HomeStack"
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                // iconName="faHouseFire"
                tabName="home"
              />
            ),
          }}
        />
        <Tab.Screen
          component={EndowStack}
          name="EndowStack"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                // iconName="faTags"
                tabName="endow"
              />
            ),
          }}
        />
        <Tab.Screen
          component={MessagesStack}
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
        />
        <Tab.Screen
          component={OrdersStack}
          name="OrdersStack"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                // iconName="faFileInvoiceDollar"
                tabName="orders"
              />
            ),
          }}
        />
        <Tab.Screen
          component={AccountStack}
          name="AccountStack"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                // iconName="faUser"
                tabName="account"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
