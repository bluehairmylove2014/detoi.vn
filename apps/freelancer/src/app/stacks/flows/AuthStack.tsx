import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerAuthStackParams } from '@constants/freelancerScreens';

// Import screen component here
import LoginScreen from '../../../screens/authFlow/login/Login';
import OTPVertificationScreen from '../../../screens/authFlow/otpVertification/OTPVertification';

const Stack = createNativeStackNavigator<freelancerAuthStackParams>();
export const AuthStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Then, put stack.screen for your screen component here (in the end) */}

      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={OTPVertificationScreen}
        name="OTPVertification"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
