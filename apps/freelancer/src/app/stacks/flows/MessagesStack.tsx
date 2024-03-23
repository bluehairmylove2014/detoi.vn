import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { messagesStackParamList } from '../../../config';

// Import screen component here
import MessageScreen from '../../../screens/messagesFlow/Message/Message';

const Stack = createNativeStackNavigator<messagesStackParamList>();
export const MessagesStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Message">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Screen
        component={MessageScreen}
        name="Message"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
