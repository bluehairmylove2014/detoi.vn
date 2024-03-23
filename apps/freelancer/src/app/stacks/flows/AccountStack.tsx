import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerAccountStackParams } from '@constants/freelancerScreens';

// Import screen component here
import AccountScreen from '../../../screens/accountFlow/Account/Account';

const Stack = createNativeStackNavigator<freelancerAccountStackParams>();
export const AccountStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Account">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Screen
        component={AccountScreen}
        name="Account"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
