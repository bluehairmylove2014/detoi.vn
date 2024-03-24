import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customerAccountStackParams } from '@constants/customerScreens';

// Import screen component here
import AccountScreen from '../../../screens/accountFlow/Account/Account';

const Stack = createNativeStackNavigator<customerAccountStackParams>();
export const AccountStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Account">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Group key={'account-auth'} screenOptions={{ headerShown: false }}>
        <Stack.Screen component={AccountScreen} name="Account" />
      </Stack.Group>
    </Stack.Navigator>
  );
};
