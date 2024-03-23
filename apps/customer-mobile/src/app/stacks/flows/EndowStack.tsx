import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customerEndowStackParams } from '@constants/customerScreens';

// Import screen component here
import EndowScreen from '../../../screens/endowFlow/Endow/Endow';

const Stack = createNativeStackNavigator<customerEndowStackParams>();
export const EndowStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Endow">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Group key={'Endow-auth'} screenOptions={{ headerShown: false }}>
        <Stack.Screen component={EndowScreen} name="Endow" />
      </Stack.Group>
    </Stack.Navigator>
  );
};
