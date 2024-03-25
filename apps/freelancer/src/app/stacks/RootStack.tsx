import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { freelancerGlobalStacks } from '@constants/freelancerStacks';

// Import screen component here
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './flows';
import { MainFlowStack } from './MainFlowStack';
import { COLOR_PALETTE } from '@present-native/styles';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLOR_PALETTE.white,
  },
};
const GlobalStack = createNativeStackNavigator<freelancerGlobalStacks>();

export const RootStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <GlobalStack.Navigator initialRouteName="MainStack">
        <GlobalStack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <GlobalStack.Screen
            name="AuthStack"
            options={{
              headerShown: false,
            }}
          >
            {() => <AuthStack isLogged={isLogged} />}
          </GlobalStack.Screen>
          <GlobalStack.Screen
            name="MainStack"
            options={{
              headerShown: false,
            }}
          >
            {() => <MainFlowStack isLogged={isLogged} />}
          </GlobalStack.Screen>
        </GlobalStack.Group>
      </GlobalStack.Navigator>
    </NavigationContainer>
  );
};
