import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customerAuthStackParams } from '@constants/customerScreens';

// Import screen component here
import LoginScreen from '../../../screens/authFlow/login/Login';
import OTPVertificationScreen from '../../../screens/authFlow/otpVertification/OTPVertification';

const Stack = createNativeStackNavigator<customerAuthStackParams>();
export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Then, put stack.screen for your screen component here (in the end) */}

      <Stack.Group key={'auth-group'} screenOptions={{ headerShown: false }}>
        <Stack.Screen component={LoginScreen} name="Login" />
        <Stack.Screen
          component={OTPVertificationScreen}
          name="OTPVertification"
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
