import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerEndowStackParams } from '@constants/freelancerScreens';

// Import screen component here
import EndowScreen from '../../../screens/endowFlow/Endow/Endow';

const Stack = createNativeStackNavigator<freelancerEndowStackParams>();
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
