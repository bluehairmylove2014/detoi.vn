import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customerMessageStackParams } from '@constants/customerScreens';

// Import screen component here
import MessageScreen from '../../../screens/messagesFlow/Message/Message';

const Stack = createNativeStackNavigator<customerMessageStackParams>();
export const MessagesStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Message">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Group
        key={'messages-non-auth'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={MessageScreen} name="Message" />
      </Stack.Group>
    </Stack.Navigator>
  );
};
