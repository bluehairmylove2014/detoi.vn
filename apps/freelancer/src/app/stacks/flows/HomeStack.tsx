import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customerRootStackParamList } from '../../../config';

// Import screen component here
import HomeScreen from '../../../screens/homeFlow/home/Home';

const Stack = createNativeStackNavigator<customerRootStackParamList>();
export const HomeStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Then, put stack.screen for your screen component here (in the end) */}

      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
