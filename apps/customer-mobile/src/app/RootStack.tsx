import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { customerRootStackParamList } from '../config';

// Import screen component here
import HomeScreen from '../screens/home/Home';
import ChooseLocationScreen from '../screens/chooseLocation/ChooseLocation';
import IntroScreen from '../screens/intro';

export const RStack = createNativeStackNavigator<customerRootStackParamList>();
export const RootNavigationContainer = ({
  initRoute,
}: {
  initRoute?: keyof customerRootStackParamList;
}) => {
  return (
    <NavigationContainer>
      <RStack.Navigator initialRouteName={initRoute}>
        {/* Then, put stack.screen for your screen component here (in the end) */}
        <RStack.Screen
          component={IntroScreen}
          name="Intro"
          options={{ headerShown: false }}
          
        />
        <RStack.Screen
          component={HomeScreen}
          name="Home"
          options={{ headerShown: false }}
        />
        <RStack.Screen
          component={ChooseLocationScreen}
          name="ChooseLocation"
          options={{ headerShown: false }}
        />
      </RStack.Navigator>
    </NavigationContainer>
  );
};
