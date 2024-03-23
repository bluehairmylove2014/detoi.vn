import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { freelancerGlobalStacks } from '@constants/freelancerStacks';

// Import screen component here
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './flows';
import { MainFlowStack } from './MainFlowStack';

const GlobalStack = createNativeStackNavigator<freelancerGlobalStacks>();

export const RootStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <NavigationContainer>
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
