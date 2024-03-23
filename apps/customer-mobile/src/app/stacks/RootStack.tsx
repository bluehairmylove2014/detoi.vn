import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { customerGlobalStacks } from '@constants/customerStacks';

// Import screen component here
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './flows';
import { MainFlowStack } from './MainFlowStack';

const GlobalStack = createNativeStackNavigator<customerGlobalStacks>();

export const RootStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <NavigationContainer>
      <GlobalStack.Navigator initialRouteName="MainStack">
        <GlobalStack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <GlobalStack.Screen name="AuthStack" component={AuthStack} />
          <GlobalStack.Screen name="MainStack">
            {() => <MainFlowStack isLogged={isLogged} />}
          </GlobalStack.Screen>
        </GlobalStack.Group>
      </GlobalStack.Navigator>
    </NavigationContainer>
  );
};
