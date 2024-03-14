import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { customerRootStackParamList } from '../config';

// Import screen component here
import HomeScreen from '../screens/home/Home';
import ChooseLocationScreen from '../screens/chooseLocation/ChooseLocation';
import LoginScreen from '../screens/login/Login';
import OTPVertificationScreen from '../screens/otpVertification/OTPVertification';
import IntroScreen from '../screens/intro/Intro';
import ChooseServiceScreen from '../screens/chooseService/ChooseService';
import ProvideDetailScreen from '../screens/provideDetail/ProvideDetail';
import ProvideDateScreen from '../screens/provideDate/ProvideDate';
import SummaryScreen from '../screens/summary/Summary';
import FreelanceerDetailScreen from "../screens/freelancerDetail/FreelancerDetail";
import OnServiceScreen from '../screens/onService/OnService';
import DetailImageScreen from "../screens/imageDetail/ImageDetail";

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
          component={LoginScreen}
          name="Login"
          options={{ headerShown: false }}
        />
        <RStack.Screen
          component={OTPVertificationScreen}
          name="OTPVertification"
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
        <RStack.Screen
          component={ChooseServiceScreen}
          name="ChooseService"
          options={{ headerShown: false }}
        />
        <RStack.Screen
          component={ProvideDetailScreen}
          name="ProvideDetail"
          options={{ headerShown: false }}
        />
        <RStack.Screen
          component={ProvideDateScreen}
          name="ProvideDate"
          options={{ headerShown: false }}
        />
        <RStack.Screen
          component={SummaryScreen}
          name="Summary"
          options={{ headerShown: false }}
        />
        <RStack.Screen
          component={FreelanceerDetailScreen}
          name="FreelancerDetail"
          options={{ headerShown: false }}
        />
        <RStack.Screen
          component={OnServiceScreen}
          name="OnService"
          options={{ headerShown: false }}
        />
        <RStack.Screen
          component={DetailImageScreen}
          name="ImageDetail"
          options={{ headerShown: false }}
        />
      </RStack.Navigator>
    </NavigationContainer>
  );
};
