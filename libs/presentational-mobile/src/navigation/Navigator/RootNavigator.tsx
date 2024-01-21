import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { userPreferences } from "ducks";
import { ComponentsStyle } from '../../style/index';

import IntroScreen from "../../screens/Intro";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const RootNavigator = (): React.ReactElement => {
  let hasAcceptedTermsOfUseVersion = false;
  // Preferences.currentTermsOfUseVersion ===
  // useSelector(userPreferences.selectors.getAcceptedTermsOfUseVersion);

  setTimeout(() => {
    hasAcceptedTermsOfUseVersion = true;
  }, 3000);

  return (
    <Stack.Navigator>
      {hasAcceptedTermsOfUseVersion ? (
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={screenOptions} />
      ) : (
        <Stack.Screen name="Intro" component={IntroScreen} options={screenOptions} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
