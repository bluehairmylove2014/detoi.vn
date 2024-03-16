import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { endowStackParamList } from '../../../config';

// Import screen component here
import EndowScreen from '../../../screens/endowFlow/Endow/Endow';

const Stack = createNativeStackNavigator<endowStackParamList>();
export const EndowStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Endow">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Screen
        component={EndowScreen}
        name="Endow"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
