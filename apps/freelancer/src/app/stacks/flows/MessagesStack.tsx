import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerMessageStackParams } from '@constants/freelancerScreens';

// Import screen component here
import MessageScreen from '../../../screens/messagesFlow/Message/Message';

const Stack = createNativeStackNavigator<freelancerMessageStackParams>();
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
